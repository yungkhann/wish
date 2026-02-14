import type { D1Database } from "@cloudflare/workers-types";
import { eq } from "drizzle-orm";
import { getDb } from "../db/db";
import { user } from "../db/schema";
import { AppError } from "../exception/AppError";

export async function createUser(
  binding: D1Database,
  userId: string,
  name: string,
  surname: string,
  phoneNumber: string,
  educationLevel: string,
  iin: string,
  parentPhoneNumber?: string | null,
  teamName?: string | null
) {

  const teamId = teamName?.trim() ? crypto.randomUUID() : null;

  try {
    const statements = [];

    if (teamId) {
      statements.push(
        binding
          .prepare(
            `INSERT INTO team (id, name, invite_code, creator_id)
             VALUES (?, ?, ?, ?)`
          )
          .bind(teamId, teamName, crypto.randomUUID(), userId)
      );
    }

    if(!parentPhoneNumber) {
      parentPhoneNumber = null;
    }

    statements.push(
      binding
        .prepare(
          `UPDATE user
            SET name = ?,
              surname = ?,
              phoneNumber = ?,
              parentPhoneNumber = ?,
              educationLevel = ?,
              iin = ?,
              team_id = ?
            WHERE id = ?`
        )
        .bind(name, surname, phoneNumber, parentPhoneNumber, educationLevel, iin, teamId, userId)
    );

    await binding.batch(statements);

    return { userId, teamId };

  } catch (error: any) {

    if (error.message?.includes("UNIQUE constraint failed")) {
      throw new AppError("The already existing field has been passed");
    }

    console.log(error);

    throw new AppError("Database error", 500);
  }
}

export async function updateUserTeam(binding: D1Database, userId: string, teamId: string) {
  const db = getDb(binding);

  return await db.update(user).set({teamId}).where(eq(user.id, userId));
}

export async function getUserByEmail(binding: D1Database, email: string) {
  const db = getDb(binding);

  return await db
  .select()
  .from(user)
  .where(eq(user.email, email))
  .get();
}