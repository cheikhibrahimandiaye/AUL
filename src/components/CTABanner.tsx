"use client";

import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTABanner() {
  const { t } = useLang();
  const contentRef = useScrollReveal();
  const btnsRef    = useScrollReveal({ rootMargin: "0px 0px -20px 0px" });

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#043927" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(197,160,89,0.08) 0%, transparent 70%)" }} aria-hidden="true" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none leading-none text-white" style={{ fontFamily: "var(--font-display)", fontSize: "22rem", opacity: 0.04, letterSpacing: "-0.06em" }}>
        AUFL
      </div>

      <div className="relative z-10 px-5 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        <div ref={contentRef} className="reveal reveal-left flex-1 max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-8 h-[2px]" style={{ backgroundColor: "#c5a059" }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#c5a059" }}>
              {t("cta_tag")}
            </span>
          </div>
          <h2 className="uppercase text-white leading-none mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "0.02em" }}>
            {t("cta_title")}
          </h2>
          <p className="text-base leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            {t("cta_desc")}
          </p>
        </div>

        <div ref={btnsRef} className="reveal reveal-right flex flex-col gap-4 shrink-0">
          <a href="/contact?sujet=universite#contact-form" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.14em]" style={{ backgroundColor: "#c5a059", color: "#0c0c0a" }}>
            {t("cta_apply")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.14em]" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}>
            {t("cta_contact")}
          </a>
        </div>
      </div>

      <div className="h-1 w-full" style={{ backgroundColor: "rgba(197,160,89,0.4)" }} />
    </section>
  );
}
