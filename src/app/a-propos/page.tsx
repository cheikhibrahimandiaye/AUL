import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const GOLD = "#c5a059";
const GREEN = "#043927";

const values = [
  { icon: "◈", title: "Excellence", description: "Nous élevons le niveau du sport universitaire africain aux standards internationaux, inspirés des meilleures ligues du monde — NCAA, UEFA, FIFA." },
  { icon: "◇", title: "Unité Panafricaine", description: "Connecter les universités de tout le continent, bâtir des ponts entre cultures et nations à travers le football et le football américain." },
  { icon: "◉", title: "Formation", description: "Au-delà du sport, nous développons les athlètes de demain — sur le terrain et dans les amphithéâtres universitaires." },
  { icon: "◆", title: "Impact", description: "Chaque match est une vitrine pour les talents africains, une opportunité de visibilité nationale et internationale." },
];

const milestones = [
  { year: "2023", title: "Fondation de l'AUL & l'AUFL", description: "Ahmadou Wathie pose les bases de la première ligue universitaire africaine de football et football américain au Sénégal." },
  { year: "2024", title: "Phase pilote", description: "8 universités de 5 pays rejoignent la ligue pour la saison inaugurale — AUL (football) et AUFL (football américain)." },
  { year: "2025", title: "Expansion & Partenariats", description: "Signature des premiers partenariats officiels et intégration de nouvelles universités à travers l'Afrique." },
  { year: "2026", title: "Playoffs à Kigali", description: "La grande finale se joue au Kigali Pelé Stadium — point culminant d'une saison historique pour le sport universitaire africain." },
];

const team = [
  { name: "Ahmadou Wathie", role: "Fondateur & Président", flag: "🇸🇳" },
  { name: "Direction Sportive", role: "Opérations AUL & AUFL", flag: "⚽" },
  { name: "Relations Universités", role: "Partenariats académiques", flag: "🎓" },
  { name: "Communication", role: "Médias & Digital", flag: "📡" },
];

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        label="Notre Mission"
        title="À Propos de l'AUL / AUFL"
        subtitle="L'African University League (AUL) et l'African University Football League (AUFL) — les premières ligues universitaires africaines de football et football américain."
      />

      <main style={{ backgroundColor: "#fafaf8" }}>

        {/* Mission */}
        <section className="px-5 md:px-12 py-10 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Notre vision</span>
              </div>
              <h2
                className="uppercase leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.02em", color: "#0c0c0a" }}
              >
                La Référence du Sport Universitaire Africain
              </h2>
              <p className="leading-relaxed mb-5 text-base" style={{ color: "#6b6b60" }}>
                L'AUL et l'AUFL sont nées d'un constat simple : l'Afrique regorge de talents extraordinaires sur ses campus universitaires, mais il manquait une plateforme structurée, professionnelle et panafricaine pour les révéler au monde.
              </p>
              <p className="leading-relaxed text-base" style={{ color: "#6b6b60" }}>
                Inspirés par les modèles NCAA, UEFA, BAL et FIFA, nous construisons deux ligues complémentaires qui allient excellence sportive, formation académique et rayonnement continental — pour que les prochains champions africains émergent d'abord sur nos campus.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "8",  label: "Universités membres" },
                { value: "5",  label: "Pays représentés" },
                { value: "2",  label: "Compétitions (AUL + AUFL)" },
                { value: "∞",  label: "Talents à révéler" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 border" style={{ backgroundColor: "#ffffff", borderColor: "#e2e0d8" }}>
                  <div className="leading-none mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: GREEN }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "#6b6b60" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-5 md:px-12 py-10 md:py-20 crosshatch" style={{ backgroundColor: "#0c0c0a" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Ce qui nous guide</span>
            </div>
            <h2 className="uppercase leading-none text-white mb-8 md:mb-14" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em" }}>
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {values.map((v) => (
                <div key={v.title} className="p-6 transition-colors" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="text-2xl mb-4" style={{ color: GOLD }}>{v.icon}</div>
                  <h3 className="uppercase text-white mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", letterSpacing: "0.08em" }}>
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-5 md:px-12 py-10 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Notre parcours</span>
            </div>
            <h2 className="uppercase leading-none mb-14" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
              Histoire & Jalons
            </h2>
            <div className="flex flex-col">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-10 py-8" style={{ borderBottom: i < milestones.length - 1 ? "1px solid #e2e0d8" : "none" }}>
                  <div className="w-20 shrink-0">
                    <span className="leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: GOLD }}>{m.year}</span>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-3 h-3 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: GOLD, opacity: i === milestones.length - 1 ? 1 : 0.5 }} />
                    <div>
                      <h3 className="uppercase mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", letterSpacing: "0.06em", color: "#0c0c0a" }}>
                        {m.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b6b60" }}>{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-5 md:px-12 py-10 md:py-20" style={{ backgroundColor: "#f0efe9", borderTop: "1px solid #e2e0d8" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Derrière la ligue</span>
            </div>
            <h2 className="uppercase leading-none mb-8 md:mb-14" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
              L&apos;Équipe
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((member) => (
                <div key={member.name} className="p-6 border" style={{ backgroundColor: "#ffffff", borderColor: "#e2e0d8" }}>
                  <div className="text-3xl mb-4">{member.flag}</div>
                  <h3 className="uppercase mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.06em", color: "#0c0c0a" }}>
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: "#6b6b60" }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
