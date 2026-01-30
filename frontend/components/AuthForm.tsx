import { useState } from "react";
import { authClient } from "../lib/auth-client";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        await authClient.signUp.email(
          {
            email,
            password,
            name,
          },
          {
            onSuccess: () => {
              // Handle success (e.g., redirect or show message)
              alert("Account created!");
            },
            onError: (ctx) => {
              setError(ctx.error.message);
            },
          },
        );
      } else {
        await authClient.signIn.email(
          {
            email,
            password,
          },
          {
            onSuccess: () => {
              // Handle success
              window.location.href = "/";
            },
            onError: (ctx) => {
              setError(ctx.error.message);
            },
          },
        );
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-white">
      <div className="w-full max-w-md space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        {error && (
          <div className="rounded border border-red-800 bg-red-900/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-400">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded border border-zinc-800 bg-zinc-950 px-4 py-2 transition-all outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
                placeholder="John Doe"
              />
            </div>
          )}

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

          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-400">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full rounded border border-zinc-800 bg-zinc-950 px-4 py-2 transition-all outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded bg-white py-2.5 font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <div className="text-center text-sm text-zinc-500">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-white hover:underline focus:outline-none"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
