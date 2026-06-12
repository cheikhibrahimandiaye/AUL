"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  tag?: string;
  excerpt?: string;
}

interface NewsSectionProps {
  featured: NewsArticle;
  secondary: NewsArticle[];
}

function FeaturedArticle({ article }: { article: NewsArticle }) {
  return (
    <Link href={article.href ?? "#"} className="group block">
      <div className="w-full mb-5 overflow-hidden relative" style={{ aspectRatio: "16/9", backgroundColor: "#e2e0d8" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.imageSrc} alt={article.imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        <div className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" style={{ backgroundColor: "#c5a059" }} />
        {article.tag && (
          <div className="absolute top-3 left-3">
            <span className="text-white text-[9px] font-bold uppercase tracking-[0.16em] px-2.5 py-1" style={{ backgroundColor: "#043927" }}>
              {article.tag}
            </span>
          </div>
        )}
      </div>
      <h3
        className="uppercase leading-tight mb-3 transition-colors duration-200"
        style={{ fontFamily: "var(--font-display)", fontSize: "1.55rem", letterSpacing: "0.02em", color: "#0c0c0a" }}
      >
        {article.title}
      </h3>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#6b6b60" }}>
        {article.date}
      </p>
    </Link>
  );
}

function SecondaryArticle({ article }: { article: NewsArticle }) {
  return (
    <Link href={article.href ?? "#"} className="flex gap-4 group">
      <div className="shrink-0 overflow-hidden" style={{ width: "110px", aspectRatio: "16/9", backgroundColor: "#e2e0d8" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.imageSrc} alt={article.imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        {article.tag && (
          <span className="inline-block text-white text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-0.5 mb-2 w-max" style={{ backgroundColor: "#043927" }}>
            {article.tag}
          </span>
        )}
        <h4
          className="uppercase leading-tight mb-1.5 transition-colors"
          style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.02em", color: "#0c0c0a" }}
        >
          {article.title}
        </h4>
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#6b6b60" }}>
          {article.date}
        </p>
      </div>
    </Link>
  );
}

export default function NewsSection({ featured, secondary }: NewsSectionProps) {
  const { t } = useLang();
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });

  return (
    <div className="w-full lg:w-2/3" id="actualites">
      <div ref={headerRef} className="reveal flex justify-between items-end mb-8 pb-4" style={{ borderBottom: "1px solid #e2e0d8" }}>
        <div>
          <span className="gold-rule mb-3 w-10 inline-block delay-200" />
          <h2
            className="leading-none uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}
          >
            {t("news_title")}
          </h2>
        </div>
        <Link
          href="/actualites"
          className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors"
          style={{ color: "#6b6b60" }}
        >
          {t("news_more")}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>

      <div ref={gridRef} className="reveal reveal-zoom reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <FeaturedArticle article={featured} />
        <div className="flex flex-col gap-7 justify-start">
          {secondary.map((article, i) => (
            // on mobile, keep the list short: only the first two secondary articles
            <div key={article.id} className={i >= 2 ? "hidden md:block" : ""}>
              <SecondaryArticle article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
