import { Hono } from "hono";
import type { AppEnv } from "../middleware/auth";
import { createTeam, getInvitationCode, getTeamMembersByCreatorId } from "../services/team.service";

export const teamRegistrationRouter = new Hono<AppEnv>();

teamRegistrationRouter.post("/", async (c) => {
    const session = c.var.session;

    const teamName = c.req.query("teamName");

    if (!teamName) {
        return c.json({message: "Missing a required field"}, 400);
    } 

    await createTeam(c.env.wishDB, session.user.id, teamName);

    return c.json({}, 200);
});

teamRegistrationRouter.get("/link", async (c) => {
    const session = c.var.session;

    const invitationCode = await getInvitationCode(c.env.wishDB, session.user.id);

    return c.json({link: c.env.CLIENT_URL + "/api/invite/" + invitationCode}, 200);
});

teamRegistrationRouter.get("/members", async (c) => {
    const session = c.var.session;

    const teamMembers = await getTeamMembersByCreatorId(c.env.wishDB, session.user.id);
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
