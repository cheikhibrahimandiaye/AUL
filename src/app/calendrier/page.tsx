"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useLang } from "@/lib/i18n";

const FILTERS = [
  { key: "all",  label: "Toutes les compétitions", label_en: "All competitions" },
  { key: "AUFL", label: "AUFL — Football",          label_en: "AUFL — Football" },
  { key: "AUBL", label: "AUBL — Basketball",        label_en: "AUBL — Basketball" },
  { key: "AWBL", label: "AWBL — Basketball Féminin", label_en: "AWBL — Women's Basketball" },
];

const phases = [
  {
    name: "AUFL 2027 — Saison à venir",
    color: "#c5a059",
    competition: "AUFL",
    matches: [
      { id: "aufl-1", date: "À définir", time: "—", home: "TBD", away: "TBD", venue: "Stade L.S. Senghor, Dakar", round: "Saison inaugurale 2027", competition: "AUFL", status: "upcoming" },
    ],
  },
  {
    name: "AUBL 2027 — Saison à venir",
    color: "#3b82f6",
    competition: "AUBL",
    matches: [
      { id: "aubl-1", date: "À définir", time: "—", home: "TBD", away: "TBD", venue: "À confirmer", round: "Saison inaugurale 2027", competition: "AUBL", status: "upcoming" },
    ],
  },
  {
    name: "AWBL 2027 — Saison à venir",
    color: "#a855f7",
    competition: "AWBL",
    matches: [
      { id: "awbl-1", date: "À définir", time: "—", home: "TBD", away: "TBD", venue: "À confirmer", round: "Saison inaugurale 2027", competition: "AWBL", status: "upcoming" },
    ],
  },
];

interface Match {
  id: string;
  date: string;
  time: string;
  home: string;
  away: string;
  venue: string;
  round: string;
  competition: string;
  status: string;
  score?: string;
}

function MatchRow({ match }: { match: Match }) {
  const isPlayed   = match.status === "played";
  const isFinal    = match.status === "final";
  const accentColor = match.competition === "AUBL" ? "#3b82f6" : match.competition === "AWBL" ? "#a855f7" : "#c5a059";

  return (
    <div className={`py-4 border-b border-[--color-border] last:border-0 group transition-colors -mx-4 md:-mx-6 px-4 md:px-6 ${isFinal ? "bg-[--color-secondary]/5" : "hover:bg-[--color-muted]"}`}>
      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-[--color-foreground]">{match.date}</div>
            <div className="text-xs text-[--color-muted-foreground]">{match.time}</div>
          </div>
          <div className="flex gap-1.5">
            <span className={`inline-block text-[9px] font-black uppercase tracking-[0.12em] px-2 py-1 ${isFinal ? "text-[--color-dark]" : "border border-[--color-border] text-[--color-muted-foreground]"}`}
              style={isFinal ? { backgroundColor: accentColor } : {}}>
              {match.round}
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1" style={{ border: `1px solid ${accentColor}40`, color: accentColor }}>
              {match.competition}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center py-1">
          <span className={`flex-1 text-right text-sm font-semibold uppercase tracking-wide ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground]"}`}>{match.home}</span>
          {isPlayed && match.score
            ? <span className="shrink-0 font-black text-base px-3" style={{ fontFamily: "var(--font-display)", color: accentColor, letterSpacing: "0.08em" }}>{match.score}</span>
            : <span className="shrink-0 text-sm font-black" style={{ color: accentColor }}>VS</span>
          }
          <span className={`flex-1 text-sm font-semibold uppercase tracking-wide ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground]"}`}>{match.away}</span>
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[--color-muted-foreground] text-center">{match.venue}</div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <div className="w-28 shrink-0">
          <div className="text-sm font-semibold text-[--color-foreground]">{match.date}</div>
          <div className="text-xs text-[--color-muted-foreground] mt-0.5">{match.time}</div>
        </div>
        <div className="w-36 shrink-0 flex flex-col gap-1">
          <span className={`inline-block text-[9px] font-black uppercase tracking-[0.14em] px-2.5 py-1 w-max ${isFinal ? "text-[--color-dark]" : "border border-[--color-border] text-[--color-muted-foreground]"}`}
            style={isFinal ? { backgroundColor: accentColor } : {}}>
            {match.round}
          </span>
          <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-max" style={{ border: `1px solid ${accentColor}40`, color: accentColor }}>
            {match.competition}
          </span>
        </div>
        <div className="flex-1 flex items-center gap-4 min-w-0">
          <span className={`flex-1 text-right text-sm font-semibold uppercase tracking-wide truncate transition-colors ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground] group-hover:text-[--color-primary]"}`}>{match.home}</span>
          {isPlayed && match.score
            ? <span className="shrink-0 font-black text-base px-4" style={{ fontFamily: "var(--font-display)", color: accentColor, letterSpacing: "0.08em" }}>{match.score}</span>
            : <span className="shrink-0" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.08em", color: accentColor }}>VS</span>
          }
          <span className={`flex-1 text-sm font-semibold uppercase tracking-wide truncate transition-colors ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground] group-hover:text-[--color-primary]"}`}>{match.away}</span>
        </div>
        <div className="w-40 shrink-0 text-right">
          <div className="text-xs font-semibold uppercase tracking-widest text-[--color-muted-foreground]">{match.venue}</div>
        </div>
      </div>
    </div>
  );
}

export default function CalendrierPage() {
  const { lang } = useLang();
  const [activeFilter, setActiveFilter] = useState("all");

  const visiblePhases = activeFilter === "all"
    ? phases
    : phases.filter((p) => p.competition === activeFilter);

  return (
    <>
      <Navbar />
      <PageHeader
        label={lang === "fr" ? "Saison 2027" : "Season 2027"}
        title={lang === "fr" ? "Calendrier" : "Schedule"}
        subtitle={lang === "fr"
          ? "Tous les matchs AUFL de la saison inaugurale 2027 — 6 universités, Dakar, Sénégal."
          : "All AUFL matches of the inaugural 2027 season — 6 universities, Dakar, Senegal."}
      />

      <main className="bg-[--color-background] px-5 md:px-12 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              const accentColor = f.key === "AUBL" ? "#3b82f6" : f.key === "AWBL" ? "#a855f7" : "#043927";
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] border transition-colors cursor-pointer"
                  style={isActive
                    ? { backgroundColor: accentColor, borderColor: accentColor, color: "#ffffff" }
                    : { borderColor: "var(--color-border)", color: "var(--color-muted-foreground)", backgroundColor: "transparent" }
                  }
                >
                  {lang === "fr" ? f.label : f.label_en}
                </button>
              );
            })}
          </div>

          {visiblePhases.length === 0 ? (
            <div className="py-16 text-center text-[--color-muted-foreground] text-sm font-semibold uppercase tracking-widest">
              {lang === "fr" ? "Aucun match disponible pour cette compétition." : "No matches available for this competition."}
            </div>
          ) : (
            <div className="flex flex-col gap-14">
              {visiblePhases.map((phase) => (
                <div key={phase.name}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="block w-10 h-[3px]" style={{ background: phase.color }} />
                    <h2 className="uppercase text-[--color-foreground]" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", letterSpacing: "0.06em" }}>
                      {phase.name}
                    </h2>
                  </div>
                  <div className="bg-[--color-surface] border border-[--color-border] px-6">
                    {phase.matches.map((match) => (
                      <MatchRow key={match.id} match={match} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
