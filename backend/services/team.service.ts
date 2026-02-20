import type { D1Database } from "@cloudflare/workers-types";
import { and, eq, or } from "drizzle-orm";
import { getDb } from "../db/db";
import { invite, team, user } from "../db/schema";
import { AppError } from "../exception/AppError";
import { rejectAllPendingInvites } from "./invitation.service";

const MAX_TEAM_SIZE = 4;

export async function createTeam(
  binding: D1Database,
  creatorUserId: string,
  teamName: string,
) {
  const db = getDb(binding);

  const creatorTeam = await getTeamByCreatorId(binding, creatorUserId);
  if (creatorTeam) {
    throw new AppError("You have already created a team");
  }

  const nameTaken = await db
    .select({ id: team.id })
    .from(team)
    .where(eq(team.name, teamName))
    .get();

  if (nameTaken) {
    throw new AppError("A team with this name already exists");
  }

  const existingUser = await db
    .select({ teamId: user.teamId })
    .from(user)
    .where(eq(user.id, creatorUserId))
    .get();

  if (existingUser?.teamId) {
    throw new AppError("You are already in a team");
  }

  const newTeamId = crypto.randomUUID();

  await rejectAllPendingInvites(binding, creatorUserId);

  await db.batch([
    db.insert(team).values({
      id: newTeamId,
      name: teamName,
      creatorId: creatorUserId,
      inviteCode: crypto.randomUUID(),
    }),
    db
      .update(user)
      .set({ teamId: newTeamId })
      .where(eq(user.id, creatorUserId)),
  ]);
}

export async function deleteTeam(binding: D1Database, creatorUserId: string) {
  const db = getDb(binding);

  const t = await getTeamByCreatorId(binding, creatorUserId);

  if (!t) {
    throw new AppError("You do not have a team");
  }

  if (t.creatorId !== creatorUserId) {
    throw new AppError("Only the team owner can dissolve the team", 403);
  }

  await db.batch([
    db.update(user).set({ teamId: null }).where(eq(user.teamId, t.id)),
    db
      .update(invite)
      .set({ status: "rejected" })
      .where(
        and(
          eq(invite.teamId, t.id),
          or(eq(invite.status, "pending"), eq(invite.status, "accepted")),
        ),
      ),
    db.delete(team).where(eq(team.id, t.id)),
  ]);
}

export async function removeMember(
  binding: D1Database,
  creatorUserId: string,
  targetUserId: string,
) {
  const db = getDb(binding);

  const t = await getTeamByCreatorId(binding, creatorUserId);

  if (!t) {
    throw new AppError("You do not have a team");
  }

  if (targetUserId === creatorUserId) {
    throw new AppError("Cannot remove yourself. Use dissolve team instead.");
  }

  const targetUser = await db
    .select({ teamId: user.teamId })
    .from(user)
    .where(eq(user.id, targetUserId))
    .get();

  if (targetUser?.teamId !== t.id) {
    throw new AppError("User is not a member of your team");
  }

  await db.batch([
    db.update(user).set({ teamId: null }).where(eq(user.id, targetUserId)),
    db
      .update(invite)
      .set({ status: "removed" })
      .where(
        and(
          eq(invite.teamId, t.id),
          eq(invite.userId, targetUserId),
          eq(invite.status, "accepted"),
        ),
      ),
  ]);
}

export async function leaveTeam(binding: D1Database, userId: string) {
  const db = getDb(binding);

  const currentUser = await db
    .select({ teamId: user.teamId })
    .from(user)
    .where(eq(user.id, userId))
    .get();

  if (!currentUser?.teamId) {
    throw new AppError("You are not in a team");
  }

  const t = await getTeamByCreatorId(binding, userId);
  if (t && t.id === currentUser.teamId) {
    throw new AppError("Team owners cannot leave. Dissolve the team instead.");
  }

  await db.batch([
    db.update(user).set({ teamId: null }).where(eq(user.id, userId)),
    db
      .update(invite)
      .set({ status: "left" })
      .where(
        and(
          eq(invite.teamId, currentUser.teamId),
          eq(invite.userId, userId),
          eq(invite.status, "accepted"),
        ),
      ),
  ]);
}

export async function getInvitationCode(
  binding: D1Database,
  creatorUserId: string,
) {
  const db = getDb(binding);

  const t = await db
    .select()
    .from(team)
    .where(eq(team.creatorId, creatorUserId))
    .get();

  return t?.inviteCode;
}

export async function getTeamByInvitationCode(
  binding: D1Database,
  invitationCode: string,
) {
  const db = getDb(binding);

  return await db
    .select()
    .from(team)
    .where(eq(team.inviteCode, invitationCode))
    .get();
}

export async function getTeamByCreatorId(
  binding: D1Database,
  creatorId: string,
) {
  const db = getDb(binding);

  return await db
    .select()
    .from(team)
    .where(eq(team.creatorId, creatorId))
    .get();
}

export async function getTeamById(binding: D1Database, teamId: string) {
  const db = getDb(binding);

  return await db.select().from(team).where(eq(team.id, teamId)).get();
}

/**
 * Returns the number of users currently in a team.
 */
export async function getTeamMemberCount(
  binding: D1Database,
  teamId: string,
): Promise<number> {
  const db = getDb(binding);

  const members = await db
    .select({ id: user.id })
    .from(user)
    .where(eq(user.teamId, teamId));

  return members.length;
}

export { MAX_TEAM_SIZE };

/**
 * Returns team members + pending invite requests for the team
 * the given user belongs to. Any team member can call this.
 */
export async function getTeamMembersAndRequests(
  binding: D1Database,
  userId: string,
) {
  const db = getDb(binding);

  const currentUser = await db
    .select({ teamId: user.teamId })
    .from(user)
    .where(eq(user.id, userId))
    .get();

  if (!currentUser?.teamId) {
    throw new AppError("You are not in a team");
  }

  const teamId = currentUser.teamId;

  const t = await getTeamById(binding, teamId);

  if (!t) {
    throw new AppError("Team not found");
  }

  const members = await db
    .select({ id: user.id, email: user.email })
    .from(user)
    .where(eq(user.teamId, teamId));

  const pendingUsers = await db
    .select({
      userId: invite.userId,
      email: user.email,
      inviteId: invite.id,
    })
    .from(invite)
    .innerJoin(user, eq(invite.userId, user.id))
    .where(and(eq(invite.teamId, teamId), eq(invite.status, "pending")));

  const result = [
    ...members.map((m) => ({
      userId: m.id,
      email: m.email,
      role: m.id === t.creatorId ? ("owner" as const) : ("member" as const),
    })),
    ...pendingUsers.map((p) => ({
      ...p,
      role: "request" as const,
    })),
  ];

  return { teamName: t.name, members: result };
}

export async function renameTeam(
  binding: D1Database,
  creatorUserId: string,
  newName: string,
) {
  const db = getDb(binding);

  const t = await getTeamByCreatorId(binding, creatorUserId);

  if (!t) {
    throw new AppError("You do not have a team");
  }

  if (t.creatorId !== creatorUserId) {
    throw new AppError("Only the team owner can rename the team", 403);
  }

  const nameTaken = await db
    .select({ id: team.id })
    .from(team)
    .where(eq(team.name, newName))
    .get();

  if (nameTaken) {
    throw new AppError("A team with this name already exists");
  }

  await db.update(team).set({ name: newName }).where(eq(team.id, t.id));
}
