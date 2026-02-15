import type { D1Database } from "@cloudflare/workers-types";
import { eq } from "drizzle-orm";
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
  await checkInviteExistence(binding, userId);

  const t = await getTeamByInvitationCode(binding, invitationCode);

  if (!t) {
    throw new AppError("The provided invite code does not exist");
  }

  const memberCount = await getTeamMemberCount(binding, t.id);
  if (memberCount >= MAX_TEAM_SIZE) {
    throw new AppError("This team is already full");
  }

  const db = getDb(binding);

  await db.insert(invite).values({
    id: crypto.randomUUID(),
    teamId: t.id,
    userId: userId,
    status: "pending",
  });
}

async function checkInviteExistence(binding: D1Database, userId: string) {
  const db = getDb(binding);

  const invites = await db
    .select()
    .from(invite)
    .where(eq(invite.userId, userId));

  for (const inv of invites) {
    if (inv.status === "accepted" || inv.status === "pending") {
      throw new AppError("The user already has an active invite");
    }
  }
}

export async function getAllInvites(binding: D1Database, userId: string) {
  const db = getDb(binding);

  const userTeam = await getTeamByCreatorId(binding, userId);

  if (!userTeam) {
    throw new AppError("The user does not have a team");
  }

  return await db.select().from(invite).where(eq(invite.teamId, userTeam.id));
}

export async function handleInviteStatus(
  binding: D1Database,
  invitationId: string,
  invitationStatus: string,
) {
  const db = getDb(binding);

  const invitation = await getInvite(binding, invitationId);

  if (!invitation) {
    throw new AppError("Invitation does not exist");
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

// async function removeInvite(binding: D1Database, userId: string) {
//   const db = getDb(binding);

//   return await db.delete(invite).where(eq(invite.userId, userId));
// }
