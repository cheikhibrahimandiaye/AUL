"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const BLUE = "#3b82f6";
const DARK = "#0c0c0a";

const eligibility: { fr: string; en: string }[] = [
  { fr: "Inscrit à temps plein dans une université membre", en: "Enrolled full-time at a member university" },
  { fr: "Moins de 25 ans au début de la saison", en: "Under 25 at the start of the season" },
  { fr: "GPA minimum de 2.5/4.0 ou équivalent", en: "Minimum GPA of 2.5/4.0 or equivalent" },
];

export default function AublSpotlight() {
  const { lang } = useLang();

  return (
    <div className="w-full lg:w-1/3">
      <div className="flex justify-between items-end mb-8 pb-4" style={{ borderBottom: "1px solid #e2e0d8" }}>
        <div>
          <span className="mb-3 w-10 inline-block h-[3px]" style={{ backgroundColor: BLUE }} />
          <h2 className="leading-none uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: DARK }}>
            {lang === "fr" ? "L'AUBL" : "The AUBL"}
          </h2>
          <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: BLUE }}>
            {lang === "fr" ? "Basketball · Saison inaugurale 2027" : "Basketball · Inaugural Season 2027"}
          </p>
        </div>
        <Link href="/aubl" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "#6b6b60" }}>
          {lang === "fr" ? "La ligue" : "The league"}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      {/* Visual card */}
      <Link href="/aubl" className="group relative block overflow-hidden mb-6" style={{ aspectRatio: "16/10", backgroundColor: DARK }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-aubl.jpg" alt="AUBL" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ opacity: 0.6, objectPosition: "center 30%" }} />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${DARK} 8%, rgba(59,130,246,0.2) 70%, transparent 100%)` }} />
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 bg-white" style={{ border: `2px solid ${BLUE}` }}>
            <Image src="/logo-aubl.jpg" alt="AUBL" width={44} height={44} className="w-full h-full object-cover" />
          </div>
          <div className="text-white uppercase leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.04em" }}>
            {lang === "fr" ? "Candidatures ouvertes" : "Applications open"}
          </div>
        </div>
      </Link>

      {/* Eligibility */}
      <div className="text-[10px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: "#6b6b60" }}>
        {lang === "fr" ? "Critères d'éligibilité" : "Eligibility criteria"}
      </div>
      <ul className="flex flex-col gap-2.5 mb-7">
        {eligibility.map((e) => (
          <li key={e.fr} className="flex items-start gap-3 text-sm leading-snug" style={{ color: "#3a3a35" }}>
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: BLUE }} />
            {e[lang]}
          </li>
        ))}
      </ul>

      <Link
        href="/contact?sujet=universite#contact-form"
        className="flex items-center justify-center gap-2 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
        style={{ backgroundColor: BLUE, color: "#ffffff" }}
      >
        {lang === "fr" ? "Inscrire mon université" : "Register my university"}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
