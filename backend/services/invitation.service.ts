import type { D1Database } from "@cloudflare/workers-types";
import { and, eq } from "drizzle-orm";
import { getDb } from "../db/db";
import { invite, user } from "../db/schema";
import { AppError } from "../exception/AppError";
import {
  getTeamByCreatorId,
  getTeamByInvitationCode,
  getTeamMemberCount,
  MAX_TEAM_SIZE,
} from "./team.service";

export async function createInvitation(
  binding: D1Database,
  invitationCode: string,
  userId: string,
) {
  const db = getDb(binding);

  const currentUser = await db
    .select({ teamId: user.teamId })
    .from(user)
    .where(eq(user.id, userId))
    .get();

  if (currentUser?.teamId) {
    throw new AppError("You are already in a team");
  }

  const t = await getTeamByInvitationCode(binding, invitationCode);

  if (!t) {
    throw new AppError("The provided invite code does not exist");
  }

  const memberCount = await getTeamMemberCount(binding, t.id);
  if (memberCount >= MAX_TEAM_SIZE) {
    throw new AppError("This team is already full");
  }

  const inviteId = crypto.randomUUID();

  await db.batch([
    db.update(user).set({ teamId: t.id }).where(eq(user.id, userId)),
    db.insert(invite).values({
      id: inviteId,
      teamId: t.id,
      userId: userId,
      status: "accepted",
    }),
    // Reject all other pending invites for this user
    db
      .update(invite)
      .set({ status: "rejected" })
      .where(and(eq(invite.userId, userId), eq(invite.status, "pending"))),
  ]);
}

export async function rejectAllPendingInvites(
  binding: D1Database,
  userId: string,
) {
  const db = getDb(binding);

  return db
    .update(invite)
    .set({ status: "rejected" })
    .where(and(eq(invite.userId, userId), eq(invite.status, "pending")));
}

export async function getAllInvitesWithUsers(
  binding: D1Database,
  userId: string,
) {
  const db = getDb(binding);

  const userTeam = await getTeamByCreatorId(binding, userId);

  if (!userTeam) {
    throw new AppError("The user does not have a team");
  }

  const results = await db
    .select({
      inviteId: invite.id,
      email: user.email,
      status: invite.status,
    })
    .from(invite)
    .innerJoin(user, eq(invite.userId, user.id))
    .where(eq(invite.teamId, userTeam.id));

  return results;
}

export async function handleInviteStatus(
  binding: D1Database,
  requesterId: string,
  invitationId: string,
  invitationStatus: string,
) {
  const db = getDb(binding);

  const invitation = await getInvite(binding, invitationId);

  if (!invitation) {
    throw new AppError("Invitation does not exist");
  }

  const teamCreator = await getTeamByCreatorId(binding, requesterId);
  if (!teamCreator || teamCreator.id !== invitation.teamId) {
    throw new AppError(
      "Only the team owner can accept or reject invitations",
      403,
    );
  }

  if (invitationStatus === "accepted") {
    const memberCount = await getTeamMemberCount(binding, invitation.teamId);
    if (memberCount >= MAX_TEAM_SIZE) {
      throw new AppError("This team is already full");
    }

    await db.batch([
      db
        .update(user)
        .set({ teamId: invitation.teamId })
        .where(eq(user.id, invitation.userId)),
      db
        .update(invite)
        .set({ status: invitationStatus })
        .where(eq(invite.id, invitationId)),
      // Reject all other pending invites for this user
      db
        .update(invite)
        .set({ status: "rejected" })
        .where(
          and(
            eq(invite.userId, invitation.userId),
            eq(invite.status, "pending"),
          ),
        ),
    ]);
    return;
  }

  if (invitationStatus === "rejected") {
    await db
      .update(invite)
      .set({ status: invitationStatus })
      .where(eq(invite.id, invitationId));
    return;
  }

  throw new AppError("Incorrect invitation status is passed");
}

async function getInvite(binding: D1Database, invitationId: string) {
  const db = getDb(binding);

  return await db
    .select()
    .from(invite)
    .where(eq(invite.id, invitationId))
    .get();
}

