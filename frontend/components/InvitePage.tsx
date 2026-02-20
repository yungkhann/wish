import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";

type State = "loading" | "unauthenticated" | "success" | "error";

export default function InvitePage() {
  const [state, setState] = useState<State>("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const uuid = window.location.hash.slice(1);
    if (!uuid) {
      setMessage("Invalid invite link.");
      setState("error");
      return;
    }

    (async () => {
      // Check auth first
      const meRes = await fetch("/api/user/me");
      if (meRes.status === 401) {
        setState("unauthenticated");
        return;
      }
      if (!meRes.ok) {
        setState("unauthenticated");
        return;
      }
      const meData = await meRes.json();
      if (!meData.isRegistered) {
        window.location.href = "/registration";
        return;
      }

      // Send the invite request
      const res = await fetch(`/api/invite/${uuid}`);
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.error ?? "Failed to process invite.");
        setState("error");
        return;
      }

      setMessage(data.message ?? "You have joined the team!");
      setState("success");
    })();
  }, []);

  if (state === "loading") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-zinc-500">
        Loading...
      </div>
    );
  }

  if (state === "unauthenticated") {
    return <AuthForm />;
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-white">
      <div className="w-full max-w-md space-y-6 rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-gradient-to-r from-black/20 via-black/20 to-black/20 p-8 text-center shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:rounded-tl-[60px] sm:rounded-br-[60px]">
        {state === "success" ? (
          <>
            <div className="text-4xl">&#10003;</div>
            <h2 className="font-['Cinzel'] text-2xl tracking-[3px]">
              JOINED TEAM
            </h2>
            <p className="text-sm text-zinc-400">
              You have successfully joined the team!
            </p>
          </>
        ) : (
          <>
            <div className="text-4xl">&#10007;</div>
            <h2 className="font-['Cinzel'] text-2xl tracking-[3px]">ERROR</h2>
            <p className="text-sm text-red-300">{message}</p>
          </>
        )}

        <a
          href="/team"
          className="mt-4 inline-block rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-12 py-4 font-['Cinzel'] text-lg tracking-[2px] text-white shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105"
        >
          TEAM PAGE
        </a>
      </div>
    </div>
  );
}
