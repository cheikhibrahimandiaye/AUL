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
      { label: "Vidéos", href: "https://www.youtube.com/@Theaulofficial" },
      { label: "Photos", href: "https://www.instagram.com/aul.africa/" },
      { label: "Presse", href: "/contact#contact-form" },
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
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/aul.africa/",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18-.22-.55-.47-.94-.88-1.35-.41-.41-.8-.66-1.35-.88-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 9a3.54 3.54 0 1 0 0-7.08 3.54 3.54 0 0 0 0 7.08zm6.95-9.22a1.27 1.27 0 1 1-2.55 0 1.27 1.27 0 0 1 2.55 0z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/@Theaulofficial",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8zM9.6 15.6V8.4l6.27 3.6-6.27 3.6z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/african-university-league-aul/",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="footer-social w-8 h-8 flex items-center justify-center transition-colors"
                >
                  {s.icon}
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
                      {href.startsWith("http") ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-150" style={{ color: "rgba(255,255,255,0.37)" }}>
                          {label}
                        </a>
                      ) : (
                        <Link href={href} className="text-sm transition-colors duration-150" style={{ color: "rgba(255,255,255,0.37)" }}>
                          {label}
                        </Link>
                      )}
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
            {[
              { label: t("footer_legal"), href: "/a-propos" },
              { label: t("footer_privacy"), href: "/a-propos" },
              { label: t("footer_faq"), href: "/contact" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[11px] transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}>{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
