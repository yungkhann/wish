import { useEffect, useState } from "react";
import type { Lang } from "../i18n/ui";
import { getLangFromCookieClient, useTranslations } from "../i18n/utils";
import AuthForm from "./AuthForm";

type State = "loading" | "unauthenticated" | "no-team" | "has-team";

type Member = {
  userId: string;
  email: string;
  role: "owner" | "member" | "request";
  inviteId?: string;
};

type UserData = {
  id: string;
  email: string;
  teamId: string | null;
  isRegistered: boolean;
};

export default function TeamPage({ lang: langProp }: { lang?: Lang }) {
  const lang = langProp ?? getLangFromCookieClient();
  const t = useTranslations(lang);
  const [state, setState] = useState<State>("loading");
  const [user, setUser] = useState<UserData | null>(null);
  const [teamName, setTeamName] = useState("");
  const [newTeamName, setNewTeamName] = useState("");
  const [members, setMembers] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [copyText, setCopyText] = useState(t("team.copyInvite"));

  const fetchUser = async () => {
    const res = await fetch("/api/user/me");
    if (res.status === 401) {
      setState("unauthenticated");
      return null;
    }
    if (!res.ok) {
      setState("unauthenticated");
      return null;
    }
    const data = await res.json();
    if (!data.isRegistered) {
      window.location.href = "/registration";
      return null;
    }
    setUser(data);
    return data as UserData;
  };

  const fetchTeamData = async () => {
    try {
      const res = await fetch("/api/team/members");
      if (!res.ok) {
        setState("no-team");
        return;
      }
      const data = await res.json();
      setMembers(data.members);
      setTeamName(data.teamName);
      setState("has-team");
    } catch {
      setState("no-team");
    }
  };

  useEffect(() => {
    (async () => {
      const userData = await fetchUser();
      if (!userData) return;
      if (userData.teamId) {
        await fetchTeamData();
      } else {
        setState("no-team");
      }
    })();
  }, []);

  const handleCreateTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamName: newTeamName }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? t("team.failedCreate"));
        return;
      }
      setNewTeamName("");
      window.location.reload();
    } catch {
      setError(t("auth.unexpectedError"));
    } finally {
      setActionLoading(false);
    }
  };

  const handleCopyLink = async () => {
    setError(null);
    try {
      const textPromise = fetch("/api/team/link").then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error ?? t("team.failedInviteLink"));
        return data.link as string;
      });

      if (navigator.clipboard && typeof ClipboardItem !== "undefined") {
        await navigator.clipboard.write([
          new ClipboardItem({
            "text/plain": textPromise.then(
              (text) => new Blob([text], { type: "text/plain" }),
            ),
          }),
        ]);
      } else {
        const text = await textPromise;
        await navigator.clipboard.writeText(text);
      }

      setCopyText(t("team.copied"));
      setTimeout(() => setCopyText(t("team.copyInvite")), 2000);
    } catch (e) {
      const msg = e instanceof Error ? e.message : t("team.failedCopy");
      setError(msg);
    }
  };

  const handleInviteAction = async (
    inviteId: string,
    action: "accepted" | "rejected",
  ) => {
    setError(null);
    setActionLoading(true);
    try {
      const res = await fetch(`/api/invite/${inviteId}/status/${action}`, {
        method: "POST",
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? t("team.actionFailed"));
        return;
      }
      await fetchTeamData();
    } catch {
      setError(t("auth.unexpectedError"));
    } finally {
      setActionLoading(false);
    }
  };

  const handleRemoveMember = async (userId: string) => {
    setError(null);
    setActionLoading(true);
    try {
      const res = await fetch(`/api/team/members/${userId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? t("team.failedRemove"));
        return;
      }
      await fetchTeamData();
    } catch {
      setError(t("auth.unexpectedError"));
    } finally {
      setActionLoading(false);
    }
  };

  const handleLeaveTeam = async () => {
    setError(null);
    setActionLoading(true);
    try {
      const res = await fetch("/api/team/leave", { method: "POST" });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? t("team.failedLeave"));
        return;
      }
      window.location.reload();
    } catch {
      setError(t("auth.unexpectedError"));
    } finally {
      setActionLoading(false);
    }
  };

  const handleDissolveTeam = async () => {
    setError(null);
    setActionLoading(true);
    try {
      const res = await fetch("/api/team", { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? t("team.failedDissolve"));
        return;
      }
      window.location.reload();
    } catch {
      setError(t("auth.unexpectedError"));
    } finally {
      setActionLoading(false);
    }
  };

  const isOwner =
    user && members.some((m) => m.userId === user.id && m.role === "owner");

  if (state === "loading") {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-zinc-500">
        {t("team.loading")}
      </div>
    );
  }

  if (state === "unauthenticated") {
    return <AuthForm lang={lang} redirectTo="/team" />;
  }

  if (state === "no-team") {
    return (
      <div className="mx-auto max-w-5xl px-4 py-8 text-white">
        {error && (
          <div className="mb-6 rounded border border-red-800 bg-red-900/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <div className="w-full max-w-md space-y-6 rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-linear-to-r from-black/20 via-black/20 to-black/20 p-8 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:rounded-tl-[60px] sm:rounded-br-[60px]">
            <h2 className="text-center font-['Marcellus'] text-2xl tracking-[3px]">
              {t("team.createTeam")}
            </h2>
            <p className="text-center text-sm text-zinc-400">
              {t("team.noTeamYet")}
            </p>

            <form onSubmit={handleCreateTeam} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-400">
                  {t("team.teamName")}
                </label>
                <input
                  type="text"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  required
                  maxLength={100}
                  placeholder={t("team.enterTeamName")}
                  className="w-full rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-linear-to-r from-black/20 via-black/20 to-black/20 px-6 py-3 text-white shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] outline-none sm:rounded-tl-[60px] sm:rounded-br-[60px]"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-8 py-3 font-['Marcellus'] text-base tracking-[2px] text-white shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105 disabled:opacity-50"
                >
                  {actionLoading ? t("team.creating") : t("team.createTeamBtn")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // has-team state
  const owners = members.filter((m) => m.role === "owner");
  const regularMembers = members.filter((m) => m.role === "member");
  const requests = members.filter((m) => m.role === "request");

  return (
    <div className="relative overflow-hidden">
      {/* Background blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(91,31,156,0.80)_0%,rgba(0,0,0,0.80)_100%)] blur-[52.5px]" />
      <div className="relative mx-auto max-w-7xl space-y-8 px-4 py-8">
        {error && (
          <div className="rounded border border-red-800 bg-red-900/30 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Instructions */}
          <div className="rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg bg-linear-to-r from-black/20 via-black/20 to-black/20 p-8 shadow-[0px_0px_60px_0px_rgba(119,22,208,0.60)] sm:rounded-tl-[60px] sm:rounded-br-[60px]">
            <h2 className="mb-6 text-center font-['Marcellus'] text-2xl tracking-[3px]">
              {t("team.instructions")}
            </h2>
            <ul className="space-y-6 font-['Marcellus'] text-[22px] text-zinc-300">
              <li>{t("team.instr1")}</li>
              <li>{t("team.instr2")}</li>
              <li>{t("team.instr3")}</li>
              <li>{t("team.instr4")}</li>
              <li>{t("team.instr5")}</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="space-y-6">
            {/* Team Name */}
            <h2 className="text-center font-['Marcellus'] text-2xl tracking-[3px]">
              {t("team.teamName")}: {teamName}
            </h2>

            {/* Participants */}
            <div>
              <table className="w-full table-fixed border-collapse">
                <tbody>
                  {(() => {
                    const allMembers = [
                      ...owners,
                      ...regularMembers,
                      ...requests,
                    ];
                    const rows = Array.from(
                      { length: 4 },
                      (_, i) => allMembers[i] ?? null,
                    );
                    return rows.map((m, i) =>
                      m ? (
                        <MemberRow
                          key={m.inviteId ?? m.userId}
                          member={m}
                          isOwner={!!isOwner}
                          currentUserId={user?.id ?? ""}
                          onRemove={handleRemoveMember}
                          onAccept={(id) => handleInviteAction(id, "accepted")}
                          onReject={(id) => handleInviteAction(id, "rejected")}
                          disabled={actionLoading}
                          t={t}
                        />
                      ) : (
                        <tr key={`empty-${i}`}>
                          <td className="h-[67px] border-b border-white/30 pr-6" />
                          <td className="h-[67px] w-[130px] border-b border-l border-white/30 px-6" />
                          <td className="h-[67px] w-[130px] border-b border-l border-white/30 pl-6" />
                        </tr>
                      ),
                    );
                  })()}
                </tbody>
              </table>
              <div className="mt-4 flex justify-center">
                <a
                  href="/team/videos"
                  className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border border-purple-500/40 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-10 py-4 font-['Marcellus'] text-lg tracking-[2px] text-purple-300 shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105"
                >
                  {t("team.teamVideos")}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {isOwner && (
            <button
              onClick={handleCopyLink}
              className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border border-white/20 bg-[linear-gradient(135deg,rgba(0,0,0,0.50),#9A44E9)] px-12 py-4 font-['Marcellus'] text-lg tracking-[2px] text-white shadow-[0_0_4.5px_#7716D0,0_0_11.25px_#7716D0,0_0_45px_rgba(119,22,208,0.60),0_0_67.5px_rgba(119,22,208,1)] transition-transform [text-shadow:0_0_3px_rgba(255,255,255,1)] hover:scale-105"
            >
              {copyText}
            </button>
          )}
          {isOwner ? (
            <button
              onClick={handleDissolveTeam}
              disabled={actionLoading}
              className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border-2 border-red-500 bg-transparent px-8 py-4 font-['Marcellus'] text-lg tracking-[2px] text-red-400 transition-colors hover:bg-red-500/20 disabled:opacity-50"
            >
              {t("team.dissolve")}
            </button>
          ) : (
            <button
              onClick={handleLeaveTeam}
              disabled={actionLoading}
              className="rounded-tl-[6px] rounded-tr-[45px] rounded-br-[6px] rounded-bl-[45px] border-2 border-red-500 bg-transparent px-8 py-4 font-['Marcellus'] text-lg tracking-[2px] text-red-400 transition-colors hover:bg-red-500/20 disabled:opacity-50"
            >
              {t("team.leave")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MemberRow({
  member,
  isOwner,
  currentUserId,
  onRemove,
  onAccept,
  onReject,
  disabled,
  t,
}: {
  member: Member;
  isOwner: boolean;
  currentUserId: string;
  onRemove: (userId: string) => void;
  onAccept: (inviteId: string) => void;
  onReject: (inviteId: string) => void;
  disabled: boolean;
  t: (key: any) => string;
}) {
  return (
    <tr>
      <td className="h-[67px] overflow-hidden border-b border-white/30 pr-6 font-['Marcellus'] text-base text-white lowercase">
        <div className="overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {member.email}
        </div>
      </td>
      <td className="h-[67px] w-[130px] border-b border-l border-white/30 px-6 text-center font-['Marcellus'] text-base text-white lowercase">
        {member.role === "owner"
          ? t("team.roleCaptain")
          : member.role === "member"
            ? t("team.roleMember")
            : t("team.roleRequest")}
      </td>
      <td className="h-[67px] w-[130px] border-b border-l border-white/30 text-center">
        <div className="flex items-center justify-center gap-2">
          {member.role === "request" && isOwner && member.inviteId && (
            <>
              <button
                onClick={() => onAccept(member.inviteId!)}
                disabled={disabled}
                className="flex h-[45px] w-[45px] items-center justify-center rounded-tl-[11px] rounded-tr-[2px] rounded-br-[11px] rounded-bl-[2px] border border-green-500/40 bg-black/20 font-['Marcellus'] text-xl text-green-500 shadow-[0_0_4.5px_3.375px_rgba(0,255,0,0.20),inset_0_0_4.5px_4.5px_rgba(0,255,0,0.25)] transition-opacity disabled:opacity-50"
              >
                ✓
              </button>
              <button
                onClick={() => onReject(member.inviteId!)}
                disabled={disabled}
                className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-tl-[11px] rounded-tr-[2px] rounded-br-[11px] rounded-bl-[2px] border border-red-500/40 bg-black/20 font-['Marcellus'] text-lg text-red-500 shadow-[0_0_4.5px_3.375px_rgba(255,0,0,0.20),inset_0_0_4.5px_4.5px_rgba(255,0,0,0.25)] transition-opacity disabled:opacity-50"
              >
                x
              </button>
            </>
          )}
          {member.role === "member" &&
            isOwner &&
            member.userId !== currentUserId && (
              <button
                onClick={() => onRemove(member.userId)}
                disabled={disabled}
                className="flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-tl-[11px] rounded-tr-[2px] rounded-br-[11px] rounded-bl-[2px] border border-red-500/40 bg-black/20 font-['Marcellus'] text-lg text-red-500 shadow-[0_0_4.5px_3.375px_rgba(255,0,0,0.20),inset_0_0_4.5px_4.5px_rgba(255,0,0,0.25)] transition-opacity disabled:opacity-50"
              >
                x
              </button>
            )}
        </div>
      </td>
    </tr>
  );
}
