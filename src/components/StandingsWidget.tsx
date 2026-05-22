"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

interface StandingEntry {
  rank: number;
  university: string;
  wins: number;
  losses: number;
}

interface StandingsWidgetProps {
  standings: StandingEntry[];
}

const rankColors: Record<number, string> = { 1: "#c5a059", 2: "#9ca3af", 3: "#b87333" };

export default function StandingsWidget({ standings }: StandingsWidgetProps) {
  const { t } = useLang();

  return (
    <div className="w-full lg:w-1/3">
      <div className="flex justify-between items-end mb-8 pb-4" style={{ borderBottom: "1px solid #e2e0d8" }}>
        <div>
          <span className="gold-rule mb-3 w-10 inline-block delay-300" />
          <h2 className="leading-none uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
            {t("standings_title")}
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: "#6b6b60" }}>
            {t("standings_season")}
          </p>
        </div>
        <Link href="/classement" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "#6b6b60" }}>
          {t("standings_see_all")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div className="flex flex-col">
        {standings.map((entry, idx) => (
          <div
            key={entry.rank}
            className="flex items-center gap-4 py-3.5 group cursor-pointer transition-colors px-3 -mx-3"
            style={{ borderBottom: idx < standings.length - 1 ? "1px solid #e2e0d8" : "none" }}
          >
            <span className="w-5 text-center shrink-0 font-black tabular-nums text-sm" style={{ color: rankColors[entry.rank] ?? "#6b6b60" }}>
              {entry.rank}
            </span>
            <span className="flex-1 truncate text-sm font-semibold uppercase tracking-wide" style={{ color: "#0c0c0a" }}>
              {entry.university}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-black tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#043927" }}>
                {entry.wins}
              </span>
              <span className="text-xs" style={{ color: "#e2e0d8" }}>—</span>
              <span className="font-black tabular-nums" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "#6b6b60" }}>
                {entry.losses}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/classement"
        className="mt-6 flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
        style={{ border: "1px solid #043927", color: "#043927" }}
      >
        {t("standings_full")}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
