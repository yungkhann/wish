import { Hono } from "hono";
import { z } from "zod";
import type { AppEnv } from "../middleware/auth";
import {
  createTeam,
  getInvitationCode,
  getTeamMembersByCreatorId,
} from "../services/team.service";

const createTeamSchema = z.object({
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

  return c.json(
    { link: c.env.CLIENT_URL + "/api/invite/" + invitationCode },
    200,
  );
});

teamRegistrationRouter.get("/members", async (c) => {
  const session = c.var.session;

  const teamMembers = await getTeamMembersByCreatorId(
    c.env.wishDB,
    session.user.id,
  );
  const teamMembersDto = [];

  for (const teamMember of teamMembers) {
    let memberType = "member";

    if (teamMember.id === session.user.id) {
      memberType = "owner";
    }

    teamMembersDto.push({
      email: teamMember.email,
      memberType: memberType,
    });
  }

  return c.json(teamMembersDto, 200);
});
