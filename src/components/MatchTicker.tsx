"use client";

import { useLang } from "@/lib/i18n";

interface MatchResult {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "live" | "final" | "upcoming";
  time?: string;
  competition: "AUL" | "AUFL";
}

const matches: MatchResult[] = [
  { id: "1", homeTeam: "TBD", awayTeam: "TBD", homeScore: 0, awayScore: 0, status: "upcoming", time: "TBD", competition: "AUFL" },
  { id: "2", homeTeam: "TBD", awayTeam: "TBD", homeScore: 0, awayScore: 0, status: "upcoming", time: "TBD", competition: "AUFL" },
  { id: "3", homeTeam: "TBD", awayTeam: "TBD", homeScore: 0, awayScore: 0, status: "upcoming", time: "TBD", competition: "AUFL" },
  { id: "4", homeTeam: "TBD", awayTeam: "TBD", homeScore: 0, awayScore: 0, status: "upcoming", time: "TBD", competition: "AUFL" },
  { id: "5", homeTeam: "TBD", awayTeam: "TBD", homeScore: 0, awayScore: 0, status: "upcoming", time: "TBD", competition: "AUFL" },
];

function MatchItem({ match }: { match: MatchResult }) {
  const isLive     = match.status === "live";
  const isFinal    = match.status === "final";
  const isUpcoming = match.status === "upcoming";

  return (
    <div className="flex items-center gap-5 px-8 shrink-0" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
      <span className="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 shrink-0" style={{ border: "1px solid rgba(197,160,89,0.3)", color: "#c5a059" }}>
        {match.competition}
      </span>

      {isLive && (
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-400">
          <span className="live-dot" /> Live
        </span>
      )}
      {isFinal && (
        <span className="text-[9px] font-semibold uppercase tracking-widest border px-2 py-0.5" style={{ color: "rgba(255,255,255,0.3)", borderColor: "rgba(255,255,255,0.1)" }}>
          Final
        </span>
      )}
      {isUpcoming && (
        <span className="text-[9px] font-semibold uppercase tracking-widest px-2 py-0.5" style={{ color: "rgba(197,160,89,0.7)", border: "1px solid rgba(197,160,89,0.2)" }}>
          {match.time}
        </span>
      )}

      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)" }}>
        {match.homeTeam}
      </span>
      <span className="whitespace-nowrap tabular-nums text-white" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "0.06em" }}>
        {isUpcoming ? "— —" : `${match.homeScore}  –  ${match.awayScore}`}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)" }}>
        {match.awayTeam}
      </span>
    </div>
  );
}

export default function MatchTicker() {
  const { t } = useLang();
  const doubled = [...matches, ...matches];

  return (
    <div className="hidden md:flex overflow-hidden items-stretch h-11" style={{ backgroundColor: "#0c0c0a", borderBottom: "1px solid rgba(197,160,89,0.3)" }}>
      <div className="shrink-0 flex items-center gap-2 px-5 z-10" style={{ backgroundColor: "#c5a059", color: "#0c0c0a" }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
        <span className="text-[10px] font-black uppercase tracking-[0.18em] whitespace-nowrap">{t("ticker_label")}</span>
      </div>
      <div className="overflow-hidden flex-1 flex items-center">
        <div className="ticker-track">
          {doubled.map((match, i) => <MatchItem key={`${match.id}-${i}`} match={match} />)}
        </div>
      </div>
    </div>
  );
}
