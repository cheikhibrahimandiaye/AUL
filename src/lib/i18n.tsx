"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";

export type Lang = "fr" | "en";
export type TranslationKey = keyof typeof translations.fr;

/* ── Translations ───────────────────────────────────────────────── */
const translations = {
  fr: {
    nav_home: "Accueil",
    nav_calendar: "Calendrier",
    nav_standings: "Classement",
    nav_universities: "Universités",
    nav_news: "Actualités",
    nav_about: "À Propos",
    nav_partner: "Devenir Partenaire",
    hero_tag: "African University Football League",
    hero_title: "L'Avenir du Sport Universitaire Africain",
    hero_desc: "L'AUFL redéfinit le sport universitaire en Afrique — compétition d'élite, scouting, innovation et opportunités pour les athlètes-étudiants du continent.",
    hero_cta: "Découvrir la Saison 2026",
    hero_secondary: "Voir les actualités →",
    hero_season: "Saison 2026",
    ticker_label: "Résultats",
    news_title: "Actualités",
    news_more: "Tout voir",
    standings_title: "Classement",
    standings_season: "AUFL · Saison 2026",
    standings_full: "Classement Complet",
    standings_see_all: "Voir tout",
    schedule_title: "Prochains Matchs",
    schedule_more: "Calendrier complet",
    videos_title: "Vidéos à la Une",
    videos_more: "Plus de vidéos",
    video_featured: "Vidéo vedette",
    partners_label: "Partenaires Officiels",
    cta_tag: "Rejoignez l'AUFL",
    cta_title: "Bâtissons l'Avenir du Sport Universitaire Africain",
    cta_desc: "L'AUFL ouvre ses portes aux universités africaines qui partagent notre vision : élever les standards, révéler les talents et créer des trajectoires vers le haut niveau. Candidatures ouvertes pour la saison 2027.",
    cta_apply: "Rejoindre la Ligue",
    cta_contact: "Nous Contacter",
    footer_tagline: "Redefining university football in Africa through competition, innovation, education, and opportunity.",
    footer_league: "Ligue",
    footer_competitions: "Compétitions",
    footer_universities: "Universités",
    footer_media: "Médias",
    footer_newsletter: "Newsletter",
    footer_newsletter_desc: "Résultats, analyses et actualités directement dans votre boîte mail.",
    footer_newsletter_placeholder: "votre@email.com",
    footer_rights: "Tous droits réservés.",
    footer_founded: "Fondé par Ahmadou Wathie.",
    footer_legal: "Mentions légales",
    footer_privacy: "Politique de confidentialité",
    footer_faq: "FAQ",
    page_calendar_label: "Saison 2026",
    page_calendar_title: "Calendrier",
    page_calendar_subtitle: "Tous les matchs de la saison 2026 — phases de groupes, demi-finales et finale de l'AUL (football) et de l'AUFL (football américain).",
    page_standings_label: "Saison 2026",
    page_standings_title: "Classement",
    page_news_label: "Médias & Actualités",
    page_news_title: "Actualités",
    page_universities_label: "Saison 2026",
    page_universities_title: "Universités",
    page_about_label: "Notre Mission",
    page_about_title: "À Propos de l'AUL / AUFL",
    page_contact_label: "Rejoignez l'AUFL",
    page_contact_title: "Contact & Partenariat",
  },
  en: {
    nav_home: "Home",
    nav_calendar: "Schedule",
    nav_standings: "Standings",
    nav_universities: "Universities",
    nav_news: "News",
    nav_about: "About",
    nav_partner: "Become a Partner",
    hero_tag: "African University Football League",
    hero_title: "The Future of African University Sport",
    hero_desc: "The AUFL is redefining university sport across Africa — elite competition, scouting, innovation, and real opportunities for student-athletes across the continent.",
    hero_cta: "Explore the 2026 Season",
    hero_secondary: "View news →",
    hero_season: "Season 2026",
    ticker_label: "Results",
    news_title: "Latest News",
    news_more: "View all",
    standings_title: "Standings",
    standings_season: "AUFL · Season 2026",
    standings_full: "Full Standings",
    standings_see_all: "See all",
    schedule_title: "Upcoming Matches",
    schedule_more: "Full schedule",
    videos_title: "Featured Videos",
    videos_more: "More videos",
    video_featured: "Featured video",
    partners_label: "Official Partners",
    cta_tag: "Join the AUFL",
    cta_title: "Build the Future of African University Sport",
    cta_desc: "The AUFL is open to African universities that share our vision: raising standards, uncovering talent, and creating pathways to the next level. Applications open for the 2027 season.",
    cta_apply: "Join the League",
    cta_contact: "Contact Us",
    footer_tagline: "Redefining university football in Africa through competition, innovation, education, and opportunity.",
    footer_league: "League",
    footer_competitions: "Competitions",
    footer_universities: "Universities",
    footer_media: "Media",
    footer_newsletter: "Newsletter",
    footer_newsletter_desc: "Results, analysis and news straight to your inbox.",
    footer_newsletter_placeholder: "your@email.com",
    footer_rights: "All rights reserved.",
    footer_founded: "Founded by Ahmadou Wathie.",
    footer_legal: "Legal Notice",
    footer_privacy: "Privacy Policy",
    footer_faq: "FAQ",
    page_calendar_label: "Season 2026",
    page_calendar_title: "Schedule",
    page_calendar_subtitle: "All 2026 season fixtures — group stage, semi-finals and finals for AUL (football) and AUFL (American football).",
    page_standings_label: "Season 2026",
    page_standings_title: "Standings",
    page_news_label: "Media & News",
    page_news_title: "News",
    page_universities_label: "Season 2026",
    page_universities_title: "Universities",
    page_about_label: "Our Mission",
    page_about_title: "About AUL / AUFL",
    page_contact_label: "Join the AUL",
    page_contact_title: "Contact & Partnership",
  },
} as const;

/* ── Context ────────────────────────────────────────────────────── */
const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
}>({
  lang: "fr",
  setLang: () => {},
  t: (key) => translations.fr[key],
});

/* ── Provider — must wrap the app ───────────────────────────────── */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("aul-lang") as Lang | null;
    if (stored === "en" || stored === "fr") {
      setLangState(stored);
    }
  }, []);

  function setLang(l: Lang) {
    localStorage.setItem("aul-lang", l);
    setLangState(l);
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: (key) => translations[lang][key] }}>
      {children}
    </LangContext.Provider>
  );
}

/* ── Hook ───────────────────────────────────────────────────────── */
export function useLang() {
  return useContext(LangContext);
}
