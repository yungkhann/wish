import { useEffect, useState } from "react";
import { defaultLang, languages, type Lang } from "../i18n/ui";
import { getLangFromCookieClient, setLangCookie } from "../i18n/utils";

export default function LanguageSwitcher() {
  const [current, setCurrent] = useState<Lang>(defaultLang);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCurrent(getLangFromCookieClient());
    setMounted(true);
  }, []);

  const handleChange = (lang: Lang) => {
    if (lang === current) return;
    setLangCookie(lang);
    setCurrent(lang);
    window.location.reload();
  };

  const keys = Object.keys(languages) as Lang[];

  return (
    <div className="flex items-center gap-1">
      {keys.map((lang, i) => (
        <span key={lang} className="flex items-center">
          <button
            onClick={() => handleChange(lang)}
            className={`cursor-pointer font-['Marcellus'] text-sm transition-colors duration-200 ${
              mounted && lang === current
                ? "text-[#B743FF] drop-shadow-[0_0_6px_rgba(183,67,255,0.8)]"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            {languages[lang]}
          </button>
          {i < keys.length - 1 && (
            <span className="mx-1 text-sm text-white/30">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
