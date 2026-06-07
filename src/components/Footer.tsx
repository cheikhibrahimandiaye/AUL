"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";
const DARK = "#0c0c0a";

export default function Footer() {
  const { t } = useLang();

  const footerLinks = {
    [t("footer_league")]: [
      { label: "À Propos / About", href: "/a-propos" },
      { label: "Gouvernance", href: "/a-propos" },
      { label: "FAQ", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
    [t("footer_competitions")]: [
      { label: "AUFL — Football", href: "/aufl" },
      { label: "AUBL — Basketball Masculin", href: "/aubl" },
      { label: "AWBL — Basketball Féminin", href: "/awbl" },
      { label: t("nav_calendar"), href: "/calendrier" },
      { label: t("nav_standings"), href: "/classement" },
    ],
    [t("footer_universities")]: [
      { label: t("nav_universities"), href: "/universites" },
      { label: "Statistiques", href: "/classement" },
      { label: "Recrutement", href: "/contact" },
    ],
    [t("footer_media")]: [
      { label: t("nav_news"), href: "/actualites" },
      { label: "Vidéos", href: "/actualites" },
      { label: "Photos", href: "/actualites" },
      { label: "Presse", href: "/contact" },
    ],
  };

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: DARK, color: "#ffffff" }}>
      <div className="h-[3px]" style={{ background: `linear-gradient(to right, ${GOLD}, rgba(197,160,89,0.4), transparent)` }} />

      <div className="px-5 md:px-12 pt-10 md:pt-14 pb-8 md:pb-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-10 md:mb-12">
          {/* Brand */}
          <div className="w-52 shrink-0">
            <Link href="/" className="flex items-center gap-3 mb-2">
              <Image
                src="/logo-aul.jpg"
                alt="AUL Logo"
                width={38}
                height={38}
                className="rounded-full shrink-0"
              />
              <div>
                <div className="text-2xl tracking-[0.18em] uppercase leading-none" style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}>AUL</div>
              </div>
            </Link>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] mb-5" style={{ color: GOLD }}>African University League</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.34)" }}>{t("footer_tagline")}</p>
            <div className="flex gap-2 mt-4">
              {[{ label: "X", href: "#" }, { label: "IG", href: "#" }, { label: "YT", href: "#" }, { label: "IN", href: "#" }].map((s) => (
                <a key={s.label} href={s.href} className="footer-social w-8 h-8 flex items-center justify-center text-[10px] font-bold transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:flex flex-1 gap-6 md:gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex-1">
                <h3 className="text-[9px] font-black uppercase tracking-[0.22em] mb-5" style={{ color: GOLD }}>{category}</h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="text-sm transition-colors duration-150" style={{ color: "rgba(255,255,255,0.37)" }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-48 shrink-0">
            <h3 className="text-[9px] font-black uppercase tracking-[0.22em] mb-5" style={{ color: GOLD }}>{t("footer_newsletter")}</h3>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.37)" }}>{t("footer_newsletter_desc")}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("footer_newsletter_placeholder")}
                className="flex-1 text-sm px-3 py-2 focus:outline-none min-w-0"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRight: "none", color: "#ffffff" }}
              />
              <button className="px-3 py-2 text-[11px] font-black uppercase shrink-0" style={{ backgroundColor: GOLD, color: DARK }}>OK</button>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-2.5 py-1" style={{ border: `1px solid ${GOLD}`, color: GOLD }}>AUFL</span>
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-2.5 py-1" style={{ border: "1px solid #3b82f650", color: "#3b82f6" }}>AUBL</span>
              <span className="text-[9px] font-black uppercase tracking-[0.12em] px-2.5 py-1" style={{ border: "1px solid #a855f750", color: "#a855f7" }}>AWBL</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-wrap justify-between items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div>
            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
              © {new Date().getFullYear()} African University League (AUL). {t("footer_rights")}
            </span>
            <span className="text-[11px] ml-2" style={{ color: "rgba(255,255,255,0.14)" }}>{t("footer_founded")}</span>
          </div>
          <div className="flex gap-5">
            {[t("footer_legal"), t("footer_privacy"), t("footer_faq")].map((l) => (
              <Link key={l} href="#" className="text-[11px] transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
