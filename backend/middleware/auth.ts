import { createMiddleware } from "hono/factory";
import type { Bindings } from "../index";
import { createAuth } from "../lib/auth";

export type AuthSession = {
  user: {
    id: string;
    email: string;
    name: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null;
  };
  session: {
    id: string;
    token: string;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    ipAddress?: string | null;
    userAgent?: string | null;
    userId: string;
  };
};

export type AppEnv = {
  Bindings: Bindings;
  Variables: {
    session: AuthSession;
  };
};

export const authMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  const auth = createAuth(c.env);

  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  c.set("session", session as unknown as AuthSession);

  await next();
});
