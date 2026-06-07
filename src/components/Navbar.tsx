"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";

const LEAGUES = [
  { key: "aufl", label: "AUFL", href: "/aufl", color: "#c5a059", sport: "Football", desc: "Ligue de football universitaire", logo: "/logo-aul.jpg" },
  { key: "aubl", label: "AUBL", href: "/aubl", color: "#3b82f6", sport: "Basketball", desc: "Ligue de basketball masculin", logo: "/logo-aubl.jpg" },
  { key: "awbl", label: "AWBL", href: "/awbl", color: "#a855f7", sport: "Basketball Féminin", desc: "Ligue de basketball féminin", logo: "/logo-aul.jpg" },
] as const;


export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeLeague = LEAGUES.find((l) => pathname.startsWith(l.href)) ?? null;
  const leagueLabel = activeLeague ? activeLeague.label : "AUL";
  const leagueColor = activeLeague ? activeLeague.color : GOLD;
  const leagueLogo = activeLeague ? activeLeague.logo : "/logo-aul.jpg";

  function handleMouseEnter() {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  }
  function handleMouseLeave() {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  const navLinks = [
    { label: t("nav_home"),         href: "/" },
    { label: t("nav_calendar"),     href: "/calendrier" },
    { label: t("nav_standings"),    href: "/classement" },
    { label: t("nav_universities"), href: "/universites" },
    { label: t("nav_news"),         href: "/actualites" },
    { label: t("nav_about"),        href: "/a-propos" },
  ];

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-10 h-16"
        style={{
          backgroundColor: "#0c0c0a",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={leagueLogo}
            alt={`${leagueLabel} Logo`}
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span
            className="text-[10px] tracking-[0.14em] uppercase leading-none hidden sm:block"
            style={{ color: "rgba(197,160,89,0.7)" }}
          >
            {leagueLabel}
          </span>
        </Link>

        {/* League dropdown trigger */}
        <div
          className="hidden md:block relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Trigger button */}
          <button
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-200"
            style={{
              border: `1px solid ${leagueColor}50`,
              color: leagueColor,
              backgroundColor: dropdownOpen ? `${leagueColor}10` : "transparent",
            }}
          >
            {leagueLabel}
            <svg
              width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div
              className="absolute top-full left-0 mt-1 w-64 z-50 overflow-hidden"
              style={{
                backgroundColor: "#0e0e0c",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 24px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Header */}
              <div className="px-4 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Ligues AUL
                </span>
              </div>

              {/* AUL home */}
              <Link
                href="/"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center justify-between px-4 py-3 transition-colors"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", backgroundColor: !activeLeague ? "rgba(197,160,89,0.06)" : "transparent" }}
              >
                <div>
                  <div className="text-[11px] font-black uppercase tracking-[0.14em]" style={{ color: !activeLeague ? GOLD : "rgba(255,255,255,0.75)" }}>
                    AUL
                  </div>
                  <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    African University League
                  </div>
                </div>
                {!activeLeague && (
                  <span className="w-1 h-4 shrink-0" style={{ backgroundColor: GOLD }} />
                )}
              </Link>

              {/* Leagues */}
              {LEAGUES.map((league) => {
                const isActive = pathname.startsWith(league.href);
                return (
                  <Link
                    key={league.key}
                    href={league.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center justify-between px-4 py-3 transition-colors"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      backgroundColor: isActive ? `${league.color}08` : "transparent",
                    }}
                  >
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-[0.14em]" style={{ color: isActive ? league.color : "rgba(255,255,255,0.75)" }}>
                        {league.label}
                      </div>
                      <div className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {league.sport}
                      </div>
                    </div>
                    {isActive && (
                      <span className="w-1 h-4 shrink-0" style={{ backgroundColor: league.color }} />
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200"
                style={{ color: active ? GOLD : "rgba(255,255,255,0.72)" }}
              >
                {label}
                {active && (
                  <span
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px]"
                    style={{ backgroundColor: GOLD }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/contact"
            className="nav-partner px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-200"
          >
            {t("nav_partner")}
          </Link>

          <div
            className="flex items-center gap-1 pl-5 text-[11px] font-bold uppercase tracking-widest"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.1)" }}
          >
            <button
              onClick={() => setLang("fr")}
              className="px-2 py-1 transition-colors duration-150"
              style={{
                color: lang === "fr" ? GOLD : "rgba(255,255,255,0.35)",
                fontWeight: lang === "fr" ? 800 : 600,
              }}
            >
              FR
            </button>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <button
              onClick={() => setLang("en")}
              className="px-2 py-1 transition-colors duration-150"
              style={{
                color: lang === "en" ? GOLD : "rgba(255,255,255,0.35)",
                fontWeight: lang === "en" ? 800 : 600,
              }}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile right: lang + hamburger */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest">
            <button
              onClick={() => setLang("fr")}
              className="px-2 py-1"
              style={{ color: lang === "fr" ? GOLD : "rgba(255,255,255,0.35)" }}
            >
              FR
            </button>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <button
              onClick={() => setLang("en")}
              className="px-2 py-1"
              style={{ color: lang === "en" ? GOLD : "rgba(255,255,255,0.35)" }}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span
              className="block w-6 h-[2px] transition-all duration-200"
              style={{
                backgroundColor: "#ffffff",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              className="block w-6 h-[2px] transition-all duration-200"
              style={{
                backgroundColor: "#ffffff",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-[2px] transition-all duration-200"
              style={{
                backgroundColor: "#ffffff",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="lg:hidden sticky top-16 z-40 flex flex-col"
          style={{ backgroundColor: "#0c0c0a", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors"
                style={{
                  color: active ? GOLD : "rgba(255,255,255,0.72)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {label}
              </Link>
            );
          })}
          {/* Mobile league switcher */}
          <div className="px-6 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>Ligues AUL</div>
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center justify-between px-3 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] transition-all" style={!activeLeague ? { color: GOLD, borderLeft: `2px solid ${GOLD}` } : { color: "rgba(255,255,255,0.45)", borderLeft: "2px solid transparent" }}>
                AUL <span className="text-[9px] font-normal normal-case tracking-normal" style={{ color: "rgba(255,255,255,0.25)" }}>African University League</span>
              </Link>
              {LEAGUES.map((league) => {
                const isActive = pathname.startsWith(league.href);
                return (
                  <Link key={league.key} href={league.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between px-3 py-2.5 text-[11px] font-black uppercase tracking-[0.14em] transition-all" style={isActive ? { color: league.color, borderLeft: `2px solid ${league.color}` } : { color: "rgba(255,255,255,0.45)", borderLeft: "2px solid transparent" }}>
                    {league.label} <span className="text-[9px] font-normal normal-case tracking-normal" style={{ color: "rgba(255,255,255,0.25)" }}>{league.sport}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mx-6 mb-4 text-center py-3 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ border: `1px solid ${GOLD}`, color: GOLD }}
          >
            {t("nav_partner")}
          </Link>
        </div>
      )}
    </>
  );
}
