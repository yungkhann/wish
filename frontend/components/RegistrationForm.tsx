import {
  CircleChevronDown,
  Gauge,
  GraduationCap,
  IdCard,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import butterflyBg from "../assets/butterfly-register.png";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";

const wrapperClasses =
  "flex h-16 w-full cursor-text items-center gap-4 rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-linear-to-r from-black/70 via-black/70 to-black/70 px-6 shadow-[0px_0px_62px_0px_rgba(119,22,208,0.60)] transition-shadow focus-within:shadow-[0px_0px_62px_0px_rgba(119,22,208,1.00)] lg:h-20 lg:gap-6 lg:rounded-tl-[62px] lg:rounded-br-[62px] lg:px-8";

const inputClasses =
  "flex-1 min-w-0 bg-transparent font-['Marcellus'] text-xl text-white outline-none placeholder:text-white/70 lg:text-2xl";

const iconClasses = "h-5 w-5 shrink-0 text-violet-400 lg:h-6 lg:w-6";

export default function RegistrationForm({
  lang: langProp,
  redirectTo,
}: { lang?: Lang; redirectTo?: string } = {}) {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  const EDUCATION_LEVELS = [
    { value: "school", label: t("reg.school") },
    { value: "college", label: t("reg.college") },
    { value: "bachelor", label: t("reg.bachelor") },
    { value: "master", label: t("reg.master") },
  ];

  const [form, setForm] = useState({
    name: "",
    surname: "",
    placeOfStudy: "",
    city: "",
    educationLevel: "",
    phoneNumber: "",
    parentPhoneNumber: "",
    iin: "",
    cv: null as File | null,
    ageConfirmed: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const update = (field: string, value: string | boolean | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError(t("reg.pdfOnly"));
      update("cv", null);
      e.target.value = "";
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setError(t("reg.cvSizeLimit"));
      update("cv", null);
      e.target.value = "";
      return;
    }

    setError(null);
    update("cv", file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.ageConfirmed) {
      setError(t("reg.pleaseConfirmAge"));
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
          phoneNumber: form.phoneNumber,
          educationLevel: form.educationLevel,
          iin: form.iin,
          isMinor: form.educationLevel === "school",
          parentPhoneNumber: form.parentPhoneNumber ? form.parentPhoneNumber : null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const msg = data.details?.[0]?.message ?? data.error ?? t("reg.failed");
        setError(msg);
        return;
      }

      if (form.cv) {
        const fd = new FormData();
        fd.append("cv", form.cv);
        const cvRes = await fetch("/api/user/cv", { method: "POST", body: fd });

        if (!cvRes.ok) {
          const cvData = await cvRes.json();
          setError(cvData.error ?? t("reg.cvFailed"));
          return;
        }
      }

      window.location.href = redirectTo ?? "/team";
    } catch {
      setError(t("auth.unexpectedError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative mx-auto flex min-h-screen w-full flex-col bg-black px-4 py-24 lg:py-32">
      {/* Butterfly background clipped to container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          className="absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 object-cover opacity-70 lg:left-[70%] lg:h-368 lg:w-368 lg:-translate-x-1/2 lg:opacity-100"
          src={butterflyBg.src}
          alt="Butterfly Background"
        />
      </div>

      {/* Main Form Container */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-326 rounded-tl-lg rounded-tr-[60px] rounded-br-lg rounded-bl-[60px] bg-linear-to-r from-black/20 via-black/20 to-black/20 px-4 py-12 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] lg:px-24 lg:py-16">
        <form
          id="registration-form"
          onSubmit={handleSubmit}
          className="mx-auto flex w-full max-w-146 flex-col items-center gap-6 lg:gap-8"
        >
          {error && (
            <div className="w-full rounded border border-red-800 bg-red-900/70 p-3 text-center text-sm text-red-200">
              {error}
            </div>
          )}

          <label className={wrapperClasses}>
            <User className={iconClasses} aria-hidden="true" />
            <input
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              required
              spellCheck={false}
              placeholder={t("reg.firstName")}
              className={inputClasses}
            />
          </label>

          <label className={wrapperClasses}>
            <User className={iconClasses} aria-hidden="true" />
            <input
              type="text"
              value={form.surname}
              onChange={(e) => update("surname", e.target.value)}
              required
              spellCheck={false}
              placeholder={t("reg.lastName")}
              className={inputClasses}
            />
          </label>

          <label className={wrapperClasses}>
            <GraduationCap className={iconClasses} aria-hidden="true" />
            <input
              type="text"
              value={form.placeOfStudy}
              onChange={(e) => update("placeOfStudy", e.target.value)}
              required
              spellCheck={false}
              placeholder={t("reg.placeOfStudy")}
              className={inputClasses}
            />
          </label>

          <label className={wrapperClasses}>
            <MapPin className={iconClasses} aria-hidden="true" />
            <input
              type="text"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              required
              spellCheck={false}
              placeholder={t("reg.city")}
              className={inputClasses}
            />
          </label>

          <div
            className={`${wrapperClasses} relative cursor-pointer`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Gauge className={iconClasses} aria-hidden="true" />
            <div
              className="min-w-0 flex-1 truncate bg-transparent font-['Marcellus'] text-xl lg:text-2xl"
              style={{
                color: form.educationLevel
                  ? "white"
                  : "rgba(255, 255, 255, 0.7)",
              }}
            >
              {form.educationLevel
                ? EDUCATION_LEVELS.find((l) => l.value === form.educationLevel)
                    ?.label
                : t("reg.educationLevel")}
            </div>
            <CircleChevronDown
              className={`ml-auto h-6 w-6 shrink-0 text-violet-400 transition-transform lg:h-7 lg:w-7 ${isDropdownOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />

            {isDropdownOpen && (
              <div className="absolute top-full left-0 z-50 mt-2 w-full overflow-hidden rounded-xl border border-violet-500/30 bg-black/90 shadow-[0px_0px_30px_0px_rgba(119,22,208,0.40)] backdrop-blur-md">
                <ul className="flex flex-col py-2">
                  {EDUCATION_LEVELS.map((lvl) => (
                    <li
                      key={lvl.value}
                      className="cursor-pointer px-6 py-3 font-['Marcellus'] text-lg text-white/80 transition-colors hover:bg-violet-900/40 hover:text-white lg:px-8 lg:text-xl"
                      onClick={() => {
                        update("educationLevel", lvl.value);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {lvl.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <label className={wrapperClasses}>
            <IdCard className={iconClasses} aria-hidden="true" />
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{12}"
              maxLength={12}
              value={form.iin}
              onChange={(e) => update("iin", e.target.value)}
              required
              placeholder={t("reg.iin")}
              className={inputClasses}
            />
          </label>

          <label className={wrapperClasses}>
            <Phone className={iconClasses} aria-hidden="true" />
            <input
              type="tel"
              value={form.phoneNumber}
              onChange={(e) => update("phoneNumber", e.target.value)}
              required
              placeholder={t("reg.phone")}
              className={inputClasses}
            />
          </label>
          <label className={wrapperClasses}>
            <Phone className={iconClasses} aria-hidden="true" />
            <input
              type="tel"
              value={form.parentPhoneNumber}
              onChange={(e) => update("parentPhoneNumber", e.target.value)}
              placeholder={t("reg.parentPhoneOptional")}
              className={inputClasses}
            />
          </label>

          {/* CV Dropbox */}
          <div className="mt-2 flex w-full flex-col items-center gap-3 lg:mt-4 lg:gap-4">
            <div className="font-['Marcellus'] text-2xl font-normal text-white lg:text-4xl lg:leading-13.5">
              {t("reg.cvDropbox")}
            </div>
            <label
              htmlFor="cv-upload"
              className="flex h-60 w-full cursor-pointer flex-col items-center justify-center rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] rounded-bl-lg bg-linear-to-r from-black/80 via-black/80 to-black/80 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] transition-shadow hover:shadow-[0px_0px_60px_0px_rgba(119,22,208,1.00)] lg:h-72 lg:max-w-141.5 lg:rounded-tl-[60px] lg:rounded-br-[60px]"
            >
              <input
                type="file"
                id="cv-upload"
                onChange={handleFileChange}
                accept="application/pdf"
                className="hidden"
              />
              <div className="font-['Marcellus'] text-5xl font-normal text-violet-400 [text-shadow:0px_0px_4px_rgb(119_22_208/1.00)] lg:text-6xl">
                +
              </div>
              {form.cv ? (
                <div className="mt-4 text-center text-sm text-white">
                  {form.cv.name}
                </div>
              ) : (
                <p className="mt-3 font-['Marcellus'] text-sm text-white/50 lg:text-base">
                  {t("reg.cvHint")}
                </p>
              )}
            </label>
          </div>

          {/* Age Confirmation Checkbox */}
          <div className="mt-4 flex w-full items-center gap-3 lg:mt-6 lg:gap-4">
            <input
              type="checkbox"
              id="age-confirm"
              checked={form.ageConfirmed}
              onChange={(e) => update("ageConfirmed", e.target.checked)}
              className="h-8 w-8 shrink-0 cursor-pointer rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-zinc-300 accent-violet-600 lg:h-10 lg:w-10 lg:rounded-tl-[10px] lg:rounded-br-[10px]"
            />
            <label
              htmlFor="age-confirm"
              className="font-['Marcellus'] text-sm leading-6 font-normal text-white lg:text-xl lg:leading-7"
            >
              {t("reg.ageConfirmPre")}{" "}
              <a
                href="https://docs.google.com/document/d/1g4uJt2xtxm_ucZ7WqDpeTI6fsTValmFCVQW_FBxLCQU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 underline underline-offset-2 hover:text-violet-300"
              >
                {t("reg.codeOfConduct")}
              </a>
              .
            </label>
          </div>

          <div className="form-submit-outer mt-6 w-full lg:mt-12 lg:w-96">
            <button
              type="submit"
              disabled={loading}
              className="form-submit-inner flex h-20 w-full items-center justify-center font-['Marcellus'] text-4xl font-normal text-white lowercase transition-colors [text-shadow:0px_0px_5px_rgb(255_255_255/1.00)] hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 lg:h-28 lg:text-6xl"
            >
              {loading ? "..." : t("reg.register")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
