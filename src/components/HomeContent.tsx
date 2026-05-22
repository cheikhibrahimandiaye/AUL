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
  { rank: 1, university: "Univ. de Dakar",   university_en: "Univ. of Dakar",   wins: 14, losses: 2 },
  { rank: 2, university: "Univ. de Nairobi", university_en: "Univ. of Nairobi", wins: 12, losses: 4 },
  { rank: 3, university: "Univ. du Caire",   university_en: "Univ. of Cairo",   wins: 11, losses: 5 },
  { rank: 4, university: "Univ. de Lagos",   university_en: "Univ. of Lagos",   wins: 10, losses: 6 },
  { rank: 5, university: "Univ. d'Accra",    university_en: "Univ. of Accra",   wins: 9,  losses: 7 },
  { rank: 6, university: "Univ. de Tunis",   university_en: "Univ. of Tunis",   wins: 8,  losses: 8 },
];

export default function HomeContent() {
  const { lang } = useLang();

  const featuredArticle = {
    id: "playoffs-2026-singularite",
    title: lang === "en"
      ? "The uniqueness of each team heading into the 2026 AUFL Playoffs"
      : "La singularité de chaque équipe abordant les Playoffs AUFL 2026",
    date: "18 Mai 2026",
    imageSrc: IMG.article1,
    imageAlt: lang === "en" ? "African university football players in action" : "Joueurs de football universitaire africain en action",
    href: "/actualites/playoffs-2026-singularite",
    tag: "Playoffs",
  };

  const secondaryArticles = [
    {
      id: "stats-leaders",
      title: lang === "en"
        ? "Teams leading the statistical rankings ahead of the Playoffs"
        : "Les équipes en tête des classements statistiques avant les Playoffs",
      date: "16 Mai 2026",
      imageSrc: IMG.article2,
      imageAlt: lang === "en" ? "AUFL match" : "Match AUFL",
      href: "/actualites/classements-statistiques",
      tag: "Statistiques",
    },
    {
      id: "histoire-finales",
      title: lang === "en"
        ? "Finals decided in the last seconds — the history of the AUFL"
        : "Les finales décidées dans les dernières secondes — l'histoire de l'AUFL",
      date: "14 Mai 2026",
      imageSrc: IMG.article3,
      imageAlt: lang === "en" ? "Historic AUFL moment" : "Moment historique AUFL",
      href: "/actualites/histoire-finales",
      tag: "Histoire",
    },
    {
      id: "brackets-playoffs",
      title: lang === "en"
        ? "Standings and brackets: everything about the 2026 Playoffs"
        : "Classements et brackets : tout savoir sur les Playoffs 2026",
      date: "13 Mai 2026",
      imageSrc: IMG.article4,
      imageAlt: lang === "en" ? "2026 AUFL Playoffs Brackets" : "Brackets Playoffs AUFL 2026",
      href: "/actualites/brackets-playoffs",
      tag: "Playoffs",
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
