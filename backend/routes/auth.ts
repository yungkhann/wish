// import { Hono } from "hono";
// import type { Bindings } from "../index";
// import { authClient } from "../lib/auth-client";

// export const authRouter = new Hono<{ Bindings: Bindings }>();

// authRouter.on(["POST", "GET"], "/**", async (c) => {
//   const { data, error } = await authClient.emailOtp.sendVerificationOtp({
//     email: "bebra@nu.edu.kz", 
//     type: "sign-in",
//   });

//   return c.json({ success: true, message: "OTP sent" });
// });
