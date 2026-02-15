import type { D1Database } from "@cloudflare/workers-types";
import { eq } from "drizzle-orm";
import { getDb } from "../db/db";
import { user } from "../db/schema";
import { AppError } from "../exception/AppError";

export async function createUser(
  binding: D1Database,
  userId: string,
  data: {
    name: string;
    surname: string;
    phoneNumber: string;
    educationLevel: string;
    iin: string;
    isMinor: boolean;
    parentPhoneNumber?: string | null;
  },
) {
  const db = getDb(binding);

  try {
    await db
      .update(user)
      .set({
        name: data.name,
        surname: data.surname,
        phoneNumber: data.phoneNumber,
        educationLevel: data.educationLevel,
        iin: data.iin,
        isMinor: data.isMinor,
        parentPhoneNumber: data.parentPhoneNumber ?? null,
      })
      .where(eq(user.id, userId));
  } catch (error: any) {
    if (error.message?.includes("UNIQUE constraint failed")) {
      throw new AppError("A user with this data already exists");
    }

    console.error(error);
    throw new AppError("Database error", 500);
  }
}

export async function getUserByUserId(binding: D1Database, userId: string) {
  const db = getDb(binding);

  return await db.select().from(user).where(eq(user.id, userId)).get();
}

export async function getUsersByTeamId(binding: D1Database, teamId: string) {
  const db = getDb(binding);

  return await db.select().from(user).where(eq(user.teamId, teamId));
}

export async function updateUserTeam(
  binding: D1Database,
  userId: string,
  teamId: string,
) {
  const db = getDb(binding);

  return await db.update(user).set({ teamId }).where(eq(user.id, userId));
}

export async function getUserByEmail(binding: D1Database, email: string) {
  const db = getDb(binding);

  return await db.select().from(user).where(eq(user.email, email)).get();
}
