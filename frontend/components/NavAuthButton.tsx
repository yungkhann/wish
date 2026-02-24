import { useEffect, useState } from "react";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";
import { authClient } from "../lib/auth-client";
import { navigateTo } from "../utils/navigate";

type Status = "loading" | "guest" | "incomplete" | "registered";

let cachedStatus: Status | null = null;

export default function NavAuthButton({
  mobile,
  lang: langProp,
}: {
  mobile?: boolean;
  lang?: Lang;
}) {
  const [status, setStatus] = useState<Status>(cachedStatus ?? "loading");
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  useEffect(() => {
    if (cachedStatus) return;

    fetch("/api/user/me")
      .then((res) => {
        if (!res.ok) {
          cachedStatus = "guest";
          setStatus("guest");
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        const s = data.isRegistered ? "registered" : "incomplete";
        cachedStatus = s;
        setStatus(s);
      })
      .catch(() => {
        cachedStatus = "guest";
        setStatus("guest");
      });
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    cachedStatus = null;
    navigateTo("/");
  };

  if (status === "loading" && mobile) return null;

  const label = status === "registered" ? t("nav.teamPage") : t("nav.register");
  const href = status === "registered" ? "/team" : "/registration";
  const showLogout = status === "registered" || status === "incomplete";

  if (mobile) {
    return (
      <div className="flex w-full flex-col items-center gap-3">
        <a
          href={href}
          className="relative flex h-[46px] w-auto min-w-[80px] items-center justify-center rounded-full px-5 shadow-[0px_0px_4px_0px_rgba(119,22,208,1),0px_0px_10px_0px_rgba(119,22,208,1),0px_0px_40px_0px_rgba(119,22,208,0.6),0px_0px_60px_0px_rgba(119,22,208,1)] transition-transform duration-200 active:scale-95"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,1) 13%, rgba(201,163,236,1) 49%)",
          }}
        >
          <span
            className="font-['Cinzel_Decorative'] text-[13px] font-bold text-black uppercase"
            style={{
              textShadow:
                "0px 0px 3px rgba(255,255,255,1), 0px 0px 10px rgba(170,0,255,1)",
            }}
          >
            {label}
          </span>
        </a>
        {showLogout && (
          <button
            onClick={handleLogout}
            className="font-['Marcellus'] text-sm text-white/60 transition-colors duration-200 hover:text-red-400"
          >
            {t("nav.logOut")}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <a
        href={href}
        className="flex h-[42px] min-w-[140px] items-center justify-center rounded-[6px_45px_6px_45px] border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-8 font-['Marcellus'] text-lg tracking-[1px] text-white shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform duration-300 [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105"
      >
        {label}
      </a>
      {showLogout && (
        <button
          onClick={handleLogout}
          className="font-['Marcellus'] text-base text-white/60 transition-colors duration-200 hover:text-red-400"
        >
          {t("nav.logOut")}
        </button>
      )}
    </div>
  );
}
