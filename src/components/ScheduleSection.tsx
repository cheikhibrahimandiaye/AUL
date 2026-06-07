"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScheduleMatch {
  id: string;
  date: string;
  day: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  venue: string;
  round: string;
  competition: "AUL" | "AUFL";
  isHighlight?: boolean;
}

const upcomingMatches: ScheduleMatch[] = [
  { id: "1", date: "20", day: "Mar", homeTeam: "Univ. Cheikh Anta Diop", awayTeam: "Univ. de Cape Town", time: "15:00", venue: "Stade L.S. Senghor, Dakar", round: "Demi-finale 1", competition: "AUFL" },
  { id: "2", date: "20", day: "Mar", homeTeam: "Univ. de Thiès",         awayTeam: "Univ. de Cape Town", time: "18:00", venue: "Stade L.S. Senghor, Dakar", round: "Demi-finale 2", competition: "AUFL" },
  { id: "3", date: "25", day: "Mar", homeTeam: "TBD",                    awayTeam: "TBD",                time: "18:00", venue: "Stade L.S. Senghor, Dakar", round: "Finale AUFL 2027", competition: "AUFL", isHighlight: true },
];

export default function ScheduleSection() {
  const { t } = useLang();
  const headerRef = useScrollReveal();
  const listRef = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section className="px-5 md:px-12 py-10 md:py-16 relative overflow-hidden" style={{ backgroundColor: "#0c0c0a" }}>
      <div aria-hidden="true" className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 select-none leading-none text-white" style={{ fontFamily: "var(--font-display)", fontSize: "18rem", opacity: 0.03, letterSpacing: "-0.04em" }}>
        2027
      </div>

      <div className="relative z-10 max-w-5xl">
        <div ref={headerRef} className="reveal flex justify-between items-end mb-10 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <span className="block w-10 h-[3px] mb-3" style={{ backgroundColor: "#c5a059" }} />
            <h2 className="leading-none uppercase text-white" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em" }}>
              {t("schedule_title")}
            </h2>
          </div>
          <Link href="/calendrier" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("schedule_more")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div ref={listRef} className="reveal reveal-left reveal-stagger flex flex-col">
          {upcomingMatches.map((match, idx) => (
            <div
              key={match.id}
              className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 py-5 group cursor-pointer transition-all duration-200 -mx-4 px-4"
              style={{
                borderBottom: idx < upcomingMatches.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                backgroundColor: match.isHighlight ? "rgba(197,160,89,0.06)" : undefined,
              }}
            >
              {/* Date */}
              <div className="w-14 shrink-0 text-center">
                <div className="leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "2.8rem", color: match.isHighlight ? "#c5a059" : "rgba(255,255,255,0.9)" }}>
                  {match.date}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.16em] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {match.day}
                </div>
              </div>

              {/* Badges */}
              <div className="shrink-0 flex flex-col gap-1.5 w-32">
                <span
                  className="inline-block text-[9px] font-black uppercase tracking-[0.14em] px-3 py-1.5 w-max"
                  style={match.isHighlight
                    ? { backgroundColor: "#c5a059", color: "#0c0c0a" }
                    : { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }
                  }
                >
                  {match.round}
                </span>
                <span className="inline-block text-[8px] font-black uppercase tracking-[0.14em] px-2 py-0.5 w-max" style={{ border: "1px solid rgba(197,160,89,0.3)", color: "#c5a059" }}>
                  {match.competition}
                </span>
              </div>

              {/* Matchup */}
              <div className="flex-1 flex items-center gap-4">
                <span className="flex-1 text-right font-semibold uppercase tracking-wide text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {match.homeTeam}
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", letterSpacing: "0.08em", color: "#c5a059" }}>VS</span>
                <span className="flex-1 font-semibold uppercase tracking-wide text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {match.awayTeam}
                </span>
              </div>

              {/* Time + Venue */}
              <div className="shrink-0 text-right">
                <div className="leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "rgba(255,255,255,0.9)" }}>
                  {match.time}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {match.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
