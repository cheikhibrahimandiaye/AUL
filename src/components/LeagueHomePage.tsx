"use client";

import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import MatchTicker from "@/components/MatchTicker";
import VideoSection from "@/components/VideoSection";
import CTABanner from "@/components/CTABanner";
import PartnersSection from "@/components/PartnersSection";
import NewsSection from "@/components/NewsSection";
import StandingsWidget from "@/components/StandingsWidget";
import { useLang } from "@/lib/i18n";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { League } from "@/lib/leagues";
import { LEAGUES } from "@/lib/leagues";

interface LeagueHomePageProps {
  league: League;
}

function LeagueScheduleSection({ league }: { league: League }) {
  const { t } = useLang();
  const headerRef = useScrollReveal();
  const listRef = useScrollReveal({ rootMargin: "0px 0px -40px 0px" });
  const accent = league.accentColor;

  if (league.matches.length === 0) {
    return (
      <section className="px-5 md:px-12 py-10 md:py-16 relative overflow-hidden" style={{ backgroundColor: "#0c0c0a" }}>
        <div className="relative z-10 max-w-5xl">
          <div ref={headerRef} className="reveal flex justify-between items-end mb-10 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <span className="block w-10 h-[3px] mb-3" style={{ backgroundColor: accent }} />
              <h2 className="leading-none uppercase text-white" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em" }}>
                {t("schedule_title")}
              </h2>
            </div>
          </div>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.4)" }}>
            Le calendrier {league.label} sera disponible à l&apos;ouverture de la saison 2027.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 md:px-12 py-10 md:py-16 relative overflow-hidden" style={{ backgroundColor: "#0c0c0a" }}>
      <div aria-hidden="true" className="pointer-events-none absolute right-12 top-1/2 -translate-y-1/2 select-none leading-none text-white hidden md:block" style={{ fontFamily: "var(--font-display)", fontSize: "18rem", opacity: 0.03, letterSpacing: "-0.04em" }}>
        2027
      </div>
      <div className="relative z-10 max-w-5xl">
        <div ref={headerRef} className="reveal flex justify-between items-end mb-10 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div>
            <span className="block w-10 h-[3px] mb-3" style={{ backgroundColor: accent }} />
            <h2 className="leading-none uppercase text-white" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em" }}>
              {t("schedule_title")}
            </h2>
          </div>
          <Link href="/calendrier" className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}>
            {t("schedule_more")}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
        <div ref={listRef} className="reveal reveal-left reveal-stagger flex flex-col">
          {league.matches.map((match, idx) => (
            <div
              key={match.id}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-5 group cursor-pointer transition-all duration-200 -mx-4 px-4"
              style={{
                borderBottom: idx < league.matches.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                backgroundColor: match.isHighlight ? `${accent}10` : undefined,
              }}
            >
              {/* Mobile top row: date + badges + time / desktop: separate columns (md:contents) */}
              <div className="flex items-center justify-between gap-4 md:contents">
                <div className="w-14 shrink-0 text-center">
                  <div className="leading-none text-[2.2rem] md:text-[2.8rem]" style={{ fontFamily: "var(--font-display)", color: match.isHighlight ? accent : "rgba(255,255,255,0.9)" }}>
                    {match.date}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {match.day}
                  </div>
                </div>
                <div className="shrink-0 flex flex-col items-center md:items-start gap-1.5 md:w-32">
                  <span
                    className="inline-block text-[9px] font-black uppercase tracking-[0.14em] px-3 py-1.5 w-max"
                    style={match.isHighlight
                      ? { backgroundColor: accent, color: "#0c0c0a" }
                      : { border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }
                    }
                  >
                    {match.round}
                  </span>
                  <span className="inline-block text-[8px] font-black uppercase tracking-[0.14em] px-2 py-0.5 w-max" style={{ border: `1px solid ${accent}50`, color: accent }}>
                    {league.label}
                  </span>
                </div>
                <div className="shrink-0 text-right md:order-last">
                  <div className="leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", color: "rgba(255,255,255,0.9)" }}>
                    {match.time}
                  </div>
                  <div className="hidden md:block text-[10px] font-semibold uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {match.venue}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <span className="flex-1 text-right font-semibold uppercase tracking-wide text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {match.homeTeam}
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", letterSpacing: "0.08em", color: accent }}>VS</span>
                <span className="flex-1 font-semibold uppercase tracking-wide text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {match.awayTeam}
                </span>
              </div>
              {/* Venue (mobile only, under the matchup) */}
              <div className="md:hidden text-center text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
                {match.venue}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeagueNewsStandingsSection({ league }: { league: League }) {
  const { lang } = useLang();
  const accent = league.accentColor; // used in standings fallback and border

  const featured = league.news[0];
  const secondary = league.news.slice(1);

  // ids that match a real article slug link to its page; placeholder ids fall back to the list
  const newsHref = (id: string) => (id.startsWith("n") && id.length <= 3 ? "/actualites" : `/actualites/${id}`);

  const newsArticles = {
    featured: {
      id: featured.id,
      title: lang === "en" ? featured.title_en : featured.title,
      date: featured.date,
      imageSrc: featured.image,
      imageAlt: featured.title,
      href: newsHref(featured.id),
      tag: featured.category,
      excerpt: lang === "en" ? featured.excerpt_en : featured.excerpt,
    },
    secondary: secondary.map((a) => ({
      id: a.id,
      title: lang === "en" ? a.title_en : a.title,
      date: a.date,
      imageSrc: a.image,
      imageAlt: a.title,
      href: newsHref(a.id),
      tag: a.category,
      excerpt: lang === "en" ? a.excerpt_en : a.excerpt,
    })),
  };

  return (
    <section className="px-5 md:px-12 py-10 md:py-16" style={{ backgroundColor: "#fafaf8", borderTop: "1px solid #e2e0d8" }}>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="flex-1 min-w-0">
          <NewsSection featured={newsArticles.featured} secondary={newsArticles.secondary} />
        </div>
        {league.standings.length > 0 && (
          <StandingsWidget standings={league.standings} />
        )}
        {league.standings.length === 0 && (
          <div className="w-full lg:w-1/3">
            <div className="pb-4 mb-8" style={{ borderBottom: "1px solid #e2e0d8" }}>
              <span className="block w-10 h-[3px] mb-3" style={{ backgroundColor: accent }} />
              <h2 className="leading-none uppercase" style={{ fontFamily: "var(--font-display)", fontSize: "2.4rem", letterSpacing: "0.04em", color: "#0c0c0a" }}>
                Classement
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: "#6b6b60" }}>
                {league.label} · Saison 2027
              </p>
            </div>
            <div className="py-10 text-center">
              <p className="text-sm" style={{ color: "#6b6b60" }}>Le classement sera disponible à l&apos;ouverture de la saison.</p>
              <Link href="/contact?sujet=universite#contact-form" className="inline-flex items-center gap-2 mt-6 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all" style={{ border: `1px solid ${accent}`, color: accent }}>
                Inscrire mon université
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function LeagueSwitcherBanner({ currentLeague }: { currentLeague: League }) {
  return (
    <section className="px-5 md:px-12 py-8" style={{ backgroundColor: "#080806", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "rgba(255,255,255,0.3)" }}>
          Autres ligues AUL
        </p>
        <div className="flex flex-wrap gap-3">
          {LEAGUES.filter((l) => l.key !== currentLeague.key).map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="inline-flex items-center gap-3 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all"
              style={{ border: `1px solid ${l.accentColor}30`, color: l.accentColor }}
            >
              {l.label}
              <span className="text-[9px] font-semibold" style={{ color: "rgba(255,255,255,0.3)" }}>{l.sport}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LeagueHomePage({ league }: LeagueHomePageProps) {
  const { lang } = useLang();
  const title = lang === "en" ? league.title_en : league.title;
  const description = lang === "en" ? league.description_en : league.description;
  const ctaLabel = lang === "en" ? league.ctaLabel_en : league.ctaLabel;

  const otherLeagues = LEAGUES.filter((l) => l.key !== league.key);
  const badges = [
    { label: league.label, active: true },
    ...otherLeagues.map((l) => ({ label: l.label, active: false })),
  ];

  return (
    <>
      <HeroBanner
        imageSrc={league.heroImage}
        imageSrcMobile={league.heroImageMobile}
        imageAlt={league.heroAlt}
        accentColor={league.accentColor}
        tag={league.tag}
        title={title}
        description={description}
        ctaLabel={ctaLabel}
        ctaHref={league.ctaHref}
        leagueBadges={badges}
      />
      <MatchTicker />
      <LeagueNewsStandingsSection league={league} />
      <VideoSection videos={league.videos} />
      <LeagueScheduleSection league={league} />
      <CTABanner />
      <LeagueSwitcherBanner currentLeague={league} />
      <PartnersSection />
    </>
  );
}
