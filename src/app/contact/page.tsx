import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOLD = "#c5a059";
const GREEN = "#043927";
const DARK = "#0c0c0a";

const partnerTiers = [
  {
    tier: "Partenaire Titre",
    price: "Sur devis",
    color: GOLD,
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
    tier: "Partenaire Or",
    price: "Sur devis",
    color: "#c5a059",
    perks: [
      "Logo sur les maillots et équipements",
      "Présence sur le site officiel",
      "Accès VIP aux demi-finales et finale",
      "Publication sur les réseaux sociaux",
      "Rapport d'impact saisonnier",
    ],
  },
  {
    tier: "Partenaire Officiel",
    price: "Sur devis",
    color: "#9ca3af",
    perks: [
      "Logo sur les supports digitaux",
      "Mention dans les communiqués de presse",
      "Invitation aux événements officiels",
      "Visibilité sur les réseaux sociaux",
    ],
  },
];

const contactReasons = [
  { id: "partenariat", label: "Devenir Partenaire / Sponsor", icon: "◈" },
  { id: "universite",  label: "Inscrire mon Université",       icon: "◉" },
  { id: "media",       label: "Demande Médias & Presse",       icon: "◇" },
  { id: "autre",       label: "Autre demande",                  icon: "◆" },
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
      <section className="px-5 md:px-12 py-10 md:py-16" style={{ backgroundColor: "#f0efe9", borderBottom: "1px solid #e2e0d8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Opportunités de partenariat</span>
          </div>
          <h2 className="uppercase leading-none mb-8 md:mb-12" style={{ fontFamily: "var(--font-display)", fontSize: "2.2rem", letterSpacing: "0.04em", color: DARK }}>
            Niveaux de Partenariat
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTiers.map((tier, i) => (
              <div
                key={tier.tier}
                className="flex flex-col relative overflow-hidden"
                style={{
                  backgroundColor: i === 0 ? DARK : "#ffffff",
                  border: i === 0 ? `2px solid ${GOLD}` : "1px solid #e2e0d8",
                }}
              >
                {i === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: GOLD }} />
                )}
                <div className="p-7 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tier.color }} />
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: tier.color }}>
                      {tier.tier}
                    </span>
                  </div>
                  <div className="text-sm font-semibold mb-6 mt-1" style={{ color: i === 0 ? "rgba(255,255,255,0.4)" : "#6b6b60" }}>
                    {tier.price}
                  </div>

                  <ul className="flex flex-col gap-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm leading-tight" style={{ color: i === 0 ? "rgba(255,255,255,0.75)" : "#0c0c0a" }}>
                        <span className="shrink-0 mt-0.5 text-[10px]" style={{ color: GOLD }}>◆</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-7 pt-0">
                  <a
                    href="#contact-form"
                    className="block text-center py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors"
                    style={i === 0
                      ? { backgroundColor: GOLD, color: DARK }
                      : { border: `1px solid ${GREEN}`, color: GREEN }
                    }
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section id="contact-form" className="px-5 md:px-12 py-10 md:py-16" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Form */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Formulaire de contact</span>
            </div>

            <form className="flex flex-col gap-5">
              {/* Topic */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: "#6b6b60" }}>Sujet *</label>
                <div className="grid grid-cols-2 gap-2">
                  {contactReasons.map((r) => (
                    <label key={r.id} className="flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors" style={{ border: "1px solid #e2e0d8", backgroundColor: "#ffffff" }}>
                      <input type="radio" name="topic" value={r.id} className="accent-[#043927]" />
                      <span className="text-[9px]" style={{ color: GOLD }}>{r.icon}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wide" style={{ color: "#0c0c0a" }}>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: "#6b6b60" }}>Prénom & Nom *</label>
                  <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 text-sm focus:outline-none transition-colors" style={{ border: "1px solid #e2e0d8", backgroundColor: "#ffffff", color: "#0c0c0a" }} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: "#6b6b60" }}>Organisation</label>
                  <input type="text" placeholder="Université, entreprise..." className="w-full px-4 py-3 text-sm focus:outline-none transition-colors" style={{ border: "1px solid #e2e0d8", backgroundColor: "#ffffff", color: "#0c0c0a" }} />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: "#6b6b60" }}>Email *</label>
                <input type="email" placeholder="votre@email.com" className="w-full px-4 py-3 text-sm focus:outline-none transition-colors" style={{ border: "1px solid #e2e0d8", backgroundColor: "#ffffff", color: "#0c0c0a" }} />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.14em] mb-2" style={{ color: "#6b6b60" }}>Message *</label>
                <textarea rows={6} placeholder="Décrivez votre projet ou votre demande..." className="w-full px-4 py-3 text-sm focus:outline-none resize-none transition-colors" style={{ border: "1px solid #e2e0d8", backgroundColor: "#ffffff", color: "#0c0c0a" }} />
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors" style={{ backgroundColor: GREEN, color: "#ffffff" }}>
                Envoyer le message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Info panel */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-8 h-[2px]" style={{ backgroundColor: GOLD }} />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: GOLD }}>Informations</span>
            </div>

            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: "◈", label: "Fondateur", value: "Ahmadou Wathie", sub: "African University League (AUL) & AUFL" },
                { icon: "◇", label: "Email", value: "contact@aul-league.com", sub: "Réponse sous 48h ouvrées" },
                { icon: "◉", label: "Siège", value: "Dakar, Sénégal", sub: "Présence panafricaine" },
                { icon: "◆", label: "Réseaux sociaux", value: "X · Instagram · YouTube · LinkedIn", sub: "@AULofficial" },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-5 pb-6" style={{ borderBottom: "1px solid #e2e0d8" }}>
                  <span className="text-xl shrink-0 mt-0.5" style={{ color: GOLD }}>{info.icon}</span>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: "#6b6b60" }}>{info.label}</div>
                    <div className="text-sm font-semibold" style={{ color: "#0c0c0a" }}>{info.value}</div>
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
                Les candidatures pour la saison 2027 sont ouvertes jusqu&apos;au 30 juin 2026 — pour l&apos;AUL (football) et l&apos;AUFL (football américain).
              </p>
              <a href="#contact-form" className="inline-flex items-center gap-3 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors" style={{ backgroundColor: GOLD, color: DARK }}>
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
