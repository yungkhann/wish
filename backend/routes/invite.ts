import { Hono } from "hono";
import type { Bindings } from "../index";
import { createAuth } from "../lib/auth";
import { createInvitaion, getAllInvites, handleInviteStatus } from "../services/invitaion.service";
import { getUserByUserId } from "../services/user.service";

export const userInvitationRouter = new Hono<{ Bindings: Bindings }>();

userInvitationRouter.get("/:uuid", async (c) => {
    const auth = createAuth(c.env);

    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });

    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    const invitaionCode = c.req.param("uuid");
    
    await createInvitaion(c.env.wishDB, invitaionCode, session.user.id);

    return c.json({message: "Successfully registered invitation"}, 200);
});

userInvitationRouter.post("/all", async (c) => {
    const auth = createAuth(c.env);

    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });

    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

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
    const auth = createAuth(c.env);

    const session = await auth.api.getSession({
        headers: c.req.raw.headers,
    });

    if (!session) {
        return c.json({ error: 'Unauthorized' }, 401);
    }

    const invitaionId = c.req.param("uuid");
    const invitaionStatus = c.req.param("inviteStatus");

    await handleInviteStatus(c.env.wishDB, invitaionId, invitaionStatus);

    return c.json(200);
});