import { Hono } from "hono";
import { z } from "zod";
import type { AppEnv } from "../middleware/auth";
import {
  createInvitation,
  getAllInvites,
  handleInviteStatus,
} from "../services/invitation.service";
import { getUserByUserId } from "../services/user.service";

const inviteStatusSchema = z.object({
  inviteStatus: z.enum(["accepted", "rejected"], {
    message: 'Status must be "accepted" or "rejected"',
  }),
});

export const userInvitationRouter = new Hono<AppEnv>();

userInvitationRouter.get("/:uuid", async (c) => {
  const session = c.var.session;

  const invitationCode = c.req.param("uuid");

  await createInvitation(c.env.wishDB, invitationCode, session.user.id);

  return c.json({ message: "Successfully registered invitation" }, 200);
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
      status: inv.status,
    });
  }

  return c.json(invitesDto, 200);
});

userInvitationRouter.post("/:uuid/status/:inviteStatus", async (c) => {
  const session = c.var.session;

  const invitationId = c.req.param("uuid");
  const inviteStatus = c.req.param("inviteStatus");

  const result = inviteStatusSchema.safeParse({ inviteStatus });

  if (!result.success) {
    return c.json(
      { error: "Validation failed", details: result.error.issues },
      400,
    );
  }

  await handleInviteStatus(
    c.env.wishDB,
    invitationId,
    result.data.inviteStatus,
  );

  return c.json({ success: true }, 200);
});
