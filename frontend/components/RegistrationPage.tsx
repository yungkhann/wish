import { useEffect, useState } from "react";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";
import AuthForm from "./AuthForm";
import RegistrationForm from "./RegistrationForm";

type State =
  | "loading"
  | "unauthenticated"
  | "needs-registration"
  | "registered";

export default function RegistrationPage({ lang: langProp }: { lang?: Lang }) {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);

  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    fetch("/api/user/me")
      .then((res) => {
        if (res.status === 401) {
          setState("unauthenticated");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        if (data.isRegistered) {
          setState("registered");
          window.location.href = "/team";
        } else {
          setState("needs-registration");
        }
      })
      .catch(() => {
        setState("unauthenticated");
      });
  }, []);

  if (state === "loading") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-zinc-500">
        {t("regPage.loading")}
      </div>
    );
  }

  if (state === "unauthenticated") {
    return <AuthForm lang={lang} />;
  }

  if (state === "needs-registration") {
    const redirectTo =
      new URLSearchParams(window.location.search).get("redirect") ?? undefined;
    return <RegistrationForm lang={lang} redirectTo={redirectTo} />;
  }

  // "registered" state — redirecting to /
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-zinc-500">
      {t("regPage.redirecting")}
    </div>
  );
}
