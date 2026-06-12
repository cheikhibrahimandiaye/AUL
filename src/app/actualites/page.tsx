"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const categories = {
  fr: ["Tous", "AUL", "AUFL", "AUBL", "AWBL", "Universités", "Histoire"],
  en: ["All",  "AUL", "AUFL", "AUBL", "AWBL", "Universities", "History"],
};

const articles = [
  {
    id: "ahmadou-wathie-fondateur-aul",
    tag: "AUL",
    title: {
      fr: "Ahmadou Wathie : « L'Afrique a le plus grand vivier de talents sportifs au monde »",
      en: "Ahmadou Wathie: « Africa has the largest pool of sports talent in the world »",
    },
    excerpt: {
      fr: "Fondateur et Président de l'African University League, Ahmadou Wathie revient sur la genèse de l'AUL, sa vision pour le sport universitaire africain, et l'ambition continentale qui anime les trois ligues — AUFL, AUBL et AWBL.",
      en: "Founder and President of the African University League, Ahmadou Wathie looks back at the origins of the AUL, his vision for African university sport, and the continental ambition driving all three leagues — AUFL, AUBL and AWBL.",
    },
    date: "1 Juin 2025",
    readTime: { fr: "6 min", en: "6 min" },
    imageSrc: "/ahmadou-wathie.jpg",
    featured: true,
  },
  {
    id: "aufl-2027-presentation",
    tag: "AUFL",
    title: {
      fr: "AUFL 2027 : 6 universités, 5 pays, une seule championne",
      en: "AUFL 2027: 6 universities, 5 countries, one champion",
    },
    excerpt: {
      fr: "La Ligue Africaine de Football Universitaire lance son édition inaugurale en mars 2027 à Dakar. Présentation des universités participantes et du format officiel de la compétition.",
      en: "The African University Football League launches its inaugural edition in March 2027 in Dakar. Meet the participating universities and the official competition format.",
    },
    date: "15 Jan 2027",
    readTime: { fr: "4 min", en: "4 min" },
    imageSrc: "/photo-aufl-2027.jpg",
    featured: false,
  },
  {
    id: "aubl-saison-2027",
    tag: "AUBL",
    title: {
      fr: "L'AUBL annonce sa saison inaugurale — les candidatures sont ouvertes",
      en: "AUBL announces its inaugural season — applications are open",
    },
    excerpt: {
      fr: "La Ligue Africaine de Basketball Universitaire ouvre ses portes pour la saison 2027. Douze universités ont déjà manifesté leur intérêt depuis 8 pays africains.",
      en: "The African University Basketball League opens its doors for the 2027 season. Twelve universities from 8 African countries have already expressed interest.",
    },
    date: "1 Jun 2026",
    readTime: { fr: "3 min", en: "3 min" },
    imageSrc: "/photo-aubl-article.jpg",
    featured: false,
  },
  {
    id: "aul-ifl-partenariat",
    tag: "AUFL",
    title: {
      fr: "AUL × IFL : quand le football universitaire sénégalais s'organise pour conquérir l'Afrique",
      en: "AUL × IFL: how Senegalese university football is organising to conquer Africa",
    },
    excerpt: {
      fr: "L'AUL et l'Institut Football League (IFL) s'allient. 24 équipes, un format inspiré de la Ligue des Champions, des terrains à Dakar et Thiès — le modèle IFL préfigure l'AUFL continental.",
      en: "AUL and the Institut Football League (IFL) join forces. 24 teams, a Champions League-inspired format, venues across Dakar and Thiès — the IFL model foreshadows the continental AUFL.",
    },
    date: "1 Jan 2026",
    readTime: { fr: "5 min", en: "5 min" },
    imageSrc: "/photo-football-league.jpg",
    featured: false,
  },
  {
    id: "format-aufl-reglement",
    tag: "AUFL",
    title: {
      fr: "Le règlement officiel de l'AUFL — tout ce que vous devez savoir",
      en: "The official AUFL rulebook — everything you need to know",
    },
    excerpt: {
      fr: "Phase de groupes, demi-finales, finale : le format complet de l'AUFL 2027 expliqué. Éligibilité des joueurs, système de points, protocoles d'avant-match.",
      en: "Group stage, semi-finals, final: the full AUFL 2027 format explained. Player eligibility, points system, pre-match protocols.",
    },
    date: "1 Fév 2027",
    readTime: { fr: "7 min", en: "7 min" },
    imageSrc: "/logo-aul.jpg",
    featured: false,
  },
  {
    id: "awbl-saison-2027",
    tag: "AWBL",
    title: {
      fr: "L'AWBL ouvre ses candidatures — le basketball féminin universitaire africain prend son envol",
      en: "AWBL opens applications — African university women's basketball takes off",
    },
    excerpt: {
      fr: "La Ligue Africaine de Basketball Féminin Universitaire annonce sa saison inaugurale 2027. Une opportunité historique pour les joueuses des universités africaines.",
      en: "The African University Women's Basketball League announces its inaugural 2027 season. A historic opportunity for female athletes at African universities.",
    },
    date: "1 Jun 2026",
    readTime: { fr: "3 min", en: "3 min" },
    imageSrc: "/photo-awbl-article.jpg",
    featured: false,
  },
  {
    id: "dakar-ville-hote",
    tag: "AUFL",
    title: {
      fr: "Dakar, ville hôte de l'AUFL 2027 — le Stade L.S. Senghor au cœur de l'histoire",
      en: "Dakar, host city of AUFL 2027 — Stade L.S. Senghor at the heart of history",
    },
    excerpt: {
      fr: "Le Sénégal accueille l'édition inaugurale de la Ligue Africaine de Football Universitaire. Retour sur le choix de Dakar, capitale du sport universitaire africain.",
      en: "Senegal hosts the inaugural edition of the African University Football League. A look back at the choice of Dakar as the capital of African university sport.",
    },
    date: "20 Jan 2027",
    readTime: { fr: "4 min", en: "4 min" },
    imageSrc: "/photo-dakar.jpg",
    featured: false,
  },
];

