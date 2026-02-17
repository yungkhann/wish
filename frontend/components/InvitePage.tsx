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

      setMessage(data.message ?? "Invite request sent!");
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
      <div className="w-full max-w-md space-y-6 rounded-[30px] border-2 border-[#8b4cd9] bg-[linear-gradient(135deg,rgba(80,30,120,0.3)_0%,rgba(0,0,0,0.5)_100%)] p-8 text-center shadow-[0_0_30px_rgba(139,76,217,0.4)]">
        {state === "success" ? (
          <>
            <div className="text-4xl">&#10003;</div>
            <h2 className="font-['Cinzel'] text-2xl tracking-[3px]">
              INVITE SENT
            </h2>
            <p className="text-sm text-zinc-400">
              Your request to join the team has been sent. The team owner needs
              to accept it before you become a member.
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
          className="mt-4 inline-block rounded-[25px] bg-[linear-gradient(135deg,#8b4cd9,#a855f7)] px-8 py-3 font-['Cinzel'] text-lg tracking-[2px] text-white shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-transform hover:scale-105"
        >
          TEAM PAGE
        </a>
      </div>
    </div>
  );
}
