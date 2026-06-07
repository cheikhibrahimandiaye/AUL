import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const GOLD = "#c5a059";
const GREEN = "#043927";

const values = [
  { icon: "◈", title: "Excellence", description: "Des compétitions d'élite professionnelles à l'échelle nationale et continentale, répondant aux plus hauts standards d'intégrité sportive." },
  { icon: "◇", title: "Unité Panafricaine", description: "54 pays, une plateforme. L'AUL connecte les universités africaines à travers le sport, bâtissant des ponts entre cultures et nations." },
  { icon: "◉", title: "Formation", description: "Excellence académique et sportive indissociables. Chaque joueur doit être étudiant régulier — le campus et le terrain sont un même terrain de développement." },
  { icon: "◆", title: "Médias & Visibilité", description: "Une couverture médiatique premium qui forge la marque des athlètes, attire les recruteurs et exporte les talents africains sur la scène mondiale." },
];

const milestones = [
  { year: "2025", title: "Fondation de l'AUL", description: "Ahmadou Wathie fonde l'African University League à Dakar, Sénégal — première plateforme continentale de sports universitaires africains. Lancement de la Phase 1 : Sénégal & Afrique de l'Ouest." },
  { year: "2027", title: "AUFL — Édition Inaugurale", description: "6 universités de 5 pays s'affrontent à Dakar pour la première édition de la Ligue Africaine de Football Universitaire. Le Stade Léopold S. Senghor accueille les matchs en mars 2027." },
  { year: "2028", title: "Lancement AUBL & AWBL", description: "La Ligue Africaine de Basketball Universitaire (masculin et féminin) complète le triptyque sportif de l'AUL, avec l'ambition d'un Final Four continental." },
  { year: "2028–2032", title: "Phase 2 — Expansion continentale", description: "Extension à l'Afrique du Nord et de l'Est, accords de diffusion panafricains, 50+ universités membres, lancement d'AUL Médias." },
  { year: "2033–2040", title: "Phase 3 — Empreinte panafricaine", description: "54 pays, championnats panafricains dans chaque discipline, objectif +50 M$ de revenus annuels. L'AUL devient l'institution sportive universitaire de référence du continent." },
];

const team = [
  { name: "Ahmadou Wathie", role: "Fondateur & Président — AUL", flag: "🇸🇳" },
  { name: "Direction Sportive", role: "Opérations AUFL · AUBL · AWBL", flag: "🇸🇳" },
  { name: "Relations Universités", role: "Partenariats académiques & Inscription", flag: "🇸🇳" },
  { name: "Communication", role: "Médias, Digital & Production", flag: "🇸🇳" },
];

export default function AProposPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        label="Notre Mission"
        title="À Propos de l'AUL"
        subtitle="L'African University League (AUL) est l'organisme qui chapeaute trois ligues : l'AUFL (football), l'AUBL (basketball masculin) et l'AWBL (basketball féminin)."
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
                L'Afrique compte plus de 1 700 universités et 10 millions d'étudiants inscrits dans 54 pays — le plus grand vivier de jeunes talents sportifs au monde, jusqu'ici sans plateforme structurée à l'échelle continentale. L'AUL comble ce vide.
              </p>
              <p className="leading-relaxed text-base" style={{ color: "#6b6b60" }}>
                Fondée à Dakar par Ahmadou Wathie, l'AUL organise des compétitions d'élite, produit du contenu médiatique premium, crée des voies concrètes vers le sport professionnel, et construit un écosystème numérique qui amplifie le sport universitaire africain à l'échelle mondiale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "6",    label: "Universités membres AUFL" },
                { value: "5",    label: "Pays représentés" },
                { value: "3",    label: "Ligues (AUFL · AUBL · AWBL)" },
                { value: "10M+", label: "Étudiants universitaires en Afrique" },
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
