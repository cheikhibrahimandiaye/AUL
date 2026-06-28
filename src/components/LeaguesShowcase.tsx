"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GOLD = "#c5a059";

type Bi = { fr: string; en: string };

interface LeagueCard {
  key: string;
  label: string;
  href: string;
  logo: string;
  color: string;
  sport: Bi;
  tagline: Bi;
  status: Bi;
}

const AUBL: LeagueCard = {
  key: "aubl",
  label: "AUBL",
  href: "/aubl",
  logo: "/logo-aubl.jpg",
  color: "#3b82f6",
  sport: { fr: "Basketball Masculin", en: "Men's Basketball" },
  tagline: {
    fr: "L'élite du basketball universitaire masculin africain. Saison inaugurale 2027 — les candidatures sont ouvertes.",
    en: "The elite of African men's university basketball. Inaugural 2027 season — applications are open.",
  },
  status: { fr: "Saison inaugurale 2027", en: "Inaugural Season 2027" },
};

const OTHERS: LeagueCard[] = [
  {
    key: "aufl",
    label: "AUFL",
    href: "/aufl",
    logo: "/logo-aul.jpg",
    color: GOLD,
    sport: { fr: "Football", en: "Football" },
    tagline: { fr: "6 universités, 5 pays, une championne.", en: "6 universities, 5 countries, one champion." },
    status: { fr: "Saison 2027", en: "Season 2027" },
  },
  {
    key: "awbl",
    label: "AWBL",
    href: "/awbl",
    logo: "/logo-awbl.jpg",
    color: "#a855f7",
    sport: { fr: "Basketball Féminin", en: "Women's Basketball" },
    tagline: { fr: "Le basketball féminin universitaire prend son envol.", en: "University women's basketball takes off." },
    status: { fr: "Saison inaugurale 2027", en: "Inaugural Season 2027" },
  },
];

export default function LeaguesShowcase() {
  const { lang } = useLang();
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="nos-ligues" className="px-5 md:px-12 py-12 md:py-20 scroll-mt-20" style={{ backgroundColor: "#fafaf8", borderTop: "1px solid #e2e0d8" }}>
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
                {lang === "fr" ? "Trois ligues, une plateforme" : "Three leagues, one platform"}
              </span>
            </div>
            <h2 className="uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3rem)", letterSpacing: "0.04em", color: "#0c0c0a" }}>
              {lang === "fr" ? "Choisissez votre Ligue" : "Choose your League"}
            </h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b6b60" }}>
            {lang === "fr"
              ? "L'African University League chapeaute trois compétitions d'élite à travers le continent."
              : "The African University League oversees three elite competitions across the continent."}
          </p>
        </div>

        <div ref={gridRef} className="reveal reveal-zoom grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* AUBL — dominant featured card (spans 2 columns on desktop) */}
          <Link
            href={AUBL.href}
            className="group relative lg:col-span-2 flex flex-col justify-end overflow-hidden min-h-[360px] md:min-h-[420px] transition-transform duration-300 hover:-translate-y-1"
            style={{ backgroundColor: "#0c0c0a", border: `1px solid ${AUBL.color}` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-aubl.jpg"
              alt={AUBL.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ opacity: 0.55, objectPosition: "center 30%" }}
            />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, #0c0c0a 4%, rgba(12,12,10,0.7) 35%, rgba(59,130,246,0.15) 75%, transparent 100%)` }} />
            {/* Featured ribbon */}
            <div className="absolute top-0 left-0 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em]" style={{ backgroundColor: AUBL.color, color: "#ffffff" }}>
              {lang === "fr" ? "À la une" : "Featured"}
            </div>

            <div className="relative z-10 p-7 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white" style={{ border: `2px solid ${AUBL.color}` }}>
                  <Image src={AUBL.logo} alt={AUBL.label} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", letterSpacing: "0.05em" }}>
                    {AUBL.label}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] mt-1" style={{ color: AUBL.color }}>
                    {AUBL.sport[lang]} · {AUBL.status[lang]}
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>
                {AUBL.tagline[lang]}
              </p>
              <span className="inline-flex items-center gap-3 px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors" style={{ backgroundColor: AUBL.color, color: "#ffffff" }}>
                {lang === "fr" ? "Découvrir l'AUBL" : "Discover the AUBL"}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* AUFL + AWBL — secondary stacked cards */}
          <div className="flex flex-col gap-5">
            {OTHERS.map((l) => (
              <Link
                key={l.key}
                href={l.href}
                className="group flex-1 flex items-center gap-4 p-5 md:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "#ffffff", border: "1px solid #e2e0d8" }}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-white" style={{ border: `2px solid ${l.color}` }}>
                  <Image src={l.logo} alt={l.label} width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
                      {l.label}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: l.color }}>
                      {l.sport[lang]}
                    </span>
                  </div>
                  <p className="text-xs leading-snug mt-1.5" style={{ color: "#6b6b60" }}>
                    {l.tagline[lang]}
                  </p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={l.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
