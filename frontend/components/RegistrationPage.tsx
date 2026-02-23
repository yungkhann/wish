import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import RegistrationForm from "./RegistrationForm";

type State =
  | "loading"
  | "unauthenticated"
  | "needs-registration"
  | "registered";

export default function RegistrationPage() {
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
        Loading...
      </div>
    );
  }

  if (state === "unauthenticated") {
    return <AuthForm />;
  }

  if (state === "needs-registration") {
    return <RegistrationForm />;
  }

  // "registered" state — redirecting to /
  return (
    <div className="flex min-h-[50vh] items-center justify-center text-zinc-500">
      Redirecting...
    </div>
  );
}
