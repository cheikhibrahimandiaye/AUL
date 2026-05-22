"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";

interface HeroBannerProps {
  imageSrc: string;
  imageAlt: string;
  ctaHref?: string;
}

export default function HeroBanner({ imageSrc, imageAlt, ctaHref = "/actualites" }: HeroBannerProps) {
  const { t } = useLang();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.45}px) scale(1.05)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex h-[680px] overflow-hidden grain" style={{ backgroundColor: "#0c0c0a" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.45, willChange: "transform" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(105deg, #0c0c0a 0%, #0c0c0a 40%, rgba(12,12,10,0.75) 62%, rgba(12,12,10,0.15) 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20" style={{ backgroundColor: GOLD }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end pb-14 md:pb-16 pl-5 md:pl-16 pr-5 md:pr-8 w-full max-w-3xl">
        <div className="animate-fade-up flex items-center gap-3 mb-8">
          <div className="w-6 h-[2px]" style={{ backgroundColor: GOLD }} />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>
            {t("hero_tag")}
          </span>
        </div>

        <h1
          className="animate-fade-up delay-100 uppercase leading-none mb-6 text-white"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 7vw, 6.5rem)", letterSpacing: "0.01em", textShadow: "0 2px 40px rgba(0,0,0,0.4)" }}
        >
          {t("hero_title")}
        </h1>

        <p className="animate-fade-up delay-200 text-base font-normal leading-relaxed max-w-lg mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
          {t("hero_desc")}
        </p>

        <div className="animate-fade-up delay-300 flex items-center gap-4">
          <a href={ctaHref} className="hero-cta inline-flex items-center gap-3 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors duration-200">
            {t("hero_cta")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#actualites" className="text-[12px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
            {t("hero_secondary")}
          </a>
        </div>
      </div>

      {/* Edition marker */}
      <div className="absolute top-8 right-10 z-10 text-right animate-fade-in delay-400">
        <div className="leading-none mb-1" style={{ fontFamily: "var(--font-display)", fontSize: "4.5rem", color: GOLD, opacity: 0.12 }} aria-hidden="true">
          2026
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
          {t("hero_season")}
        </div>
      </div>

      {/* Competition badges — desktop only to avoid mobile overlap */}
      <div className="hidden md:flex absolute bottom-6 right-10 z-10 gap-2 animate-fade-in delay-500">
        <span className="text-[9px] font-black uppercase tracking-[0.16em] px-3 py-1.5" style={{ border: `1px solid ${GOLD}`, color: GOLD }}>
          AUL Football
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.16em] px-3 py-1.5" style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }}>
          AUFL Américain
        </span>
      </div>
    </section>
  );
}
