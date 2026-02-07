import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import type { D1Database } from "@cloudflare/workers-types";
import { getDb } from "../db/db";
import * as schema from "../db/schema";

export const createAuth = (
  d1: D1Database,
  clientUrl: string,
  secret: string,
) => {
  const db = getDb(d1);
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema,
    }),
    emailAndPassword: {
      enabled: true,
    },
    trustedOrigins: [clientUrl],
    secret,
  });
};
