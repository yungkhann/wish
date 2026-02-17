import { useState } from "react";
import butterflyBg from "../assets/register-butterfly.png";

const YEAR_OPTIONS = [
  { value: "1", label: "1st Year" },
  { value: "2", label: "2nd Year" },
  { value: "3", label: "3rd Year" },
  { value: "4", label: "4th Year" },
  { value: "graduate", label: "Graduate" },
];

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    universityName: "",
    yearOfStudy: "",
    iin: "",
    cv: null as File | null,
    ageConfirmed: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: string, value: string | boolean | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      update("cv", e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.ageConfirmed) {
      setError(
        "Please confirm that you are above 16 years old and agree with the code of conduct",
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          phoneNumber: "",
          educationLevel: form.yearOfStudy,
          iin: form.iin,
          isMinor: false,
          parentPhoneNumber: null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg =
          data.details?.[0]?.message ?? data.error ?? "Registration failed";
        setError(msg);
        return;
      }

      window.location.href = "/team";
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden bg-black py-8 lg:h-[1800px]">
      <img
        className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-70 lg:left-[70%] lg:h-[1472px] lg:w-[1472px] lg:-translate-x-1/2 lg:opacity-100"
        src={butterflyBg.src}
        alt="Butterfly Background"
      />

      {/* Main Form Container */}
      <div className="absolute inset-x-4 top-1/2 z-0 mx-auto max-w-[1304px] -translate-y-1/2 rounded-tl-lg rounded-tr-[60px] rounded-br-lg rounded-bl-[60px] bg-gradient-to-r from-black/20 via-black/20 to-black/20 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] lg:inset-x-auto lg:top-1/2 lg:left-1/2 lg:h-[1543px] lg:w-[1304px] lg:-translate-x-1/2" />

      {/* Header */}
      <div className="absolute top-4 left-1/2 z-20 mx-4 mb-8 flex h-20 w-[calc(100%-2rem)] max-w-[1780px] -translate-x-1/2 flex-col items-center justify-center rounded-tl-[30px] rounded-tr-lg rounded-br-[30px] rounded-bl-lg bg-gradient-to-r from-black/40 via-black/40 to-black/40 px-4 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] lg:h-28 lg:w-[1780.50px] lg:rounded-tl-[60px] lg:rounded-br-[60px] lg:px-24">
        <div className="relative flex h-full w-full items-center justify-between lg:h-20 lg:w-[1651px]">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="font-['Cinzel_Decorative'] text-3xl font-bold text-white uppercase transition-colors [text-shadow:_0px_0px_6px_rgb(119_22_208_/_1.00)] hover:text-violet-400 lg:text-6xl lg:leading-[78px]"
            >
              WISH
            </a>
          </div>
          <nav className="hidden items-center gap-6 backdrop-blur-3xl lg:flex lg:gap-20">
            <a
              href="/#about"
              className="font-['Marcellus'] text-2xl font-normal text-white lowercase transition-colors hover:text-violet-400 lg:text-4xl lg:leading-[54px]"
            >
              About
            </a>
            <a
              href="/#benefits"
              className="font-['Marcellus'] text-2xl font-normal text-white lowercase transition-colors hover:text-violet-400 lg:text-4xl lg:leading-[54px]"
            >
              benefits
            </a>
            <a
              href="/#schedule"
              className="font-['Marcellus'] text-2xl font-normal text-white lowercase transition-colors hover:text-violet-400 lg:text-4xl lg:leading-[54px]"
            >
              schedule
            </a>
            <a
              href="/#sponsors"
              className="font-['Marcellus'] text-2xl font-normal text-white lowercase transition-colors hover:text-violet-400 lg:text-4xl lg:leading-[54px]"
            >
              Sponsors
            </a>
            <a
              href="/#faqs"
              className="font-['Marcellus'] text-2xl font-normal text-white transition-colors hover:text-violet-400 lg:text-4xl lg:leading-[54px]"
            >
              FAQs
            </a>
          </nav>
        </div>
      </div>

      {/* Form Fields */}
      <div className="relative z-10 mx-auto flex w-full max-w-[805px] items-center justify-center px-4 pt-24 pb-4 lg:absolute lg:top-1/2 lg:left-1/2 lg:h-[1543px] lg:w-[1304px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:px-24 lg:pt-16 lg:pb-0">
        <form
          id="registration-form"
          onSubmit={handleSubmit}
          className="flex w-full max-w-[584px] flex-col items-center gap-6 lg:gap-8"
        >
          {error && (
            <div className="w-full rounded border border-red-800 bg-red-900/70 p-3 text-center text-sm text-red-200">
              {error}
            </div>
          )}

          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            placeholder="first name:"
            className="h-16 w-full rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-gradient-to-r from-black/70 via-black/70 to-black/70 px-6 font-['Poppins'] text-xl text-white shadow-[0px_0px_62px_0px_rgba(119,22,208,0.60)] transition-shadow outline-none placeholder:text-white/70 focus:shadow-[0px_0px_62px_0px_rgba(119,22,208,1.00)] lg:h-20 lg:rounded-tl-[62px] lg:rounded-br-[62px] lg:text-2xl"
          />

          <input
            type="text"
            value={form.surname}
            onChange={(e) => update("surname", e.target.value)}
            required
            placeholder="last name:"
            className="h-16 w-full rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-gradient-to-r from-black/70 via-black/70 to-black/70 px-6 font-['Poppins'] text-xl text-white shadow-[0px_0px_62px_0px_rgba(119,22,208,0.60)] transition-shadow outline-none placeholder:text-white/70 focus:shadow-[0px_0px_62px_0px_rgba(119,22,208,1.00)] lg:h-20 lg:rounded-tl-[62px] lg:rounded-br-[62px] lg:text-2xl"
          />

          <input
            type="text"
            value={form.universityName}
            onChange={(e) => update("universityName", e.target.value)}
            required
            placeholder="university name:"
            className="h-16 w-full rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-gradient-to-r from-black/70 via-black/70 to-black/70 px-6 font-['Poppins'] text-xl text-white shadow-[0px_0px_62px_0px_rgba(119,22,208,0.60)] transition-shadow outline-none placeholder:text-white/70 focus:shadow-[0px_0px_62px_0px_rgba(119,22,208,1.00)] lg:h-20 lg:rounded-tl-[62px] lg:rounded-br-[62px] lg:text-2xl"
          />

          <select
            value={form.yearOfStudy}
            onChange={(e) => update("yearOfStudy", e.target.value)}
            required
            className="h-16 w-full appearance-none rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-gradient-to-r from-black/70 via-black/70 to-black/70 px-6 font-['Poppins'] text-xl text-white shadow-[0px_0px_62px_0px_rgba(119,22,208,0.60)] transition-shadow outline-none focus:shadow-[0px_0px_62px_0px_rgba(119,22,208,1.00)] lg:h-20 lg:rounded-tl-[62px] lg:rounded-br-[62px] lg:text-2xl"
          >
            <option value="" disabled className="text-white/70">
              year of study:
            </option>
            {YEAR_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-black">
                {opt.label}
              </option>
            ))}
          </select>

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{12}"
            maxLength={12}
            value={form.iin}
            onChange={(e) => update("iin", e.target.value)}
            required
            placeholder="IIN:"
            className="h-16 w-full rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-gradient-to-r from-black/70 via-black/70 to-black/70 px-6 font-['Poppins'] text-xl text-white shadow-[0px_0px_62px_0px_rgba(119,22,208,0.60)] transition-shadow outline-none placeholder:text-white/70 focus:shadow-[0px_0px_62px_0px_rgba(119,22,208,1.00)] lg:h-20 lg:rounded-tl-[62px] lg:rounded-br-[62px] lg:text-2xl"
          />

          {/* CV Dropbox */}
          <div className="mt-2 flex w-full flex-col items-center gap-3 lg:mt-4 lg:gap-4">
            <div className="font-['Marcellus'] text-2xl font-normal text-white lg:text-4xl lg:leading-[54px]">
              CV Dropbox
            </div>
            <div className="flex h-60 w-full cursor-pointer flex-col items-center justify-center rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-gradient-to-r from-black/80 via-black/80 to-black/80 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] transition-shadow hover:shadow-[0px_0px_60px_0px_rgba(119,22,208,1.00)] lg:h-72 lg:max-w-[566px] lg:rounded-tl-[60px] lg:rounded-br-[60px]">
              <input
                type="file"
                id="cv-upload"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
              />
              <label
                htmlFor="cv-upload"
                className="flex cursor-pointer flex-col items-center"
              >
                <div className="font-['Marcellus'] text-5xl font-normal text-violet-400 [text-shadow:_0px_0px_4px_rgb(119_22_208_/_1.00)] lg:text-6xl">
                  +
                </div>
                {form.cv && (
                  <div className="mt-4 text-center text-sm text-white">
                    {form.cv.name}
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Age Confirmation Checkbox */}
          <div className="mt-4 flex w-full items-center gap-3 lg:mt-6 lg:gap-4">
            <input
              type="checkbox"
              id="age-confirm"
              checked={form.ageConfirmed}
              onChange={(e) => update("ageConfirmed", e.target.checked)}
              className="h-8 w-8 flex-shrink-0 cursor-pointer rounded-tl-[8px] rounded-tr-sm rounded-br-[8px] rounded-bl-sm bg-zinc-300 accent-violet-600 lg:h-10 lg:w-10 lg:rounded-tl-[10px] lg:rounded-br-[10px]"
            />
            <label
              htmlFor="age-confirm"
              className="font-['Marcellus'] text-sm leading-6 font-normal text-white lg:text-xl lg:leading-7"
            >
              I confirm that I am above 16 years old &amp; agree with the code
              of conduct
            </label>
          </div>

          {/* Register Button Mobile */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex h-20 w-full items-center justify-center rounded-tl-lg rounded-tr-[30px] rounded-br-lg rounded-bl-[30px] border border-white/80 bg-black/50 font-['Cinzel'] text-4xl font-normal text-white lowercase shadow-[0px_0px_6px_0px_rgba(119,22,208,1.00)] shadow-[0px_0px_15px_0px_rgba(119,22,208,1.00)] shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] shadow-[0px_0px_90px_0px_rgba(119,22,208,1.00)] transition-colors [text-shadow:_0px_0px_5px_rgb(255_255_255_/_1.00)] hover:bg-black/70 disabled:cursor-not-allowed disabled:opacity-50 lg:mt-12 lg:h-28 lg:w-96 lg:rounded-tr-[60px] lg:rounded-bl-[60px] lg:border-[1.50px] lg:text-6xl"
          >
            {loading ? "..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
