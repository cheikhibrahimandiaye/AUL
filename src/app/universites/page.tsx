import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const universities = [
  {
    id: "dakar",
    name: "Université de Dakar",
    country: "Sénégal",
    flag: "🇸🇳",
    city: "Dakar",
    record: "14-2",
    rank: 1,
    conference: "Groupe A",
    founded: 2024,
    color: "#1a6b3c",
  },
  {
    id: "nairobi",
    name: "Université de Nairobi",
    country: "Kenya",
    flag: "🇰🇪",
    city: "Nairobi",
    record: "12-4",
    rank: 2,
    conference: "Groupe B",
    founded: 2024,
    color: "#c5a059",
  },
  {
    id: "caire",
    name: "Université du Caire",
    country: "Égypte",
    flag: "🇪🇬",
    city: "Le Caire",
    record: "11-5",
    rank: 3,
    conference: "Groupe B",
    founded: 2024,
    color: "#c5a059",
  },
  {
    id: "lagos",
    name: "Université de Lagos",
    country: "Nigeria",
    flag: "🇳🇬",
    city: "Lagos",
    record: "10-6",
    rank: 4,
    conference: "Groupe C",
    founded: 2024,
    color: "#3a7d44",
  },
  {
    id: "accra",
    name: "Université d'Accra",
    country: "Ghana",
    flag: "🇬🇭",
    city: "Accra",
    record: "9-7",
    rank: 5,
    conference: "Groupe A",
    founded: 2024,
    color: "#2d6b9e",
  },
  {
    id: "tunis",
    name: "Université de Tunis",
    country: "Tunisie",
    flag: "🇹🇳",
    city: "Tunis",
    record: "8-8",
    rank: 6,
    conference: "Groupe C",
    founded: 2024,
    color: "#c5a059",
  },
  {
    id: "kigali",
    name: "Université de Kigali",
    country: "Rwanda",
    flag: "🇷🇼",
    city: "Kigali",
    record: "7-9",
    rank: 7,
    conference: "Groupe A",
    founded: 2024,
    color: "#1a6b3c",
  },
  {
    id: "abidjan",
    name: "Université d'Abidjan",
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    city: "Abidjan",
    record: "6-10",
    rank: 8,
    conference: "Groupe B",
    founded: 2024,
    color: "#f97316",
  },
];

const rankColors: Record<number, string> = { 1: "#c5a059", 2: "#9ca3af", 3: "#b87333" };

export default function UniversitesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        label="Saison 2026"
        title="Universités"
        subtitle="Les 8 universités fondatrices de l'AUFL — des campus africains qui façonnent les champions de demain."
      />

      <main className="bg-[--color-background] px-5 md:px-12 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-10 md:mb-16 border border-[--color-border]">
            {[
              { value: "8", label: "Universités" },
              { value: "5", label: "Pays" },
              { value: "16", label: "Matchs joués" },
              { value: "1", label: "Champion à couronner" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`px-5 md:px-8 py-6 text-center ${i % 2 === 0 ? "border-r border-[--color-border]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[--color-border]" : ""} md:[&:not(:last-child)]:border-r`}
              >
                <div
                  className="text-[--color-primary] leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)", fontSize: "3rem" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[--color-muted-foreground]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* University cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="bg-[--color-surface] border border-[--color-border] flex overflow-hidden group hover:border-[--color-primary]/40 transition-colors duration-200 cursor-pointer"
              >
                {/* Color accent bar */}
                <div className="w-1 shrink-0" style={{ background: uni.color }} />

                {/* Rank block */}
                <div className="w-16 shrink-0 flex items-center justify-center border-r border-[--color-border] py-6">
                  <span
                    className="font-black text-2xl"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: rankColors[uni.rank] ?? "var(--color-muted-foreground)",
                    }}
                  >
                    {uni.rank}
                  </span>
                </div>

                {/* Flag + info */}
                <div className="flex-1 px-6 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{uni.flag}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[--color-muted-foreground]">
                          {uni.country} · {uni.city}
                        </span>
                      </div>
                      <h3
                        className="text-[--color-foreground] uppercase leading-tight group-hover:text-[--color-primary] transition-colors"
                        style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: "0.04em" }}
                      >
                        {uni.name}
                      </h3>
                      <div className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-[--color-muted-foreground]">
                        {uni.conference}
                      </div>
                    </div>

                    {/* Record */}
                    <div className="text-right shrink-0">
                      <div
                        className="text-[--color-primary] leading-none"
                        style={{ fontFamily: "var(--font-display)", fontSize: "2rem" }}
                      >
                        {uni.record}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[--color-muted-foreground] mt-0.5">
                        Bilan
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-16 border-t border-[--color-border] pt-8 md:pt-12 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div>
              <p className="text-[--color-muted-foreground] text-sm">
                Votre université n&apos;est pas encore membre de l&apos;AUL ?
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[--color-primary] text-white px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] hover:bg-[--color-primary-light] transition-colors"
            >
              Rejoindre la Ligue
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
