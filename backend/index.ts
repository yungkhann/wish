import type { D1Database } from "@cloudflare/workers-types";
import { Hono } from "hono";
import { AppError } from "./exception/AppError";
// import { authRouter } from "./routes/auth";
import { createAuth } from "./lib/auth";
import { userInvitationRouter } from "./routes/invite";
import { userRegistrationRouter } from "./routes/register";
import { teamRegistrationRouter } from "./routes/team";

export type Bindings = {
  wishDB: D1Database;
  CLIENT_URL: string;
  BETTER_AUTH_SECRET: string;
  GAS_URL: string;
  GAS_SECRET: string
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

app.all("/auth/*", async (c) => {

  const auth = createAuth(c.env)
  return auth.handler(c.req.raw)
})

app.route("/user", userRegistrationRouter);

app.route("/team", teamRegistrationRouter);

app.route("/invite", userInvitationRouter);

app.onError((err, c) => {
  if (err instanceof AppError) {
    return c.json({ error: err.message }, err.status as any);
  }

  console.error(err);
  return c.json({ error: "Internal server error" }, 500);
});

export type AppType = typeof app;
export default app;
