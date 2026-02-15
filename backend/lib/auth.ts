import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { emailOTP } from "better-auth/plugins";
import type { Bindings } from "..";
import { getDb } from "../db/db";
import * as schema from "../db/schema";

function getOtpEmail(type: string, otp: string) {
  switch (type) {
    case "sign-in":
      return {
        subject: "Sign in",
        text: `Your sign-in code is ${otp}. It expires in 5 minutes.`,
      };
    case "email-verification":
      return {
        subject: "Verify your email",
        text: `Your verification code is ${otp}. It expires in 5 minutes.`,
      };
    case "forget-password":
      return {
        subject: "Reset your password",
        text: `Your password reset code is ${otp}. It expires in 5 minutes.`,
      };
    default:
      return {
        subject: "Your code",
        text: `Your code is ${otp}. It expires in 5 minutes.`,
      };
  }
}

export function createAuth(env: Bindings) {
  const db = getDb(env.wishDB);

  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "sqlite",
      schema,
    }),

    session: {
      expiresIn: 60 * 60 * 24 * 7,
    },

    cookies: {
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    },

    plugins: [
      emailOTP({
        expiresIn: 5 * 60,

        async sendVerificationOTP({ email, otp, type }) {
          const { subject, text } = getOtpEmail(type, otp);

          const response = await fetch(env.GAS_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              secret: env.GAS_SECRET,
              to: email,
              subject,
              text,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to send OTP email");
          }
        },
      }),
    ],
  });
}
