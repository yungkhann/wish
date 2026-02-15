import { useState } from "react";

const EDUCATION_LEVELS = [
  { value: "school", label: "School Student" },
  { value: "bachelor", label: "Bachelor's" },
  { value: "master", label: "Master's" },
  { value: "phd", label: "PhD" },
];

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
    educationLevel: "",
    iin: "",
    isMinor: false,
    parentPhoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          parentPhoneNumber: form.isMinor ? form.parentPhoneNumber : null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg =
          data.details?.[0]?.message ?? data.error ?? "Registration failed";
        setError(msg);
        return;
      }

      window.location.href = "/";
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded border border-zinc-800 bg-zinc-950 px-4 py-2 transition-all outline-none focus:border-white/20 focus:ring-2 focus:ring-white/20";

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-white">
      <div className="w-full max-w-lg space-y-6 rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Complete Registration
        </h2>
        <p className="text-center text-sm text-zinc-400">
          Fill in your details to finish signing up.
        </p>

        {error && (
          <div className="rounded border border-red-800 bg-red-900/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-400">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
                className={inputClass}
                placeholder="John"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-400">
                Surname
              </label>
              <input
                type="text"
                value={form.surname}
                onChange={(e) => update("surname", e.target.value)}
                required
                className={inputClass}
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-400">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phoneNumber}
              onChange={(e) => update("phoneNumber", e.target.value)}
              required
              className={inputClass}
              placeholder="+77001234567"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-400">
              Education Level
            </label>
            <select
              value={form.educationLevel}
              onChange={(e) => update("educationLevel", e.target.value)}
              required
              className={inputClass}
            >
              <option value="" disabled>
                Select education level
              </option>
              {EDUCATION_LEVELS.map((lvl) => (
                <option key={lvl.value} value={lvl.value}>
                  {lvl.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-400">
              IIN
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{12}"
              maxLength={12}
              value={form.iin}
              onChange={(e) => update("iin", e.target.value)}
              required
              className={inputClass}
              placeholder="123456789012"
            />
          </div>

          <div className="flex items-center gap-3 rounded border border-zinc-800 bg-zinc-950 px-4 py-3">
            <input
              type="checkbox"
              id="isMinor"
              checked={form.isMinor}
              onChange={(e) => update("isMinor", e.target.checked)}
              className="h-4 w-4 rounded border-zinc-700 accent-white"
            />
            <label htmlFor="isMinor" className="text-sm text-zinc-300">
              I am under 18 years old
            </label>
          </div>

          {form.isMinor && (
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-400">
                Parent&apos;s Phone Number
              </label>
              <input
                type="tel"
                value={form.parentPhoneNumber}
                onChange={(e) => update("parentPhoneNumber", e.target.value)}
                required
                className={inputClass}
                placeholder="+77001234567"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded bg-white py-2.5 font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Complete Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}
