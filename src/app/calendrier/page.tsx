import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const phases = [
  {
    name: "Demi-finales — AUFL (Football Américain)",
    color: "#c5a059",
    matches: [
      { id: "sf1", date: "20 Mai 2026", time: "18:00", home: "Univ. de Dakar", away: "Univ. de Nairobi", venue: "Stade Léopold S. Senghor", round: "Demi-finale 1", competition: "AUFL", status: "upcoming" },
      { id: "sf2", date: "20 Mai 2026", time: "21:00", home: "Univ. du Caire", away: "Univ. de Lagos", venue: "Cairo International Stadium", round: "Demi-finale 2", competition: "AUFL", status: "upcoming" },
      { id: "sf3", date: "23 Mai 2026", time: "19:00", home: "Univ. d'Accra", away: "Univ. de Tunis", venue: "Accra Sports Stadium", round: "Demi-finale 3", competition: "AUL", status: "upcoming" },
    ],
  },
  {
    name: "Finale — AUFL",
    color: "#c5a059",
    matches: [
      { id: "f1", date: "25 Mai 2026", time: "20:00", home: "TBD", away: "TBD", venue: "Kigali Pelé Stadium", round: "Finale", competition: "AUFL", status: "final" },
    ],
  },
  {
    name: "Phase de groupes — Terminée",
    color: "var(--color-muted-foreground)",
    matches: [
      { id: "g1", date: "2 Avr 2026", time: "—", home: "Univ. de Dakar", away: "Univ. d'Accra", venue: "Stade L.S. Senghor", round: "Groupe A", competition: "AUFL", status: "played", score: "2 – 0" },
      { id: "g2", date: "3 Avr 2026", time: "—", home: "Univ. de Nairobi", away: "Univ. du Caire", venue: "Nairobi Stadium", round: "Groupe B", competition: "AUL", status: "played", score: "1 – 2" },
      { id: "g3", date: "5 Avr 2026", time: "—", home: "Univ. de Lagos", away: "Univ. de Tunis", venue: "Lagos National Stadium", round: "Groupe C", competition: "AUFL", status: "played", score: "1 – 1" },
      { id: "g4", date: "10 Avr 2026", time: "—", home: "Univ. de Tunis", away: "Univ. de Dakar", venue: "Stade de Rades", round: "Groupe A", competition: "AUL", status: "played", score: "0 – 3" },
      { id: "g5", date: "12 Avr 2026", time: "—", home: "Univ. du Caire", away: "Univ. de Lagos", venue: "Cairo International Stadium", round: "Groupe C", competition: "AUFL", status: "played", score: "2 – 1" },
      { id: "g6", date: "15 Avr 2026", time: "—", home: "Univ. d'Accra", away: "Univ. de Nairobi", venue: "Accra Sports Stadium", round: "Groupe B", competition: "AUL", status: "played", score: "1 – 2" },
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
  const isPlayed = match.status === "played";
  const isFinal = match.status === "final";

  return (
    <div
      className={`py-4 border-b border-[--color-border] last:border-0 group transition-colors -mx-4 md:-mx-6 px-4 md:px-6 ${
        isFinal ? "bg-[--color-secondary]/5" : "hover:bg-[--color-muted]"
      }`}
    >
      {/* Mobile layout */}
      <div className="flex md:hidden flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-[--color-foreground]">{match.date}</div>
            <div className="text-xs text-[--color-muted-foreground]">{match.time}</div>
          </div>
          <div className="flex gap-1.5">
            <span
              className={`inline-block text-[9px] font-black uppercase tracking-[0.12em] px-2 py-1 ${
                isFinal ? "bg-[--color-secondary] text-[--color-dark]" : "border border-[--color-border] text-[--color-muted-foreground]"
              }`}
            >
              {match.round}
            </span>
            <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1" style={{ border: "1px solid rgba(197,160,89,0.3)", color: "#c5a059" }}>
              {match.competition}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center py-1">
          <span className={`flex-1 text-right text-sm font-semibold uppercase tracking-wide ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground]"}`}>
            {match.home}
          </span>
          {isPlayed && match.score ? (
            <span className="shrink-0 font-black text-base px-3" style={{ fontFamily: "var(--font-display)", color: "#c5a059", letterSpacing: "0.08em" }}>
              {match.score}
            </span>
          ) : (
            <span className="shrink-0 text-sm font-black" style={{ color: "#c5a059" }}>VS</span>
          )}
          <span className={`flex-1 text-sm font-semibold uppercase tracking-wide ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground]"}`}>
            {match.away}
          </span>
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-widest text-[--color-muted-foreground] text-center">{match.venue}</div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-center gap-6">
        <div className="w-28 shrink-0">
          <div className="text-sm font-semibold text-[--color-foreground]">{match.date}</div>
          <div className="text-xs text-[--color-muted-foreground] mt-0.5">{match.time}</div>
        </div>
        <div className="w-36 shrink-0 flex flex-col gap-1">
          <span
            className={`inline-block text-[9px] font-black uppercase tracking-[0.14em] px-2.5 py-1 w-max ${
              isFinal ? "bg-[--color-secondary] text-[--color-dark]" : "border border-[--color-border] text-[--color-muted-foreground]"
            }`}
          >
            {match.round}
          </span>
          <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 w-max" style={{ border: "1px solid rgba(197,160,89,0.3)", color: "#c5a059" }}>
            {match.competition}
          </span>
        </div>
        <div className="flex-1 flex items-center gap-4 min-w-0">
          <span className={`flex-1 text-right text-sm font-semibold uppercase tracking-wide truncate transition-colors ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground] group-hover:text-[--color-primary]"}`}>
            {match.home}
          </span>
          {isPlayed && match.score ? (
            <span className="shrink-0 font-black text-base px-4" style={{ fontFamily: "var(--font-display)", color: "#c5a059", letterSpacing: "0.08em" }}>
              {match.score}
            </span>
          ) : (
            <span className="shrink-0" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.08em", color: "#c5a059" }}>VS</span>
          )}
          <span className={`flex-1 text-sm font-semibold uppercase tracking-wide truncate transition-colors ${isPlayed ? "text-[--color-muted-foreground]" : "text-[--color-foreground] group-hover:text-[--color-primary]"}`}>
            {match.away}
          </span>
        </div>
        <div className="w-40 shrink-0 text-right">
          <div className="text-xs font-semibold uppercase tracking-widest text-[--color-muted-foreground]">{match.venue}</div>
        </div>
      </div>
    </div>
  );
}

export default function CalendrierPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        label="Saison 2026"
        title="Calendrier"
        subtitle="Tous les matchs AUL (football) et AUFL (football américain) — phases de groupes, demi-finales et finale à Kigali."
      />

      <main className="bg-[--color-background] px-5 md:px-12 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Competition filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 md:mb-12">
            {["Toutes les compétitions", "AUL — Football", "AUFL — Football Américain"].map((tab, i) => (
              <button
                key={tab}
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] border transition-colors"
                style={i === 0
                  ? { backgroundColor: "#043927", borderColor: "#043927", color: "#ffffff" }
                  : { borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-14">
            {phases.map((phase) => (
              <div key={phase.name}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="block w-10 h-[3px]" style={{ background: phase.color }} />
                  <h2
                    className="uppercase text-[--color-foreground]"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", letterSpacing: "0.06em" }}
                  >
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
        </div>
      </main>

      <Footer />
    </>
  );
}
