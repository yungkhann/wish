import type { D1Database } from "@cloudflare/workers-types";
import { eq } from "drizzle-orm";
import { getDb } from "../db/db";
import { team } from "../db/schema";

export async function createTeam(
  binding: D1Database,
  creatorUserId: string,
  teamName: string
) {
  const db = getDb(binding);

  await db.insert(team).values({
    id: crypto.randomUUID(),
    name: teamName,
    creatorId: creatorUserId,
    inviteCode: crypto.randomUUID()
  });
}

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