"use client";

import { useLang } from "@/lib/i18n";
import NewsSection from "@/components/NewsSection";
import StandingsWidget from "@/components/StandingsWidget";

const IMG = {
  article1: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
  article2: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
  article3: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  article4: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
};

const standingsData = [
  { rank: 1, university: "Univ. Cheikh Anta Diop", university_en: "Univ. Cheikh Anta Diop", wins: 5, losses: 0 },
  { rank: 2, university: "Univ. de Thiès",          university_en: "Univ. de Thiès",          wins: 4, losses: 1 },
  { rank: 3, university: "Univ. de Cape Town",      university_en: "Univ. de Cape Town",      wins: 2, losses: 3 },
  { rank: 4, university: "Univ. de Gambie",         university_en: "Univ. de Gambie",         wins: 1, losses: 4 },
  { rank: 5, university: "Univ. Félix H-B",         university_en: "Univ. Félix H-B",         wins: 1, losses: 4 },
  { rank: 6, university: "Univ. Thomas Sankara",    university_en: "Univ. Thomas Sankara",    wins: 0, losses: 5 },
];

export default function HomeContent() {
  const { lang } = useLang();

  const featuredArticle = {
    id: "ahmadou-wathie-fondateur-aul",
    title: lang === "en"
      ? "Ahmadou Wathie: « Africa has the largest pool of sports talent in the world »"
      : "Ahmadou Wathie : « L'Afrique a le plus grand vivier de talents sportifs au monde »",
    date: "1 Juin 2025",
    imageSrc: "/ahmadou-wathie.jpg",
    imageAlt: lang === "en" ? "Ahmadou Wathie, AUL Founder" : "Ahmadou Wathie, Fondateur de l'AUL",
    href: "/actualites/ahmadou-wathie-fondateur-aul",
    tag: "AUL",
  };

  const secondaryArticles = [
    {
      id: "aufl-2027-presentation",
      title: lang === "en"
        ? "AUFL 2027: 6 universities, 5 countries, one champion"
        : "AUFL 2027 : 6 universités, 5 pays, une seule championne",
      date: "15 Jan 2027",
      imageSrc: "/logo-aul.jpg",
      imageAlt: "AUFL 2027",
      href: "/actualites/aufl-2027-presentation",
      tag: "AUFL",
    },
    {
      id: "ucad-favori-aufl",
      title: lang === "en"
        ? "Univ. Cheikh Anta Diop, top favourite of AUFL 2027"
        : "L'Univ. Cheikh Anta Diop, grande favorite de l'AUFL 2027",
      date: "18 Mar 2027",
      imageSrc: "/logo-aul.jpg",
      imageAlt: lang === "en" ? "UCAD AUFL 2027" : "UCAD AUFL 2027",
      href: "/actualites/ucad-favori-aufl",
      tag: "Universités",
    },
    {
      id: "dakar-ville-hote",
      title: lang === "en"
        ? "Dakar, host city of AUFL 2027 — Stade L.S. Senghor at the heart of history"
        : "Dakar, ville hôte de l'AUFL 2027 — le Stade L.S. Senghor au cœur de l'histoire",
      date: "20 Jan 2027",
      imageSrc: "/logo-aul.jpg",
      imageAlt: "Dakar AUFL 2027",
      href: "/actualites/dakar-ville-hote",
      tag: "AUFL",
    },
  ];

  const standings = standingsData.map((s) => ({
    rank: s.rank,
    university: lang === "en" ? s.university_en : s.university,
    wins: s.wins,
    losses: s.losses,
  }));

  return (
    <main className="px-5 md:px-12 py-10 md:py-20 flex flex-col lg:flex-row gap-8 md:gap-12" style={{ backgroundColor: "#fafaf8" }}>
      <NewsSection featured={featuredArticle} secondary={secondaryArticles} />
      <StandingsWidget standings={standings} />
    </main>
  );
}
