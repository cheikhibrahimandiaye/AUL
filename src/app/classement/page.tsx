import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const standings = [
  { rank: 1, university: "Univ. Cheikh Anta Diop", country: "Sénégal", flag: "🇸🇳", played: 5, wins: 5, losses: 0, pf: 12, pa: 2, diff: +10, streak: "V5", conference: "Groupe A" },
  { rank: 2, university: "Univ. de Thiès", country: "Sénégal", flag: "🇸🇳", played: 5, wins: 4, losses: 1, pf: 10, pa: 4, diff: +6, streak: "V2", conference: "Groupe A" },
  { rank: 3, university: "Univ. de Cape Town", country: "Afrique du Sud", flag: "🇿🇦", played: 5, wins: 2, losses: 3, pf: 6, pa: 8, diff: -2, streak: "D2", conference: "Groupe B" },
  { rank: 4, university: "Univ. de Gambie", country: "Gambie", flag: "🇬🇲", played: 5, wins: 1, losses: 4, pf: 4, pa: 10, diff: -6, streak: "D3", conference: "Groupe A" },
  { rank: 5, university: "Univ. Félix H-B", country: "Côte d'Ivoire", flag: "🇨🇮", played: 5, wins: 1, losses: 4, pf: 3, pa: 9, diff: -6, streak: "D1", conference: "Groupe B" },
  { rank: 6, university: "Univ. Thomas Sankara", country: "Burkina Faso", flag: "🇧🇫", played: 5, wins: 0, losses: 5, pf: 1, pa: 13, diff: -12, streak: "D5", conference: "Groupe A" },
];

const rankColors: Record<number, string> = { 1: "#c5a059", 2: "#9ca3af", 3: "#b87333" };

const statLeaders = [
  { stat: "Buts marqués", leader: "Univ. Cheikh Anta Diop", value: "12" },
  { stat: "Meilleure défense", leader: "Univ. Cheikh Anta Diop", value: "2 enc." },
  { stat: "Meilleur différentiel", leader: "Univ. Cheikh Anta Diop", value: "+10" },
  { stat: "Invaincu", leader: "Univ. Cheikh Anta Diop", value: "5/5" },
];

