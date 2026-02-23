import { useState } from "react";
import { authClient } from "../lib/auth-client";

type Step = "email" | "otp";

export default function AuthForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: sendError } =
        await authClient.emailOtp.sendVerificationOtp({
          email,
          type: "sign-in",
        });

      if (sendError) {
        setError(sendError.message ?? "Failed to send code.");
        return;
      }

      setStep("otp");
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: verifyError } = await authClient.signIn.emailOtp(
        { email, otp },
        {
          onSuccess: async () => {
            try {
              const res = await fetch("/api/user/me");
              const data = await res.json();
              window.location.href = data.isRegistered ? "/" : "/registration";
            } catch {
              window.location.href = "/registration";
            }
          },
        },
      );

      if (verifyError) {
        setError(verifyError.message ?? "Invalid code.");
        return;
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-white">
      <div className="w-full max-w-md space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {step === "email" ? "Sign In" : "Enter Code"}
        </h2>

        {step === "otp" && (
          <p className="text-center text-sm text-zinc-400">
            We sent a 6-digit code to{" "}
            <span className="font-medium text-white">{email}</span>
          </p>
        )}

        {error && (
          <div className="rounded border border-red-800 bg-red-900/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {step === "email" ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-400">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded border border-zinc-800 bg-zinc-950 px-4 py-2 transition-all outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded bg-white py-2.5 font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Sending..." : "Continue"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-400">
                Verification Code
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                autoFocus
                className="w-full rounded border border-zinc-800 bg-zinc-950 px-4 py-2 text-center text-2xl tracking-[0.5em] transition-all outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
                placeholder="------"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded bg-white py-2.5 font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>

            <button
              type="button"
              onClick={() => {
                setStep("email");
                setOtp("");
                setError(null);
              }}
              className="w-full text-center text-sm text-zinc-500 hover:text-white"
            >
              Use a different email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
