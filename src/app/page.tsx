import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MatchTicker from "@/components/MatchTicker";
import QuickLinks from "@/components/QuickLinks";
import HomeContent from "@/components/HomeContent";
import VideoSection from "@/components/VideoSection";
import ScheduleSection from "@/components/ScheduleSection";
import CTABanner from "@/components/CTABanner";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const IMG = {
  hero: "/hero-aufl.jpg",
};

const videos = [
  {
    id: "v1",
    title:    "Présentation de l'AUFL — Saison inaugurale 2027",
    title_en: "AUFL Presentation — Inaugural Season 2027",
    date: "1 Juin 2026",
    thumb: "/photo-aufl-2027.jpg",
    featured: true,
  },
  {
    id: "v2",
    title:    "Dakar, ville hôte de l'AUFL 2027",
    title_en: "Dakar, host city of AUFL 2027",
    date: "28 Mai 2026",
    thumb: "/photo-dakar.jpg",
    featured: false,
  },
  {
    id: "v3",
    title:    "AUL × IFL : le football universitaire en action",
    title_en: "AUL × IFL: university football in action",
    date: "25 Mai 2026",
    thumb: "/photo-football-league.jpg",
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner
        imageSrc={IMG.hero}
        imageSrcMobile="/hero-aufl-mobile.jpg"
        imageAlt="Joueurs de football universitaire africain célébrant un but"
      />
      <MatchTicker />
      <QuickLinks />
      <HomeContent />
      <VideoSection videos={videos} />
      <ScheduleSection />
      <CTABanner />
      <PartnersSection />
      <Footer />
    </>
  );
}
