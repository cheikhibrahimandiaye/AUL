import { NextResponse } from "next/server";
import { Resend } from "resend";

const TOPICS: Record<string, string> = {
  partenariat: "Devenir Partenaire",
  universite: "Inscrire mon Université",
  media: "Médias & Presse",
  autre: "Autre demande",
};

export async function POST(request: Request) {
  let body: { topic?: string; name?: string; organization?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { topic, name, organization, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200 || (organization?.length ?? 0) > 200) {
    return NextResponse.json({ error: "Contenu trop long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const partnershipEmail = process.env.PARTNERSHIP_EMAIL ?? contactEmail;
  if (!apiKey || !contactEmail) {
    console.error("RESEND_API_KEY ou CONTACT_EMAIL manquant dans les variables d'environnement.");
    return NextResponse.json({ error: "Service email non configuré." }, { status: 500 });
  }

  // Les demandes de partenariat vont à l'équipe partenariats, le reste au contact général
  const to = topic === "partenariat" ? partnershipEmail! : contactEmail;

  const topicLabel = TOPICS[topic ?? ""] ?? "Autre demande";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    // Adresse par défaut de Resend — remplacer par contact@votre-domaine une fois le domaine vérifié
    from: "AUL Site Web <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `[AUL Contact] ${topicLabel} — ${name}`,
    text: [
      `Sujet : ${topicLabel}`,
      `Nom : ${name}`,
      `Organisation : ${organization || "—"}`,
      `Email : ${email}`,
      "",
      "Message :",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Erreur Resend :", error);
    return NextResponse.json({ error: "L'envoi a échoué. Réessayez plus tard." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
