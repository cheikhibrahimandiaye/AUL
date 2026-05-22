"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

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
            src="/logo-aul.jpg"
            alt="AUL Logo"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span
            className="text-[10px] tracking-[0.14em] uppercase leading-none hidden sm:block"
            style={{ color: "rgba(197,160,89,0.7)" }}
          >
            AUFL
          </span>
        </Link>

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
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mx-6 my-4 text-center py-3 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ border: `1px solid ${GOLD}`, color: GOLD }}
          >
            {t("nav_partner")}
          </Link>
        </div>
      )}
    </>
  );
}