export default function ClassementPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        label="Saison 2027"
        title="Classement"
        subtitle="Le classement AUFL 2027 (Football) — 6 universités, 5 pays africains, une seule championne."
      />

      <main className="bg-[--color-background] px-5 md:px-12 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">

          {/* Stat leaders strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-10 md:mb-14 border border-[--color-border]">
            {statLeaders.map((s, i) => (
              <div
                key={s.stat}
                className={`px-4 md:px-6 py-5 ${i % 2 === 0 ? "border-r border-[--color-border]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[--color-border]" : ""} md:[&:not(:last-child)]:border-r`}
              >
                <div className="text-[9px] font-black uppercase tracking-[0.18em] text-[--color-muted-foreground] mb-2">
                  {s.stat}
                </div>
                <div
                  className="text-[--color-primary] leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}
                >
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-[--color-muted-foreground] uppercase tracking-wide">
                  {s.leader}
                </div>
              </div>
            ))}
          </div>

          {/* Standings table */}
          <div className="bg-[--color-surface] border border-[--color-border]">

            {/* Desktop header — hidden on mobile */}
            <div className="hidden md:flex items-center gap-4 px-6 py-3 border-b border-[--color-border] bg-[--color-muted]">
              <div className="w-8 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">#</div>
              <div className="flex-1 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground]">Université</div>
              <div className="w-14 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">MJ</div>
              <div className="w-10 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">V</div>
              <div className="w-10 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">D</div>
              <div className="w-14 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">PF</div>
              <div className="w-14 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">PC</div>
              <div className="w-14 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">DIFF</div>
              <div className="w-14 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">Série</div>
            </div>

            {/* Mobile header */}
            <div className="flex md:hidden items-center gap-3 px-4 py-2.5 border-b border-[--color-border] bg-[--color-muted]">
              <div className="w-7 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">#</div>
              <div className="flex-1 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground]">Université</div>
              <div className="w-8 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">V</div>
              <div className="w-8 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">D</div>
              <div className="w-14 shrink-0 text-[9px] font-black uppercase tracking-widest text-[--color-muted-foreground] text-center">Série</div>
            </div>

            {standings.map((entry) => (
              <div
                key={entry.rank}
                className={`border-b border-[--color-border] last:border-0 group cursor-pointer transition-colors hover:bg-[--color-muted] ${entry.rank <= 4 ? "border-l-2 border-l-[--color-primary]" : "border-l-2 border-l-transparent"}`}
              >
                {/* Mobile row */}
                <div className="flex md:hidden items-center gap-3 px-4 py-3.5">
                  <div className="w-7 shrink-0 text-center">
                    <span className="font-black text-sm" style={{ color: rankColors[entry.rank] ?? "var(--color-muted-foreground)" }}>
                      {entry.rank}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center gap-2 min-w-0">
                    <span className="text-base shrink-0">{entry.flag}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold uppercase tracking-wide text-[--color-foreground] truncate group-hover:text-[--color-primary] transition-colors">
                        {entry.university}
                      </div>
                      <div className="text-[10px] text-[--color-muted-foreground] uppercase tracking-widest">
                        {entry.conference}
                      </div>
                    </div>
                  </div>
                  <div className="w-8 shrink-0 text-center font-black" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-primary)" }}>
                    {entry.wins}
                  </div>
                  <div className="w-8 shrink-0 text-center font-black" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "var(--color-muted-foreground)" }}>
                    {entry.losses}
                  </div>
                  <div className="w-14 shrink-0 text-center">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 ${entry.streak.startsWith("V") ? "bg-[--color-primary]/10 text-[--color-primary]" : "bg-red-50 text-red-500"}`}>
                      {entry.streak}
                    </span>
                  </div>
                </div>

                {/* Desktop row */}
                <div className="hidden md:flex items-center gap-4 px-6 py-4">
                  <div className="w-8 shrink-0 text-center">
                    <span className="font-black text-sm" style={{ color: rankColors[entry.rank] ?? "var(--color-muted-foreground)" }}>
                      {entry.rank}
                    </span>
                  </div>
                  <div className="flex-1 flex items-center gap-3 min-w-0">
                    <span className="text-base">{entry.flag}</span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold uppercase tracking-wide text-[--color-foreground] truncate group-hover:text-[--color-primary] transition-colors">
                        {entry.university}
                      </div>
                      <div className="text-[10px] text-[--color-muted-foreground] uppercase tracking-widest">
                        {entry.conference}
                      </div>
                    </div>
                  </div>
                  <div className="w-14 shrink-0 text-center text-sm font-semibold text-[--color-muted-foreground]">{entry.played}</div>
                  <div className="w-10 shrink-0 text-center font-black" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--color-primary)" }}>
                    {entry.wins}
                  </div>
                  <div className="w-10 shrink-0 text-center font-black" style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", color: "var(--color-muted-foreground)" }}>
                    {entry.losses}
                  </div>
                  <div className="w-14 shrink-0 text-center text-sm text-[--color-muted-foreground]">{entry.pf}</div>
                  <div className="w-14 shrink-0 text-center text-sm text-[--color-muted-foreground]">{entry.pa}</div>
                  <div className={`w-14 shrink-0 text-center text-sm font-bold ${entry.diff >= 0 ? "text-[--color-primary]" : "text-red-500"}`}>
                    {entry.diff > 0 ? `+${entry.diff}` : entry.diff}
                  </div>
                  <div className="w-14 shrink-0 text-center">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 ${entry.streak.startsWith("V") ? "bg-[--color-primary]/10 text-[--color-primary]" : "bg-red-50 text-red-500"}`}>
                      {entry.streak}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-3 md:gap-6 text-[10px] font-semibold uppercase tracking-widest text-[--color-muted-foreground]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 border-l-2 border-l-[--color-primary]" />
              <span>Qualifié pour les Playoffs</span>
            </div>
            <span className="hidden md:inline">·</span>
            <span>MJ = Matchs joués · V = Victoires · D = Défaites</span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
