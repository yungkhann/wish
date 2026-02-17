import { Hono } from "hono";
import { z } from "zod";
import type { AppEnv } from "../middleware/auth";
import {
  createTeam,
  deleteTeam,
  getInvitationCode,
  getTeamMembersAndRequests,
  leaveTeam,
  removeMember,
  renameTeam,
} from "../services/team.service";

const createTeamSchema = z.object({
  teamName: z.string().min(1, "Team name is required").max(100),
});

const renameTeamSchema = z.object({
  teamName: z.string().min(1, "Team name is required").max(100),
});

export const teamRegistrationRouter = new Hono<AppEnv>();

teamRegistrationRouter.post("/", async (c) => {
  const session = c.var.session;

  const body = await c.req.json();
  const result = createTeamSchema.safeParse(body);

  if (!result.success) {
    return c.json(
      { error: "Validation failed", details: result.error.issues },
      400,
    );
  }

  await createTeam(c.env.wishDB, session.user.id, result.data.teamName);

  return c.json({ success: true }, 200);
});

teamRegistrationRouter.get("/link", async (c) => {
  const session = c.var.session;

  const invitationCode = await getInvitationCode(c.env.wishDB, session.user.id);

  return c.json({ link: c.env.CLIENT_URL + "/invite#" + invitationCode }, 200);
});

teamRegistrationRouter.get("/members", async (c) => {
  const session = c.var.session;

  const members = await getTeamMembersAndRequests(
    c.env.wishDB,
    session.user.id,
  );

  return c.json(members, 200);
});

teamRegistrationRouter.delete("/members/:userId", async (c) => {
  const session = c.var.session;
  const targetUserId = c.req.param("userId");

  await removeMember(c.env.wishDB, session.user.id, targetUserId);

  return c.json({ success: true }, 200);
});

teamRegistrationRouter.post("/leave", async (c) => {
  const session = c.var.session;

  await leaveTeam(c.env.wishDB, session.user.id);

  return c.json({ success: true }, 200);
});

teamRegistrationRouter.patch("/name", async (c) => {
  const session = c.var.session;

  const body = await c.req.json();
  const result = renameTeamSchema.safeParse(body);

  if (!result.success) {
    return c.json(
      { error: "Validation failed", details: result.error.issues },
      400,
    );
  }

  await renameTeam(c.env.wishDB, session.user.id, result.data.teamName);

  return c.json({ success: true }, 200);
});

teamRegistrationRouter.delete("/", async (c) => {
  const session = c.var.session;

  await deleteTeam(c.env.wishDB, session.user.id);

  return c.json({ success: true }, 200);
});
