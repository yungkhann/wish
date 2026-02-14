import type { D1Database } from "@cloudflare/workers-types";
import { eq } from "drizzle-orm";
import { getDb } from "../db/db";
import { team } from "../db/schema";
import { AppError } from "../exception/AppError";
import { getUsersByTeamId } from "./user.service";

export async function createTeam(
  binding: D1Database,
  creatorUserId: string,
  teamName: string
) {
  const db = getDb(binding);

  const creatorTeam = await getTeamByCreatorId(binding, creatorUserId);

  if (creatorTeam) {
    throw new AppError("The user has already created a team");
  }

  await db.insert(team).values({
    id: crypto.randomUUID(),
    name: teamName,
    creatorId: creatorUserId,
    inviteCode: crypto.randomUUID()
  });
}

// export async function deleteTeam(
//   binding: D1Database,
//   creatorUserId: string
// ) {
//   const db = getDb(binding);

//   const creatorTeam = await getTeamByCreatorId(binding, creatorUserId);

//   if (!creatorTeam) {
//     throw new AppError("The user does not have a team");
//   }

//   await db.delete(team).where(eq(team.creatorId, creatorUserId));
// }

export async function getInvitationCode(binding: D1Database, creatorUserId: string) {
  const db = getDb(binding);

  const t = await db
    .select()
    .from(team)
    .where(eq(team.creatorId, creatorUserId))
    .get();

    return t?.inviteCode;
}

export async function getTeamByInvitaionCode(binding: D1Database, invitaionCode:string) {
  const db = getDb(binding);

  const t = await db
    .select()
    .from(team)
    .where(eq(team.inviteCode, invitaionCode))
    .get();

  return t;
}

export async function getTeamByCreatorId(binding: D1Database, creatorId:string) {
  const db = getDb(binding);

  const t = await db
    .select()
    .from(team)
    .where(eq(team.creatorId, creatorId))
    .get();

  return t;
}

export async function getTeamMembersByCreatorId(binding: D1Database, creatorId:string) {
  const db = getDb(binding);

  const t = await getTeamByCreatorId(binding, creatorId);

  if (!t) {
    throw new AppError("The user does not have a team");
  }

  const teamMembers = await getUsersByTeamId(binding, t.id);

  return teamMembers;
}