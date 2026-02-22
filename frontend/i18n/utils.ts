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

export type { Lang };
