"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const GOLD = "#c5a059";
const GREEN = "#043927";
const DARK = "#0c0c0a";

const contactReasons = [
  {
    id: "partenariat",
    label: "Devenir Partenaire",
    label_en: "Become a Partner",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    id: "universite",
    label: "Inscrire mon Université",
    label_en: "Register my University",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
  {
    id: "media",
    label: "Médias & Presse",
    label_en: "Media & Press",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "autre",
    label: "Autre demande",
    label_en: "Other request",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

const inputBase: React.CSSProperties = {
  border: "1px solid #e2e0d8",
  backgroundColor: "#ffffff",
  color: DARK,
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: "#6b6b60" }}>
        {label} {required && <span style={{ color: GOLD }}>*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const { lang } = useLang();
  const [topic, setTopic] = useState("partenariat");
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, name, organization, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? (lang === "fr" ? "L'envoi a échoué. Réessayez plus tard." : "Sending failed. Please try again later."));
      }
      setSent(true);
      setName("");
      setOrganization("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : (lang === "fr" ? "L'envoi a échoué. Réessayez plus tard." : "Sending failed. Please try again later."));
    } finally {
      setSending(false);
    }
  }

  // Preselect the topic from ?sujet= in the URL (e.g. /contact?sujet=universite#contact-form)
  // and scroll to the form — the browser's native hash scroll is unreliable after client navigation.
  useEffect(() => {
    const sujet = new URLSearchParams(window.location.search).get("sujet");
    if (sujet && contactReasons.some((r) => r.id === sujet)) {
      setTopic(sujet);
    }
    if (sujet || window.location.hash === "#contact-form") {
      // wait for layout to settle (fonts/images) before scrolling
      const timer = setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  const focusStyle = (name: string): React.CSSProperties =>
    focused === name
      ? { ...inputBase, borderColor: GOLD, boxShadow: `0 0 0 3px ${GOLD}22` }
      : inputBase;

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 px-8" style={{ backgroundColor: "#ffffff", border: "1px solid #e2e0d8", borderTop: `3px solid ${GOLD}` }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${GREEN}10`, border: `2px solid ${GREEN}` }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="uppercase mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", letterSpacing: "0.05em", color: DARK }}>
          {lang === "fr" ? "Message envoyé" : "Message sent"}
        </h3>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#6b6b60" }}>
          {lang === "fr"
            ? "Merci pour votre message. Notre équipe vous répondra sous 48h ouvrées."
            : "Thank you for your message. Our team will reply within 48 business hours."}
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer"
          style={{ color: GOLD, background: "none", border: "none" }}
        >
          {lang === "fr" ? "← Envoyer un autre message" : "← Send another message"}
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6 p-6 md:p-8"
      style={{ backgroundColor: "#ffffff", border: "1px solid #e2e0d8", borderTop: `3px solid ${GOLD}` }}
      onSubmit={handleSubmit}
    >
      {/* Topic selector */}
      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: "#6b6b60" }}>
          {lang === "fr" ? "Sujet" : "Subject"} <span style={{ color: GOLD }}>*</span>
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {contactReasons.map((r) => {
            const active = topic === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setTopic(r.id)}
                className="flex flex-col items-start gap-2.5 px-4 py-4 cursor-pointer transition-all duration-200 text-left"
                style={active
                  ? { backgroundColor: GREEN, border: `1px solid ${GREEN}`, color: "#ffffff", transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(4,57,39,0.18)" }
                  : { backgroundColor: "#fafaf8", border: "1px solid #e2e0d8", color: "#0c0c0a" }
                }
              >
                <span style={{ color: active ? GOLD : GREEN }}>{r.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.1em] leading-tight">
                  {lang === "fr" ? r.label : r.label_en}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label={lang === "fr" ? "Prénom & Nom" : "Full Name"} required>
          <input
            type="text"
            required
            placeholder={lang === "fr" ? "Votre nom" : "Your name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 text-sm focus:outline-none transition-all duration-200"
            style={focusStyle("name")}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </Field>
        <Field label={lang === "fr" ? "Organisation" : "Organisation"}>
          <input
            type="text"
            placeholder={lang === "fr" ? "Université, entreprise..." : "University, company..."}
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full px-4 py-3 text-sm focus:outline-none transition-all duration-200"
            style={focusStyle("org")}
            onFocus={() => setFocused("org")}
            onBlur={() => setFocused(null)}
          />
        </Field>
      </div>

      <Field label="Email" required>
        <input
          type="email"
          required
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 text-sm focus:outline-none transition-all duration-200"
          style={focusStyle("email")}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
      </Field>

      <Field label="Message" required>
        <textarea
          rows={6}
          required
          placeholder={lang === "fr" ? "Décrivez votre projet ou votre demande..." : "Describe your project or request..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 text-sm focus:outline-none resize-none transition-all duration-200"
          style={focusStyle("message")}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </Field>

      {error && (
        <p className="text-sm px-4 py-3" style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer hover:opacity-90 disabled:opacity-60 disabled:cursor-wait"
        style={{ backgroundColor: GOLD, color: DARK }}
      >
        {sending
          ? (lang === "fr" ? "Envoi en cours..." : "Sending...")
          : (lang === "fr" ? "Envoyer le message" : "Send message")}
        {!sending && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>

    </form>
  );
}
