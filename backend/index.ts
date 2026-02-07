import { Hono } from "hono";
import type { D1Database } from "@cloudflare/workers-types";
import { createAuth } from "./lib/auth";

type Bindings = {
  wishDB: D1Database;
  CLIENT_URL: string;
  BETTER_AUTH_SECRET: string;
};

const app = new Hono<{ Bindings: Bindings }>().basePath("/api");

const router = app
  .get("/health", (c) => c.json("Healthy"))
  .on(["POST", "GET"], "/auth/**", (c) => {
    const auth = createAuth(
      c.env.wishDB,
      c.env.CLIENT_URL,
      c.env.BETTER_AUTH_SECRET,
    );
    return auth.handler(c.req.raw);
  });

export type AppType = typeof router;
export default app;
