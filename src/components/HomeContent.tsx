"use client";

import { useLang } from "@/lib/i18n";
import NewsSection from "@/components/NewsSection";
import AublSpotlight from "@/components/AublSpotlight";

export default function HomeContent() {
  const { lang } = useLang();

  const featuredArticle = {
    id: "aubl-saison-2027",
    title: lang === "en"
      ? "AUBL announces its inaugural season — applications are open"
      : "L'AUBL annonce sa saison inaugurale — les candidatures sont ouvertes",
    date: "1 Juin 2026",
    imageSrc: "/photo-aubl-article.jpg",
    imageAlt: "AUBL 2027",
    href: "/actualites/aubl-saison-2027",
    tag: "AUBL",
  };

  const secondaryArticles = [
    {
      id: "ahmadou-wathie-fondateur-aul",
      title: lang === "en"
        ? "Ahmadou Wathie: « Africa has the largest pool of sports talent in the world »"
        : "Ahmadou Wathie : « L'Afrique a le plus grand vivier de talents sportifs au monde »",
      date: "1 Juin 2025",
      imageSrc: "/ahmadou-wathie.jpg",
      imageAlt: lang === "en" ? "Ahmadou Wathie, AUL Founder" : "Ahmadou Wathie, Fondateur de l'AUL",
      href: "/actualites/ahmadou-wathie-fondateur-aul",
      tag: "AUL",
    },
    {
      id: "awbl-saison-2027",
      title: lang === "en"
        ? "AWBL opens applications — African university women's basketball takes off"
        : "L'AWBL ouvre ses candidatures — le basketball féminin universitaire africain prend son envol",
      date: "1 Juin 2026",
      imageSrc: "/photo-awbl-article.jpg",
      imageAlt: "AWBL 2027",
      href: "/actualites/awbl-saison-2027",
      tag: "AWBL",
    },
    {
      id: "aufl-2027-presentation",
      title: lang === "en"
        ? "AUFL 2027: 6 universities, 5 countries, one champion"
        : "AUFL 2027 : 6 universités, 5 pays, une seule championne",
      date: "15 Jan 2027",
      imageSrc: "/photo-aufl-2027.jpg",
      imageAlt: "AUFL 2027",
      href: "/actualites/aufl-2027-presentation",
      tag: "AUFL",
    },
  ];

  return (
    <main className="px-5 md:px-12 py-10 md:py-20 flex flex-col lg:flex-row gap-8 md:gap-12" style={{ backgroundColor: "#fafaf8" }}>
      <NewsSection featured={featuredArticle} secondary={secondaryArticles} />
      <AublSpotlight />
    </main>
  );
}
