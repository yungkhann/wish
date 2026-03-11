import { REGISTRATION_CLOSED_ERROR } from "../../shared/config";
import { defaultLang, ui, type Lang } from "./ui";

export function getLangFromCookie(cookies: {
  get(name: string): { value: string } | undefined;
}): Lang {
  const raw = cookies.get("lang")?.value;
  if (raw && raw in ui) return raw as Lang;
  return defaultLang;
}

export function getLangFromCookieClient(): Lang {
  if (typeof document === "undefined") return defaultLang;
  const match = document.cookie.match(/(?:^|;\s*)lang=(\w+)/);
  const raw = match?.[1];
  if (raw && raw in ui) return raw as Lang;
  return defaultLang;
}

export function setLangCookie(lang: Lang) {
  document.cookie = `lang=${lang};path=/;max-age=31536000;SameSite=Lax`;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}

/** Translate API error message. Maps known error codes to i18n keys. */
export function translateApiError(
  error: string | undefined,
  t: (key: keyof (typeof ui)[typeof defaultLang]) => string,
  fallback: string,
): string {
  if (!error) return fallback;
  if (error === REGISTRATION_CLOSED_ERROR) return t("api.error.registrationClosed");
  return error;
}

export type { Lang };
