import { useState } from "react";
import { authClient } from "../lib/auth-client";

type Step = "email" | "otp";

export default function AuthForm({ redirectTo }: { redirectTo?: string } = {}) {
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
      const { error: verifyError } = await authClient.signIn.emailOtp({
        email,
        otp,
      });

      if (verifyError) {
        setError(verifyError.message ?? "Invalid code.");
        return;
      }

      try {
        const res = await fetch("/api/user/me");
        const data = await res.json();
        if (data.isRegistered) {
          const target = redirectTo ?? "/";
          if (target === window.location.pathname + window.location.hash) {
            window.location.reload();
          } else {
            window.location.href = target;
          }
        } else {
          window.location.href = redirectTo
            ? `/registration?redirect=${encodeURIComponent(redirectTo)}`
            : "/registration";
        }
      } catch {
        window.location.href = redirectTo
          ? `/registration?redirect=${encodeURIComponent(redirectTo)}`
          : "/registration";
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="w-full max-w-md space-y-6 rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 p-8 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:rounded-tl-[60px] sm:rounded-br-[60px]">
        <h2 className="text-center font-['Cinzel'] text-2xl tracking-[3px]">
          {step === "email" ? "SIGN IN" : "ENTER CODE"}
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
                className="w-full rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-6 py-3 text-white shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] outline-none sm:rounded-tl-[60px] sm:rounded-br-[60px]"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-12 py-4 font-['Cinzel'] text-lg tracking-[2px] text-white shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "SENDING..." : "CONTINUE"}
              </button>
            </div>
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
                className="w-full rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 px-6 py-3 text-center text-2xl tracking-[0.5em] text-white shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] outline-none sm:rounded-tl-[60px] sm:rounded-br-[60px]"
                placeholder="------"
              />
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-12 py-4 font-['Cinzel'] text-lg tracking-[2px] text-white shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "VERIFYING..." : "VERIFY"}
              </button>
            </div>

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
