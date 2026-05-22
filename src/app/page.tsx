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
  hero:   "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1400&q=80",
  video1: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
  video2: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
  video3: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
};

const videos = [
  {
    id: "v1",
    title:    "AUFL × Kigali | Finale de Conférence | Saison 1",
    title_en: "AUFL × Kigali | Conference Final | Season 1",
    date: "17 Mai 2026",
    thumb: IMG.video1,
    featured: true,
  },
  {
    id: "v2",
    title:    "Récap Conférence Ouest | AUFL Saison 1",
    title_en: "West Conference Recap | AUFL Season 1",
    date: "15 Mai 2026",
    thumb: IMG.video2,
    featured: false,
  },
  {
    id: "v3",
    title:    "Top 10 Actions | Conférence Sahel | Saison 1",
    title_en: "Top 10 Plays | Sahel Conference | Season 1",
    date: "13 Mai 2026",
    thumb: IMG.video3,
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner
        imageSrc={IMG.hero}
        imageAlt="Joueurs de football universitaire africain en action"
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
