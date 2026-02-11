import type { D1Database } from "@cloudflare/workers-types";
import { eq } from "drizzle-orm";
import { getDb } from "../db/db";
import { invite } from "../db/schema";
import { AppError } from "../exception/AppError";
import { getTeamByCreatorId, getTeamByInvitaionCode } from "./team.service";

export async function createInvitaion(binding: D1Database, invitaionCode: string, userId: string) {
    await checkInviteExistance(binding, userId);
    
    const t = await getTeamByInvitaionCode(binding, invitaionCode);

    if (!t) {
        throw new AppError("The provided invite code does not exist");
    }

    const db = getDb(binding);

    await db.insert(invite).values({
        id: crypto.randomUUID(),
        teamId: t.id,
        userId: userId,
        status: "pending"
    });
}

async function checkInviteExistance(binding: D1Database, userId: string) {
    const db = getDb(binding);
    
    const invites = await db
        .select()
        .from(invite)
        .where(eq(invite.userId, userId));

    for (const invite of invites) {
        if (invite.status === "accepted" || invite.status === "pending") {
            throw new AppError("The user already has an active invite");
        }
    }
}

export async function getAllInvites(binding: D1Database, userId: string) {
    const db = getDb(binding);

    const userTeam = await getTeamByCreatorId(binding, userId);

    if (!userTeam) {
        throw new AppError("The user does not have a team");
    }

    return await db
        .select()
        .from(invite)
        .where(eq(invite.teamId, userTeam?.id));
}

export async function handleInviteStatus(binding: D1Database, invitaionId: string, invitaionStatus: string) {
    const db = getDb(binding);

    const invitaion = await getInvite(binding, invitaionId);

    if(!invitaion) {
        throw new AppError("Invitation does not exist");
    }

    if (invitaionStatus === "accepted") {

        const statements = [];

        statements.push(
            binding
            .prepare(
                `UPDATE user SET team_id = ? WHERE id = ?
                VALUES (?, ?)`
            )
            .bind(invitaion?.teamId, invitaion.userId)
        );

        statements.push(
            binding
            .prepare(
                `UPDATE invitaion SET status = ?
                VALUES (?)`
            )
            .bind(invitaionStatus)
        );

        return await binding.batch(statements);
    } else if (invitaionStatus === "rejected") {
        return await db.update(invite).set({
            status: invitaionStatus
        });
    }

    throw new AppError("Incorrect invitation status is passed");
}

async function getInvite(binding: D1Database, invitaionId: string) {
    const db = getDb(binding);

    return await db
        .select()
        .from(invite)
        .where(eq(invite.id, invitaionId))
        .get();
}

async function removeInvite(binding: D1Database, userId: string) {
    const db = getDb(binding);

    return await db
        .delete(invite)
        .where(eq(invite.userId, userId));
}