export default function ActualitesPage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState(0);

  const cats = categories[lang];
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  const label = lang === "fr" ? "Médias & Actualités" : "Media & News";
  const title = lang === "fr" ? "Actualités" : "News";
  const subtitle = lang === "fr"
    ? "Annonces officielles, partenariats et coulisses de la préparation de la saison inaugurale 2027 — AUFL, AUBL et AWBL."
    : "Official announcements, partnerships and behind-the-scenes of the inaugural 2027 season — AUFL, AUBL and AWBL.";
  const readLabel = lang === "fr" ? "de lecture" : "read";
  const featuredLabel = lang === "fr" ? "À la une" : "Featured";

  return (
    <>
      <Navbar />
      <PageHeader label={label} title={title} subtitle={subtitle} />

      <main className="px-5 md:px-12 py-10 md:py-16" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">

          {/* Category filters */}
          <div className="flex items-center gap-2 mb-8 md:mb-12 overflow-x-auto pb-2">
            {cats.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className="shrink-0 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] border transition-colors cursor-pointer"
                style={activeCategory === i
                  ? { backgroundColor: "#043927", borderColor: "#043927", color: "#ffffff" }
                  : { borderColor: "#e2e0d8", color: "#6b6b60", backgroundColor: "transparent" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          <Link href={`/actualites/${featured.id}`} className="block group mb-8 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 border overflow-hidden transition-colors" style={{ borderColor: "#e2e0d8" }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.imageSrc} alt={featured.title[lang]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center" style={{ backgroundColor: "#ffffff" }}>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <span className="block w-6 h-[2px]" style={{ backgroundColor: "#c5a059" }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: "#c5a059" }}>
                    {featuredLabel} · {featured.tag}
                  </span>
                </div>
                <h2
                  className="uppercase leading-tight mb-3 md:mb-4 transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 1.8rem)", letterSpacing: "0.03em", color: "#0c0c0a" }}
                >
                  {featured.title[lang]}
                </h2>
                <p className="text-sm leading-relaxed mb-4 md:mb-6" style={{ color: "#6b6b60" }}>
                  {featured.excerpt[lang]}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6b6b60" }}>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime[lang]} {readLabel}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {rest.map((article) => (
              <Link key={article.id} href={`/actualites/${article.id}`} className="group flex flex-col border overflow-hidden transition-colors" style={{ borderColor: "#e2e0d8", backgroundColor: "#ffffff" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.imageSrc} alt={article.title[lang]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.18em]" style={{ color: "#c5a059" }}>{article.tag}</span>
                  </div>
                  <h3
                    className="uppercase leading-tight mb-3 flex-1 transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.03em", color: "#0c0c0a" }}
                  >
                    {article.title[lang]}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest mt-auto pt-3" style={{ borderTop: "1px solid #e2e0d8", color: "#6b6b60" }}>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime[lang]}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
