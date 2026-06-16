"use client";

import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const VIDEOS_URL = "https://www.youtube.com/@Theaulofficial";

interface Video {
  id: string;
  title: string;
  title_en: string;
  date: string;
  thumb: string;
  featured?: boolean;
}

interface VideoSectionProps {
  videos: Video[];
}

function PlayIcon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#c5a059" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#0c0c0a" style={{ marginLeft: "3px" }}>
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </div>
    </div>
  );
}

export default function VideoSection({ videos }: VideoSectionProps) {
  const { t, lang } = useLang();
  const featured  = videos.find((v) => v.featured);
  const secondary = videos.filter((v) => !v.featured);
  const headerRef = useScrollReveal();
  const gridRef   = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="videos" className="px-5 md:px-12 py-10 md:py-16 scroll-mt-20" style={{ backgroundColor: "#0c0c0a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="reveal flex justify-between items-end mb-10 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <span className="block w-10 h-[3px] mb-3" style={{ backgroundColor: "#c5a059" }} />
            <h2 className="leading-none uppercase text-white" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em" }}>
              {t("videos_title")}
            </h2>
          </div>
          <a href={VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("videos_more")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

        <div ref={gridRef} className="reveal reveal-zoom grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured — 2 cols */}
          {featured && (
            <a href={VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="md:col-span-2 group relative block overflow-hidden">
              <div className="relative" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.thumb} alt={lang === "en" ? featured.title_en : featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,10,0.8), rgba(12,12,10,0.2), transparent)" }} />
                <PlayIcon />
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] px-3 py-1.5" style={{ backgroundColor: "#c5a059", color: "#0c0c0a" }}>
                    {t("video_featured")}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>{featured.date}</p>
                  <h3 className="text-white uppercase leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", letterSpacing: "0.04em" }}>
                    {lang === "en" ? featured.title_en : featured.title} →
                  </h3>
                </div>
              </div>
            </a>
          )}

          {/* Secondary — stacked (desktop only to keep mobile light) */}
          <div className="hidden md:flex flex-col gap-4">
            {secondary.map((video) => (
              <a key={video.id} href={VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden flex-1" style={{ minHeight: "140px" }}>
                <div className="relative h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={video.thumb} alt={lang === "en" ? video.title_en : video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" style={{ position: "absolute", inset: 0 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,10,0.8), rgba(12,12,10,0.3), transparent)" }} />
                  <PlayIcon />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{video.date}</p>
                    <h4 className="text-white uppercase leading-tight" style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.04em" }}>
                      {lang === "en" ? video.title_en : video.title}
                    </h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a href={VIDEOS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("videos_more")}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
