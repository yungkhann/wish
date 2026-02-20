import { useEffect, useState } from "react";
import { authClient } from "../lib/auth-client";

type Status = "loading" | "guest" | "registered";

let cachedStatus: Status | null = null;

export default function NavAuthButton({ mobile }: { mobile?: boolean }) {
  const [status, setStatus] = useState<Status>(cachedStatus ?? "loading");

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
        const s = data.isRegistered ? "registered" : "guest";
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
    window.location.href = "/";
  };

  if (status === "loading" && mobile) return null;

  const label = status === "registered" ? "Team Page" : "Register";
  const href = status === "registered" ? "/team" : "/registration";

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
        {status === "registered" && (
          <button
            onClick={handleLogout}
            className="font-['Marcellus'] text-sm text-white/60 transition-colors duration-200 hover:text-red-400"
          >
            Log out
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <a
        href={href}
        className="group relative overflow-hidden rounded-[30px_3.75px_30px_3.75px] p-[1px]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/80 to-transparent opacity-50" />
        <div className="relative flex h-[42px] w-[140px] items-center justify-center rounded-[30px_3.75px_30px_3.75px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,#9A44E9_100%)] shadow-[0px_0px_20px_0px_rgba(119,22,208,0.4)] transition-transform duration-300 group-hover:scale-105">
          <span className="font-['Cinzel'] text-lg text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]">
            {label}
          </span>
        </div>
      </a>
      {status === "registered" && (
        <button
          onClick={handleLogout}
          className="font-['Marcellus'] text-base text-white/60 transition-colors duration-200 hover:text-red-400"
        >
          Log out
        </button>
      )}
    </div>
  );
}
