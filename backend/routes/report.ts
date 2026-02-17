import { eq, isNotNull, sql } from "drizzle-orm";
import { Hono } from "hono";
import { getDb } from "../db/db";
import { team, user } from "../db/schema";
import type { Bindings } from "../index";

export const reportRouter = new Hono<{ Bindings: Bindings }>();

reportRouter.get("/", async (c) => {
  const secret = c.req.header("x-report-secret");

  if (!secret || secret !== c.env.GAS_SECRET) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const db = getDb(c.env.wishDB);

  const teamMemberCounts = db
    .select({
      teamId: user.teamId,
      memberCount: sql<number>`count(*)`.as("member_count"),
    })
    .from(user)
    .where(isNotNull(user.teamId))
    .groupBy(user.teamId)
    .as("team_counts");

  const rows = await db
    .select({
      name: user.name,
      surname: user.surname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      educationLevel: user.educationLevel,
      iin: user.iin,
      isMinor: user.isMinor,
      parentPhoneNumber: user.parentPhoneNumber,
      teamName: team.name,
      teamCreatorId: team.creatorId,
      userId: user.id,
      teamMemberCount: teamMemberCounts.memberCount,
      registeredAt: user.createdAt,
    })
    .from(user)
    .where(isNotNull(user.name))
    .leftJoin(team, eq(user.teamId, team.id))
    .leftJoin(teamMemberCounts, eq(user.teamId, teamMemberCounts.teamId));

  const data = rows.map((row) => ({
    name: row.name,
    surname: row.surname,
    email: row.email,
    phoneNumber: row.phoneNumber,
    educationLevel: row.educationLevel,
    iin: row.iin,
    isMinor: row.isMinor,
    parentPhoneNumber: row.parentPhoneNumber ?? "",
    teamName: row.teamName ?? "No team",
    isTeamCreator: row.teamCreatorId === row.userId,
    teamMemberCount: row.teamMemberCount ?? 0,
    registeredAt: row.registeredAt,
  }));

  return c.json(data);
});
