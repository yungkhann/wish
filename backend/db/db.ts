import type { D1Database } from "@cloudflare/workers-types";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export const getDb = (binding: D1Database) => {
  // true for local, false for production
  return drizzle(binding, { schema, logger: true });
};

export type DrizzleDb = ReturnType<typeof getDb>;
