import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const GOLD = "#c5a059";
const GREEN = "#043927";
const DARK = "#0c0c0a";

const partnerTiers = [
  {
    num: "01",
    tier: "Partenaire Titre",
    tagline: "Visibilité maximale",
    price: "Sur devis",
    color: GOLD,
    featured: true,
    perks: [
      "Logo en position principale sur tous les supports",
      "Naming rights sur une compétition",
      "Accès VIP à toutes les finales",
      "Visibilité TV & streaming",
      "Activation terrain lors des matchs",
      "Communiqués de presse co-brandés",
    ],
  },
  {
    num: "02",
    tier: "Partenaire Or",
    tagline: "Présence terrain",
    price: "Sur devis",
    color: "#c5a059",
    featured: false,
    perks: [
      "Logo sur les maillots et équipements",
      "Présence sur le site officiel",
      "Accès VIP aux demi-finales et finale",
      "Publication sur les réseaux sociaux",
      "Rapport d'impact saisonnier",
    ],
  },
  {
    num: "03",
    tier: "Partenaire Officiel",
    tagline: "Visibilité digitale",
    price: "Sur devis",
    color: "#9ca3af",
    featured: false,
    perks: [
      "Logo sur les supports digitaux",
      "Mention dans les communiqués de presse",
      "Invitation aux événements officiels",
      "Visibilité sur les réseaux sociaux",
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero header */}
      <section className="relative overflow-hidden crosshatch" style={{ backgroundColor: DARK }}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none leading-none"
          style={{ fontFamily: "var(--font-display)", fontSize: "20rem", color: "rgba(255,255,255,0.02)", letterSpacing: "-0.04em" }}
        >
          AUL
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(to right, ${GOLD}, rgba(197,160,89,0.35), transparent)` }} />
        <div className="relative z-10 px-5 md:px-12 py-10 md:py-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Rejoignez l'AUL</span>
          </div>
          <h1 className="uppercase leading-none text-white mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "0.03em" }}>
            Contact & Partenariat
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Université, sponsor, média ou fan — nous sommes à votre écoute. Construisons ensemble la référence du sport universitaire africain.
          </p>
        </div>
      </section>

      {/* Partnership tiers */}
      <section className="px-5 md:px-12 py-12 md:py-20 relative overflow-hidden" style={{ backgroundColor: "#f0efe9", borderBottom: "1px solid #e2e0d8" }}>
        {/* Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-6 bottom-0 select-none leading-none hidden md:block"
          style={{ fontFamily: "var(--font-display)", fontSize: "16rem", color: "rgba(4,57,39,0.03)", letterSpacing: "-0.04em" }}
        >
          AUL
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Opportunités de partenariat</span>
              </div>
              <h2 className="uppercase leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "0.04em", color: DARK }}>
                Niveaux de Partenariat
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b6b60" }}>
              Associez votre marque au plus grand vivier de talents sportifs universitaires d&apos;Afrique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 items-stretch">
            {partnerTiers.map((tier) => (
              <div
                key={tier.tier}
                className="group flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: tier.featured ? DARK : "#ffffff",
                  border: tier.featured ? `1px solid ${GOLD}` : "1px solid #e2e0d8",
                  boxShadow: tier.featured ? "0 24px 60px rgba(12,12,10,0.25)" : "0 4px 24px rgba(12,12,10,0.05)",
                }}
              >
                {/* Top accent */}
                <div className="h-[3px] w-full" style={{ backgroundColor: tier.featured ? GOLD : tier.color, opacity: tier.featured ? 1 : 0.5 }} />

                {/* Featured ribbon */}
                {tier.featured && (
                  <div className="absolute top-[3px] right-0 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em]" style={{ backgroundColor: GOLD, color: DARK }}>
                    Recommandé
                  </div>
                )}

                <div className="p-7 md:p-8 flex-1 flex flex-col">
                  {/* Number + tier */}
                  <div
                    className="leading-none mb-5"
                    style={{ fontFamily: "var(--font-display)", fontSize: "2.6rem", color: tier.featured ? GOLD : "#e2e0d8", letterSpacing: "0.02em" }}
                  >
                    {tier.num}
                  </div>
                  <h3
                    className="uppercase leading-tight mb-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", letterSpacing: "0.05em", color: tier.featured ? "#ffffff" : DARK }}
                  >
                    {tier.tier}
                  </h3>
                  <div className="flex items-center gap-3 mb-7">
                    <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: tier.featured ? GOLD : "#6b6b60" }}>
                      {tier.tagline}
                    </span>
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: tier.featured ? "rgba(255,255,255,0.25)" : "#c9c7bd" }} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: tier.featured ? "rgba(255,255,255,0.4)" : "#9b9b90" }}>
                      {tier.price}
                    </span>
                  </div>

                  <div className="h-px w-full mb-7" style={{ backgroundColor: tier.featured ? "rgba(255,255,255,0.1)" : "#eceae2" }} />

                  <ul className="flex flex-col gap-3.5 flex-1">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm leading-snug" style={{ color: tier.featured ? "rgba(255,255,255,0.78)" : "#3a3a35" }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact-form"
                    className="mt-8 flex items-center justify-center gap-3 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
                    style={tier.featured
                      ? { backgroundColor: GOLD, color: DARK }
                      : { border: `1px solid ${GREEN}`, color: GREEN }
                    }
                  >
                    Devenir partenaire
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#9b9b90" }}>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              10M+ étudiants en Afrique
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              3 ligues · AUFL · AUBL · AWBL
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
              Couverture médias & streaming
            </span>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section id="contact-form" className="px-5 md:px-12 py-10 md:py-16 scroll-mt-24" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Form */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Formulaire de contact</span>
            </div>

            <ContactForm />
          </div>

          {/* Info panel */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Informations</span>
            </div>

            <div className="flex flex-col gap-6 mb-10">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                  label: "Fondateur", value: "Ahmadou Wathie", sub: "African University League — AUFL · AUBL · AWBL", href: undefined as string | undefined,
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  ),
                  label: "Email", value: "contact@aul-league.com", sub: "Réponse sous 48h ouvrées", href: "mailto:contact@aul-league.com",
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Siège", value: "Dakar, Sénégal", sub: "Présence panafricaine", href: undefined,
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill={GOLD} />
                    </svg>
                  ),
                  label: "Instagram", value: "@aul.africa", sub: "Suivez l'AUL sur Instagram", href: "https://www.instagram.com/aul.africa/",
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-5 pb-6" style={{ borderBottom: "1px solid #e2e0d8" }}>
                  <span className="shrink-0 mt-0.5">{info.icon}</span>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: "#6b6b60" }}>{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold transition-colors hover:underline"
                        style={{ color: "#0c0c0a" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm font-semibold" style={{ color: "#0c0c0a" }}>{info.value}</div>
                    )}
                    <div className="text-xs mt-0.5" style={{ color: "#6b6b60" }}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Candidature CTA */}
            <div className="p-8 crosshatch" style={{ backgroundColor: DARK }}>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-[2px]" style={{ backgroundColor: GOLD }} />
                <span className="text-[9px] font-black uppercase tracking-[0.22em]" style={{ color: GOLD }}>Saison 2027 — Candidatures ouvertes</span>
              </div>
              <h3 className="text-white uppercase leading-tight mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", letterSpacing: "0.04em" }}>
                Inscrivez votre Université
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                Les candidatures pour la saison 2027 sont ouvertes jusqu&apos;au 30 juin 2026 — pour l&apos;AUFL (football), l&apos;AUBL (basketball) et l&apos;AWBL (basketball féminin).
              </p>
              <a href="/contact?sujet=universite#contact-form" className="inline-flex items-center gap-3 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors" style={{ backgroundColor: GOLD, color: DARK }}>
                Soumettre une candidature
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
