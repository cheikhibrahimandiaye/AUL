"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";
const GREEN = "#043927";

const IconPlay = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconGrid = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const IconUsers = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export default function QuickLinks() {
  const { lang } = useLang();

  const links = lang === "en"
    ? [
        { href: "/#videos",                                   Icon: IconPlay,  label: "Watch AUL videos and highlights",                          highlight: false },
        { href: "/actualites/aufl-2027-presentation",         Icon: IconStar,  label: "AUFL 2027: 6 universities, 5 countries, one champion",     highlight: true  },
        { href: "/actualites/ahmadou-wathie-fondateur-aul",   Icon: IconUsers, label: "The vision of founder Ahmadou Wathie",                     highlight: false },
        { href: "/classement",                                Icon: IconGrid,  label: "Standings: everything about the 2027 season",              highlight: false },
        { href: "/calendrier",                                Icon: IconClock, label: "The inaugural 2027 season schedule",                       highlight: false },
      ]
    : [
        { href: "/#videos",                                   Icon: IconPlay,  label: "Regarder les vidéos et highlights de l'AUL",               highlight: false },
        { href: "/actualites/aufl-2027-presentation",         Icon: IconStar,  label: "AUFL 2027 : 6 universités, 5 pays, une seule championne",  highlight: true  },
        { href: "/actualites/ahmadou-wathie-fondateur-aul",   Icon: IconUsers, label: "La vision du fondateur Ahmadou Wathie",                    highlight: false },
        { href: "/classement",                                Icon: IconGrid,  label: "Classement : tout savoir sur la saison 2027",              highlight: false },
        { href: "/calendrier",                                Icon: IconClock, label: "Le calendrier de la saison inaugurale 2027",               highlight: false },
      ];

  return (
    <div className="hidden md:block" style={{ backgroundColor: "#fafaf8", borderBottom: "1px solid #e2e0d8" }}>
      <div className="flex overflow-x-auto">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="flex items-center gap-3 px-6 py-4 shrink-0 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-150"
            style={{
              borderRight: "1px solid #e2e0d8",
              color: link.highlight ? GOLD : "#6b6b60",
            }}
          >
            <span className="shrink-0" style={{ color: link.highlight ? GOLD : GREEN }}>
              <link.Icon />
            </span>
            <span className="leading-tight" style={{ maxWidth: "200px" }}>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
