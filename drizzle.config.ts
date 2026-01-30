import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./backend/db/schema.ts",
  out: "./backend/db/migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "15da7213905a1f5b05432a12f9da2a13",
    databaseId: "f49da847-89f1-46b9-8a12-b223fb3add17",
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
