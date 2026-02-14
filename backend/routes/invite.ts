import { Hono } from "hono";
import type { AppEnv } from "../middleware/auth";
import { createInvitation, getAllInvites, handleInviteStatus } from "../services/invitation.service";
import { getUserByUserId } from "../services/user.service";

export const userInvitationRouter = new Hono<AppEnv>();

userInvitationRouter.get("/:uuid", async (c) => {
    const session = c.var.session;

    const invitationCode = c.req.param("uuid");
    
    await createInvitation(c.env.wishDB, invitationCode, session.user.id);

    return c.json({message: "Successfully registered invitation"}, 200);
});

userInvitationRouter.post("/all", async (c) => {
    const session = c.var.session;

    const invites = await getAllInvites(c.env.wishDB, session.user.id);

    const invitesDto = [];

    for (const inv of invites) {
        const invitedUser = await getUserByUserId(c.env.wishDB, inv.userId);
        invitesDto.push({
            inviteId: inv.id,
            email: invitedUser?.email,
            status: inv.status
        })
    }

    return c.json(invitesDto, 200);
});

userInvitationRouter.post("/:uuid/status/:inviteStatus", async (c) => {
    const session = c.var.session;

    const invitationId = c.req.param("uuid");
    const invitationStatus = c.req.param("inviteStatus");

    await handleInviteStatus(c.env.wishDB, invitationId, invitationStatus);

    return c.json(200);
});
