import { Hono } from "hono";
import { z } from "zod";
import type { AppEnv } from "../middleware/auth";
import { createUser, getUserByUserId } from "../services/user.service";

const registrationSchema = z
  .object({
    name: z.string().min(1, "Name is required").max(100),
    surname: z.string().min(1, "Surname is required").max(100),
    phoneNumber: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format"),
    educationLevel: z.string().min(1, "Education level is required"),
    iin: z.string().regex(/^[0-9]{12}$/, "IIN must be exactly 12 digits"),
    isMinor: z.boolean().default(false),
    parentPhoneNumber: z
      .string()
      .regex(/^\+?[0-9]{10,15}$/, "Invalid parent phone number format")
      .optional()
      .nullable(),
  })
  .refine(
    (data) =>
      !data.isMinor ||
      (data.parentPhoneNumber && data.parentPhoneNumber.length > 0),
    {
      message: "Parent phone number is required for minors",
      path: ["parentPhoneNumber"],
    },
  );

export const userRegistrationRouter = new Hono<AppEnv>();

userRegistrationRouter.get("/me", async (c) => {
  const session = c.var.session;

  const profile = await getUserByUserId(c.env.wishDB, session.user.id);

  if (!profile) {
    return c.json({ error: "User not found" }, 404);
  }

  const isRegistered = !!(profile.name && profile.surname && profile.iin);

  return c.json({
    id: profile.id,
    email: profile.email,
    name: profile.name,
    surname: profile.surname,
    phoneNumber: profile.phoneNumber,
    educationLevel: profile.educationLevel,
    iin: profile.iin,
    isMinor: profile.isMinor,
    parentPhoneNumber: profile.parentPhoneNumber,
    teamId: profile.teamId,
    isRegistered,
  });
});

userRegistrationRouter.post("/", async (c) => {
  const session = c.var.session;

  const body = await c.req.json();
  const result = registrationSchema.safeParse(body);

  if (!result.success) {
    return c.json(
      { error: "Validation failed", details: result.error.issues },
      400,
    );
  }

  await createUser(c.env.wishDB, session.user.id, result.data);

  return c.json({ success: true }, 200);
});
