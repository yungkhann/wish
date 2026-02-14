import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import type { Bindings } from "..";
import { getDb } from "../db/db";
import * as schema from "../db/schema";

export function createAuth(env: Bindings) {
  const db = getDb(env.wishDB);

  return betterAuth({

    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema
    }),

    session: {
      expiresIn: 60 * 60 * 24 * 7
    },

    cookies: {
      secure: true,
      httpOnly: true,
      sameSite: "strict"
    },

    plugins: [
      emailOTP({
        expiresIn: 5 * 60,

        async sendVerificationOTP({ email, otp, type }) {

        const response = await fetch(env.GAS_URL, {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                secret: env.GAS_SECRET,
                to: email,
                subject: "Your OTP Code",
                text: `Your code is ${otp}`
                })
            })

            if (!response.ok) {
                throw new Error("Failed to send OTP email")
            }
        }
      })
    ]
  })
}
