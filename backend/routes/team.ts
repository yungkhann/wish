import { Hono } from "hono";
import type { Bindings } from "../index";
import { createAuth } from "../lib/auth";
import { createTeam, getInvitationCode, getTeamMembersByCreatorId } from "../services/team.service";

export const teamRegistrationRouter = new Hono<{ Bindings: Bindings }>();

teamRegistrationRouter.post("/", async (c) => {

    const auth = createAuth(c.env);
    
    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });
    
    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }
    
    const teamName = c.req.query("teamName");

    if (!teamName) {
        return c.json({message: "Missing a required field"}, 400);
    } 

    await createTeam(c.env.wishDB, session.user.id, teamName);

    return c.json({}, 200);
})

teamRegistrationRouter.get("/link", async (c) => {

    const auth = createAuth(c.env);
    
    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });
    
    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    const invitaionCode = await getInvitationCode(c.env.wishDB, session.user.id);

    return c.json({link: c.env.CLIENT_URL + "/api/invite/" + invitaionCode}, 200);
})

teamRegistrationRouter.get("/members", async (c) => {
    const auth = createAuth(c.env);
    
    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });
    
    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

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
})