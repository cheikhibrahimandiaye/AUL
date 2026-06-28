"use client";

import HeroBanner from "@/components/HeroBanner";
import { useLang } from "@/lib/i18n";

const AUBL_BLUE = "#3b82f6";

export default function HomeHero() {
  const { lang } = useLang();

  return (
    <HeroBanner
      imageSrc="/hero-aubl.jpg"
      imageSrcMobile="/hero-aubl-mobile.jpg"
      imageAlt={lang === "fr" ? "Basketball universitaire africain — AUBL" : "African university basketball — AUBL"}
      accentColor={AUBL_BLUE}
      tag={lang === "fr" ? "African University League · AUBL" : "African University League · AUBL"}
      title={lang === "fr" ? "Le Basketball Universitaire Africain" : "African University Basketball"}
      description={lang === "fr"
        ? "L'AUBL réunit l'élite du basketball masculin des universités africaines. Saison inaugurale 2027 — inscrivez votre université dès maintenant."
        : "The AUBL brings together the elite of men's basketball from African universities. Inaugural 2027 season — register your university now."}
      ctaLabel={lang === "fr" ? "Découvrir l'AUBL" : "Discover the AUBL"}
      ctaHref="/aubl"
      secondaryLabel={lang === "fr" ? "Voir toutes les ligues →" : "See all leagues →"}
      secondaryHref="#nos-ligues"
      leagueBadges={[
        { label: "AUBL", active: true },
        { label: "AUFL" },
        { label: "AWBL" },
      ]}
    />
  );
}
