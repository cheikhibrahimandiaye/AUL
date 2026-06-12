"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";
const GREEN = "#043927";

type Bi = { fr: string; en: string };

const values: { num: string; title: Bi; description: Bi; icon: React.ReactNode }[] = [
  {
    num: "01",
    title: { fr: "Excellence", en: "Excellence" },
    description: {
      fr: "Des compétitions d'élite professionnelles à l'échelle nationale et continentale, répondant aux plus hauts standards d'intégrité sportive.",
      en: "Professional elite competitions at national and continental scale, meeting the highest standards of sporting integrity.",
    },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: { fr: "Unité Panafricaine", en: "Pan-African Unity" },
    description: {
      fr: "54 pays, une plateforme. L'AUL connecte les universités africaines à travers le sport, bâtissant des ponts entre cultures et nations.",
      en: "54 countries, one platform. The AUL connects African universities through sport, building bridges between cultures and nations.",
    },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: { fr: "Formation", en: "Development" },
    description: {
      fr: "Excellence académique et sportive indissociables. Chaque joueur doit être étudiant régulier — le campus et le terrain sont un même terrain de développement.",
      en: "Academic and sporting excellence are inseparable. Every player must be a regular student — campus and pitch are one shared development ground.",
    },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
  },
  {
    num: "04",
    title: { fr: "Médias & Visibilité", en: "Media & Visibility" },
    description: {
      fr: "Une couverture médiatique premium qui forge la marque des athlètes, attire les recruteurs et exporte les talents africains sur la scène mondiale.",
      en: "Premium media coverage that builds athletes' brands, attracts scouts and exports African talent onto the world stage.",
    },
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m22 8-6 4 6 4V8Z" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
];

const milestones: { year: string; title: Bi; description: Bi }[] = [
  {
    year: "2025",
    title: { fr: "Fondation de l'AUL", en: "Founding of the AUL" },
    description: {
      fr: "Ahmadou Wathie fonde l'African University League à Dakar, Sénégal — première plateforme continentale de sports universitaires africains. Lancement de la Phase 1 : Sénégal & Afrique de l'Ouest.",
      en: "Ahmadou Wathie founds the African University League in Dakar, Senegal — the first continental platform for African university sports. Phase 1 launches: Senegal & West Africa.",
    },
  },
  {
    year: "2027",
    title: { fr: "AUFL — Édition Inaugurale", en: "AUFL — Inaugural Edition" },
    description: {
      fr: "6 universités de 5 pays s'affrontent à Dakar pour la première édition de la Ligue Africaine de Football Universitaire. Le Stade Léopold S. Senghor accueille les matchs en mars 2027.",
      en: "6 universities from 5 countries compete in Dakar for the first edition of the African University Football League. Stade Léopold S. Senghor hosts the matches in March 2027.",
    },
  },
  {
    year: "2027",
    title: { fr: "Lancement AUBL & AWBL", en: "AUBL & AWBL Launch" },
    description: {
      fr: "La Ligue Africaine de Basketball Universitaire (masculin et féminin) complète le triptyque sportif de l'AUL, avec l'ambition d'un Final Four continental.",
      en: "The African University Basketball League (men's and women's) completes the AUL's sporting trio, with the ambition of a continental Final Four.",
    },
  },
  {
    year: "2028–2032",
    title: { fr: "Phase 2 — Expansion continentale", en: "Phase 2 — Continental Expansion" },
    description: {
      fr: "Extension à l'Afrique du Nord et de l'Est, accords de diffusion panafricains, 50+ universités membres, lancement d'AUL Médias.",
      en: "Expansion to North and East Africa, pan-African broadcasting deals, 50+ member universities, launch of AUL Media.",
    },
  },
  {
    year: "2033–2040",
    title: { fr: "Phase 3 — Empreinte panafricaine", en: "Phase 3 — Pan-African Footprint" },
    description: {
      fr: "54 pays, championnats panafricains dans chaque discipline, objectif +50 M$ de revenus annuels. L'AUL devient l'institution sportive universitaire de référence du continent.",
      en: "54 countries, pan-African championships in every discipline, targeting $50M+ in annual revenue. The AUL becomes the continent's reference university sports institution.",
    },
  },
];

const team: { name: Bi; role: Bi; monogram: string }[] = [
  { name: { fr: "Ahmadou Wathie", en: "Ahmadou Wathie" }, role: { fr: "Fondateur & Président — AUL", en: "Founder & President — AUL" }, monogram: "AW" },
  { name: { fr: "Direction Sportive", en: "Sporting Direction" }, role: { fr: "Opérations AUFL · AUBL · AWBL", en: "AUFL · AUBL · AWBL Operations" }, monogram: "DS" },
  { name: { fr: "Relations Universités", en: "University Relations" }, role: { fr: "Partenariats académiques & Inscription", en: "Academic partnerships & Registration" }, monogram: "RU" },
  { name: { fr: "Communication", en: "Communications" }, role: { fr: "Médias, Digital & Production", en: "Media, Digital & Production" }, monogram: "CM" },
];

export default function AProposPage() {
  const { lang } = useLang();

  const stats: { value: string; label: Bi }[] = [
    { value: "6", label: { fr: "Universités membres AUFL", en: "AUFL member universities" } },
    { value: "5", label: { fr: "Pays représentés", en: "Countries represented" } },
    { value: "3", label: { fr: "Ligues (AUFL · AUBL · AWBL)", en: "Leagues (AUFL · AUBL · AWBL)" } },
    { value: "10M+", label: { fr: "Étudiants universitaires en Afrique", en: "University students in Africa" } },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        label={lang === "fr" ? "Notre Mission" : "Our Mission"}
        title={lang === "fr" ? "À Propos de l'AUL" : "About the AUL"}
        subtitle={lang === "fr"
          ? "L'African University League (AUL) est l'organisme qui chapeaute trois ligues : l'AUFL (football), l'AUBL (basketball masculin) et l'AWBL (basketball féminin)."
          : "The African University League (AUL) is the umbrella organisation for three leagues: the AUFL (football), the AUBL (men's basketball) and the AWBL (women's basketball)."}
      />

      <main style={{ backgroundColor: "#fafaf8" }}>

        {/* Mission */}
        <section className="px-5 md:px-12 py-10 md:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                  {lang === "fr" ? "Notre vision" : "Our vision"}
                </span>
              </div>
              <h2
                className="uppercase leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.02em", color: "#0c0c0a" }}
              >
                {lang === "fr" ? "La Référence du Sport Universitaire Africain" : "The Reference for African University Sport"}
              </h2>
              <p className="leading-relaxed mb-5 text-base" style={{ color: "#6b6b60" }}>
                {lang === "fr"
                  ? "L'Afrique compte plus de 1 700 universités et 10 millions d'étudiants inscrits dans 54 pays — le plus grand vivier de jeunes talents sportifs au monde, jusqu'ici sans plateforme structurée à l'échelle continentale. L'AUL comble ce vide."
                  : "Africa has more than 1,700 universities and 10 million enrolled students across 54 countries — the largest pool of young sports talent in the world, until now without a structured continental platform. The AUL fills that void."}
              </p>
              <p className="leading-relaxed text-base" style={{ color: "#6b6b60" }}>
                {lang === "fr"
                  ? "Fondée à Dakar par Ahmadou Wathie, l'AUL organise des compétitions d'élite, produit du contenu médiatique premium, crée des voies concrètes vers le sport professionnel, et construit un écosystème numérique qui amplifie le sport universitaire africain à l'échelle mondiale."
                  : "Founded in Dakar by Ahmadou Wathie, the AUL organises elite competitions, produces premium media content, creates concrete pathways to professional sport, and builds a digital ecosystem that amplifies African university sport worldwide."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label.fr} className="p-6 border" style={{ backgroundColor: "#ffffff", borderColor: "#e2e0d8" }}>
                  <div className="leading-none mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "3rem", color: GREEN }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "#6b6b60" }}>{stat.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-5 md:px-12 py-12 md:py-24 crosshatch relative overflow-hidden" style={{ backgroundColor: "#0c0c0a" }}>
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 15% 0%, rgba(197,160,89,0.07) 0%, transparent 60%)" }}
          />
          {/* Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -bottom-10 select-none leading-none hidden md:block"
            style={{ fontFamily: "var(--font-display)", fontSize: "18rem", color: "rgba(255,255,255,0.02)", letterSpacing: "-0.04em" }}
          >
            AUL
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                    {lang === "fr" ? "Ce qui nous guide" : "What guides us"}
                  </span>
                </div>
                <h2 className="uppercase leading-none text-white" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", letterSpacing: "0.04em" }}>
                  {lang === "fr" ? "Nos Valeurs" : "Our Values"}
                </h2>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                {lang === "fr"
                  ? "Quatre piliers qui structurent chaque décision de la ligue, du recrutement des universités à la diffusion des matchs."
                  : "Four pillars that shape every league decision, from university recruitment to match broadcasting."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {values.map((v) => (
                <div
                  key={v.num}
                  className="group relative p-7 md:p-8 transition-colors duration-300 hover:bg-white/[0.03] border-b border-white/[0.08] lg:border-b-0 lg:border-r last:border-b-0 lg:last:border-r-0"
                >
                  {/* Top hover accent */}
                  <span
                    className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: GOLD }}
                  />

                  {/* Index */}
                  <div className="flex items-start justify-between mb-10">
                    <div
                      className="w-12 h-12 flex items-center justify-center transition-colors duration-300"
                      style={{ border: "1px solid rgba(197,160,89,0.35)", color: GOLD }}
                    >
                      {v.icon}
                    </div>
                    <span
                      className="leading-none transition-colors duration-300 group-hover:text-white/20"
                      style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "rgba(255,255,255,0.08)" }}
                    >
                      {v.num}
                    </span>
                  </div>

                  <h3 className="uppercase text-white mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", letterSpacing: "0.07em" }}>
                    {v.title[lang]}
                  </h3>
                  <span className="block w-6 h-[2px] mb-4 transition-all duration-300 group-hover:w-10" style={{ backgroundColor: GOLD, opacity: 0.6 }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>{v.description[lang]}</p>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                {lang === "fr" ? "Notre parcours" : "Our journey"}
              </span>
            </div>
            <h2 className="uppercase leading-none mb-14" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
              {lang === "fr" ? "Histoire & Jalons" : "History & Milestones"}
            </h2>
            <div className="flex flex-col">
              {milestones.map((m, i) => (
                <div key={`${m.year}-${m.title.fr}`} className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-8" style={{ borderBottom: i < milestones.length - 1 ? "1px solid #e2e0d8" : "none" }}>
                  <div className="w-28 shrink-0">
                    <span className="leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: GOLD }}>{m.year}</span>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-3 h-3 rounded-full shrink-0 mt-1.5 hidden sm:block" style={{ backgroundColor: GOLD, opacity: i === milestones.length - 1 ? 1 : 0.5 }} />
                    <div>
                      <h3 className="uppercase mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", letterSpacing: "0.06em", color: "#0c0c0a" }}>
                        {m.title[lang]}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6b6b60" }}>{m.description[lang]}</p>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                {lang === "fr" ? "Derrière la ligue" : "Behind the league"}
              </span>
            </div>
            <h2 className="uppercase leading-none mb-8 md:mb-14" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
              {lang === "fr" ? "L'Équipe" : "The Team"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((member, i) => (
                <div
                  key={member.monogram}
                  className="group p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: i === 0 ? "#0c0c0a" : "#ffffff",
                    borderColor: i === 0 ? GOLD : "#e2e0d8",
                    boxShadow: i === 0 ? "0 16px 40px rgba(12,12,10,0.18)" : "none",
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: i === 0 ? "rgba(197,160,89,0.12)" : "#f5f4ef",
                      border: `1px solid ${i === 0 ? GOLD : "#e2e0d8"}`,
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      letterSpacing: "0.08em",
                      color: GOLD,
                    }}
                  >
                    {member.monogram}
                  </div>
                  <h3 className="uppercase mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.06em", color: i === 0 ? "#ffffff" : "#0c0c0a" }}>
                    {member.name[lang]}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: i === 0 ? "rgba(255,255,255,0.45)" : "#6b6b60" }}>{member.role[lang]}</p>
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
