"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";

type Lang = "fr" | "en";
type Block = { type: "p" | "h2" | "h3" | "quote" | "list"; fr: string | string[]; en: string | string[] };

interface Article {
  id: string;
  tag: string;
  title: { fr: string; en: string };
  date: string;
  readTime: string;
  imageSrc: string;
  imageCaption?: { fr: string; en: string };
  author?: { fr: string; en: string };
  body: Block[];
}

const IMG = {
  a1: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=1200&q=80",
  a4: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80",
  a5: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&q=80",
};

const ARTICLES: Article[] = [
  {
    id: "ahmadou-wathie-fondateur-aul",
    tag: "AUL",
    title: {
      fr: "Ahmadou Wathie : « L'Afrique a le plus grand vivier de talents sportifs au monde »",
      en: "Ahmadou Wathie: « Africa has the largest pool of sports talent in the world »",
    },
    date: "1 Juin 2025",
    readTime: "6 min",
    imageSrc: "/ahmadou-wathie.jpg",
    imageCaption: {
      fr: "Ahmadou Wathie, Fondateur et Président de l'African University League (AUL)",
      en: "Ahmadou Wathie, Founder and President of the African University League (AUL)",
    },
    author: { fr: "Rédaction AUL", en: "AUL Editorial" },
    body: [
      { type: "p",
        fr: "Fondateur et Président de l'African University League, Ahmadou Wathie est à l'origine d'une des idées les plus ambitieuses du sport continental africain : créer un véritable écosystème sportif universitaire, structuré, professionnel et panafricain, à l'image des grandes ligues américaines ou européennes.",
        en: "Founder and President of the African University League, Ahmadou Wathie is the driving force behind one of the most ambitious ideas in African continental sport: creating a truly structured, professional and pan-African university sports ecosystem, modelled on the great American and European leagues." },
      { type: "h2", fr: "Une vision née d'un constat simple", en: "A vision born from a simple observation" },
      { type: "p",
        fr: "« L'Afrique compte 1 700 universités, plus de 10 millions d'étudiants répartis dans 54 pays. Ce vivier humain est extraordinaire — mais il n'existe aucune structure pour le canaliser dans le sport. C'est exactement ce vide que l'AUL est venue combler. »",
        en: "\"Africa has 1,700 universities, more than 10 million students across 54 countries. This human pool is extraordinary — but there is no structure to channel it into sport. That is exactly the void the AUL was created to fill.\"" },
      { type: "p",
        fr: "Ahmadou Wathie a fondé l'African University League avec une conviction forte : le sport universitaire est un levier de développement humain, de cohésion panafricaine et de rayonnement international. « Quand un étudiant sénégalais joue contre un étudiant burkinabé, ce n'est pas seulement un match de football — c'est une rencontre entre deux peuples, deux cultures, deux ambitions. »",
        en: "Ahmadou Wathie founded the African University League with a strong conviction: university sport is a lever for human development, pan-African cohesion and international reach. \"When a Senegalese student plays against a Burkinabe student, it is not just a football match — it is a meeting of two peoples, two cultures, two ambitions.\"" },
      { type: "h2", fr: "Trois ligues pour un même projet", en: "Three leagues, one shared project" },
      { type: "p",
        fr: "L'AUL ne se limite pas à un seul sport. Le projet initial comprend trois ligues distinctes, chacune avec ses propres règlements, son propre calendrier et sa propre identité :",
        en: "The AUL is not limited to a single sport. The initial project includes three distinct leagues, each with its own regulations, calendar and identity:" },
      { type: "list",
        fr: ["L'AUFL — African University Football League : la ligue de football universitaire, première compétition à lancer sa saison inaugurale en mars 2027 à Dakar.", "L'AUBL — African University Basketball League : la ligue de basketball masculin, dont la saison inaugurale est prévue pour 2027.", "L'AWBL — African University Women's Basketball League : la ligue de basketball féminin, pensée dès le départ pour garantir une place égale aux joueuses universitaires africaines."],
        en: ["AUFL — African University Football League: the university football league, the first to launch its inaugural season in March 2027 in Dakar.", "AUBL — African University Basketball League: the men's basketball league, with its inaugural season planned for 2027.", "AWBL — African University Women's Basketball League: the women's basketball league, designed from the outset to guarantee equal standing for female university athletes across Africa."] },
      { type: "h2", fr: "Dakar, point de départ d'une aventure continentale", en: "Dakar, the starting point of a continental adventure" },
      { type: "p",
        fr: "Le choix du Sénégal comme pays hôte de la première édition de l'AUFL n'est pas anodin. Dakar est une capitale sportive africaine, dotée d'infrastructures modernes comme le Stade Léopold Sédar Senghor. « Le Sénégal incarne à la fois la tradition sportive africaine et l'ambition moderne du continent. C'est le point de départ idéal. »",
        en: "The choice of Senegal as host country for the first AUFL edition is no accident. Dakar is an African sports capital, equipped with modern infrastructure such as the Léopold Sédar Senghor Stadium. \"Senegal embodies both Africa's sporting tradition and the continent's modern ambition. It is the ideal starting point.\"" },
      { type: "quote",
        fr: "« Mon rêve, c'est qu'un jour, les noms des champions de l'AUL résonnent aussi fort que ceux des grandes universités américaines. Que les scouts NBA, NFL ou européens viennent chercher les meilleurs talents dans nos universités africaines. »",
        en: "\"My dream is that one day the names of AUL champions ring as loudly as those of the great American universities. That NBA, NFL and European scouts come to find the best talent in our African universities.\"" },
      { type: "h2", fr: "Une feuille de route en trois phases", en: "A three-phase roadmap" },
      { type: "p",
        fr: "La vision d'Ahmadou Wathie s'inscrit dans une feuille de route ambitieuse sur quinze ans :",
        en: "Ahmadou Wathie's vision is set out in an ambitious fifteen-year roadmap:" },
      { type: "list",
        fr: ["Phase 1 (2025–2027) : Lancement au Sénégal et en Afrique de l'Ouest. Établissement des trois ligues, mise en place des règlements officiels, premières compétitions.", "Phase 2 (2028–2032) : Expansion continentale. Intégration de nouvelles universités d'Afrique du Nord, de l'Est et du Centre. Développement des partenariats médias.", "Phase 3 (2033–2040) : Vision panafricaine complète. 54 pays, des compétitions zonales, une Ligue des Champions Universitaire Africaine."],
        en: ["Phase 1 (2025–2027): Launch in Senegal and West Africa. Establishment of the three leagues, implementation of official regulations, first competitions.", "Phase 2 (2028–2032): Continental expansion. Integration of new universities from North, East and Central Africa. Development of media partnerships.", "Phase 3 (2033–2040): Full pan-African vision. 54 countries, zonal competitions, an African University Champions League."] },
      { type: "h2", fr: "Excellence, unité, formation", en: "Excellence, unity, development" },
      { type: "p",
        fr: "Les valeurs fondatrices de l'AUL — excellence académique et sportive, unité panafricaine, formation des jeunes, rayonnement médiatique — guident chaque décision. Les joueurs doivent être inscrits dans une université membre et respecter les critères d'éligibilité académique. Le sport universitaire, pour Ahmadou Wathie, ne peut pas être dissocié de la réussite scolaire.",
        en: "The AUL's founding values — academic and sporting excellence, pan-African unity, youth development, media reach — guide every decision. Players must be enrolled at a member university and meet academic eligibility criteria. For Ahmadou Wathie, university sport cannot be separated from academic success." },
    ],
  },
  {
    id: "aufl-2027-presentation",
    tag: "AUFL",
    title: {
      fr: "AUFL 2027 : 6 universités, 5 pays, une seule championne",
      en: "AUFL 2027: 6 universities, 5 countries, one champion",
    },
    date: "15 Jan 2027",
    readTime: "4 min",
    imageSrc: IMG.a1,
    imageCaption: { fr: "Les équipes de la première saison AUFL se préparent à Dakar", en: "Teams of the first AUFL season prepare in Dakar" },
    author: { fr: "Rédaction AUFL", en: "AUFL Editorial" },
    body: [
      { type: "p",
        fr: "La Ligue Africaine de Football Universitaire (AUFL) est prête à écrire la première page de son histoire. Du 10 au 25 mars 2027, six universités issues de cinq pays africains s'affrontent au Stade Léopold Sédar Senghor de Dakar pour décrocher le tout premier titre de l'AUFL.",
        en: "The African University Football League (AUFL) is ready to write the first page of its history. From 10 to 25 March 2027, six universities from five African countries compete at the Léopold Sédar Senghor Stadium in Dakar for the very first AUFL title." },
      { type: "h2", fr: "Les 6 universités participantes", en: "The 6 participating universities" },
      { type: "list",
        fr: ["Université Cheikh Anta Diop — Dakar, Sénégal (Groupe A)", "Université de Thiès — Thiès, Sénégal (Groupe A)", "Université de Cape Town — Afrique du Sud (Groupe B)", "Université de Gambie — Banjul, Gambie (Groupe A)", "Université Félix Houphouët-Boigny — Abidjan, Côte d'Ivoire (Groupe B)", "Université Thomas Sankara — Ouagadougou, Burkina Faso (Groupe A)"],
        en: ["Cheikh Anta Diop University — Dakar, Senegal (Group A)", "University of Thiès — Thiès, Senegal (Group A)", "University of Cape Town — South Africa (Group B)", "University of The Gambia — Banjul, Gambia (Group A)", "Félix Houphouët-Boigny University — Abidjan, Côte d'Ivoire (Group B)", "Thomas Sankara University — Ouagadougou, Burkina Faso (Group A)"] },
      { type: "h2", fr: "Le format de compétition", en: "Competition format" },
      { type: "list",
        fr: ["Phase de groupes (10–14 mars) : Les équipes s'affrontent dans deux groupes. Les deux premiers de chaque groupe se qualifient pour les demi-finales.", "Demi-finales (20 mars) : Les quatre équipes qualifiées s'affrontent en matchs à élimination directe au Stade L.S. Senghor.", "Finale (25 mars) : Le grand match décisif. Le champion sera couronné premier lauréat de l'histoire de l'AUFL."],
        en: ["Group stage (10–14 March): Teams compete in two groups. The top two from each group advance to the semi-finals.", "Semi-finals (20 March): The four qualified teams face off in knockout matches at Stade L.S. Senghor.", "Final (25 March): The decisive match. The champion will be crowned the first winner in AUFL history."] },
      { type: "quote",
        fr: "« L'AUFL 2027 est plus qu'un championnat. C'est la démonstration que l'Afrique peut organiser des compétitions sportives universitaires de niveau mondial. » — Ahmadou Wathie, Fondateur AUL",
        en: "\"AUFL 2027 is more than a championship. It is proof that Africa can organise world-class university sports competitions.\" — Ahmadou Wathie, AUL Founder" },
    ],
  },
  {
    id: "aubl-saison-2027",
    tag: "AUBL",
    title: {
      fr: "L'AUBL annonce sa saison inaugurale — les candidatures sont ouvertes",
      en: "AUBL announces its inaugural season — applications are open",
    },
    date: "1 Jun 2026",
    readTime: "3 min",
    imageSrc: "/logo-aubl.jpg",
    imageCaption: { fr: "African University Basketball League (AUBL) — Saison inaugurale 2027", en: "African University Basketball League (AUBL) — Inaugural Season 2027" },
    author: { fr: "Rédaction AUBL", en: "AUBL Editorial" },
    body: [
      { type: "p",
        fr: "L'African University Basketball League (AUBL) annonce officiellement l'ouverture des candidatures pour sa saison inaugurale 2027. Douze universités de huit pays africains ont déjà manifesté leur intérêt.",
        en: "The African University Basketball League (AUBL) officially announces the opening of applications for its inaugural 2027 season. Twelve universities from eight African countries have already expressed interest." },
      { type: "h2", fr: "Un nouveau chapitre pour le basketball africain", en: "A new chapter for African basketball" },
      { type: "p",
        fr: "« Le basketball africain a une énergie unique. L'AUBL veut être la scène qui révèle les futurs champions. » — Comité directeur AUBL",
        en: "\"African basketball has a unique energy. The AUBL wants to be the stage that reveals the future champions.\" — AUBL Board" },
      { type: "h2", fr: "Critères d'éligibilité", en: "Eligibility criteria" },
      { type: "list",
        fr: ["Être inscrit à temps plein dans une université membre de l'AUL", "Maintenir un GPA minimum de 2.5/4.0 (ou équivalent local)", "Avoir moins de 25 ans au début de la saison", "Ne pas être sous contrat professionnel actif"],
        en: ["Be enrolled full-time at an AUL member university", "Maintain a minimum GPA of 2.5/4.0 (or local equivalent)", "Be under 25 at the start of the season", "Not hold an active professional contract"] },
      { type: "h2", fr: "Comment candidater ?", en: "How to apply?" },
      { type: "p",
        fr: "Les universités souhaitant participer à l'AUBL 2027 doivent soumettre leur dossier de candidature complet avant le 30 septembre 2026.",
        en: "Universities wishing to participate in AUBL 2027 must submit their complete application file before 30 September 2026." },
    ],
  },
  {
    id: "awbl-saison-2027",
    tag: "AWBL",
    title: {
      fr: "L'AWBL ouvre ses candidatures — le basketball féminin universitaire africain prend son envol",
      en: "AWBL opens applications — African university women's basketball takes off",
    },
    date: "1 Jun 2026",
    readTime: "3 min",
    imageSrc: "/logo-awbl.jpg",
    imageCaption: { fr: "African University Women's Basketball League (AWBL) — Saison inaugurale 2027", en: "African University Women's Basketball League (AWBL) — Inaugural Season 2027" },
    author: { fr: "Rédaction AWBL", en: "AWBL Editorial" },
    body: [
      { type: "p",
        fr: "L'African University Women's Basketball League (AWBL) annonce officiellement l'ouverture des candidatures pour sa saison inaugurale 2027. Une étape historique pour le basketball féminin universitaire africain.",
        en: "The African University Women's Basketball League (AWBL) officially announces the opening of applications for its inaugural 2027 season. A historic milestone for African university women's basketball." },
      { type: "h2", fr: "Une ligue pensée dès le départ pour les femmes", en: "A league built for women from day one" },
      { type: "p",
        fr: "L'AWBL n'est pas un ajout secondaire — elle est une composante fondatrice du projet AUL, au même titre que l'AUFL et l'AUBL.",
        en: "The AWBL is not a secondary addition — it is a founding component of the AUL project, on an equal footing with the AUFL and AUBL." },
      { type: "list",
        fr: ["Plus de 200 équipes féminines universitaires actives recensées en Afrique", "Une popularité croissante dans les pays côtiers (Sénégal, Côte d'Ivoire, Ghana)", "Des joueuses africaines présentes dans les championnats européens et américains", "Une visibilité médiatique en forte hausse depuis les JO de Paris 2024"],
        en: ["Over 200 active women's university teams identified across Africa", "Growing popularity in coastal countries (Senegal, Côte d'Ivoire, Ghana)", "African players competing in European and American leagues", "Rapidly rising media visibility since the Paris 2024 Olympics"] },
      { type: "h2", fr: "Critères d'éligibilité AWBL", en: "AWBL eligibility criteria" },
      { type: "list",
        fr: ["Être inscrite à temps plein dans une université membre de l'AUL", "Avoir entre 18 et 25 ans au premier jour de la saison", "Ne pas être sous contrat avec un club professionnel actif", "Maintenir un GPA minimum de 2.5/4.0 ou équivalent local"],
        en: ["Be enrolled full-time at an AUL member university", "Be between 18 and 25 years old on the first day of the season", "Not hold an active professional club contract", "Maintain a minimum GPA of 2.5/4.0 or local equivalent"] },
      { type: "quote",
        fr: "« Chaque joueuse qui portera le maillot de son université en AWBL sera une ambassadrice — de son campus, de son pays, et de l'Afrique tout entière. » — Ahmadou Wathie, Fondateur AUL",
        en: "\"Every player who wears her university's jersey in the AWBL will be an ambassador — for her campus, her country, and the whole of Africa.\" — Ahmadou Wathie, AUL Founder" },
    ],
  },
  {
    id: "aul-ifl-partenariat",
    tag: "AUFL",
    title: {
      fr: "AUL × IFL : quand le football universitaire sénégalais s'organise pour conquérir l'Afrique",
      en: "AUL × IFL: how Senegalese university football is organising to conquer Africa",
    },
    date: "1 Jan 2026",
    readTime: "5 min",
    imageSrc: "/photo-football-league.jpg",
    imageCaption: { fr: "L'Institut Football League 2025-2026 — partenaire stratégique de l'AUL", en: "Institut Football League 2025-2026 — AUL's strategic partner" },
    author: { fr: "Rédaction AUL", en: "AUL Editorial" },
    body: [
      { type: "p",
        fr: "L'African University League (AUL) et l'Institut Football League (IFL), opéré par ADECAP Entertainment, ont noué un partenariat stratégique autour du développement du football universitaire. L'IFL, compétition pionnière en Afrique de l'Ouest réunissant 24 équipes, constitue un laboratoire grandeur nature dont l'AUL entend s'inspirer pour structurer l'AUFL à l'échelle continentale.",
        en: "The African University League (AUL) and the Institut Football League (IFL), operated by ADECAP Entertainment, have forged a strategic partnership around the development of university football. The IFL, a pioneering competition in West Africa bringing together 24 teams, is a real-life laboratory from which the AUL intends to draw inspiration for structuring the AUFL at a continental scale." },
      { type: "h2", fr: "L'IFL, un modèle qui a fait ses preuves", en: "The IFL: a proven model" },
      { type: "p",
        fr: "Le format, calqué sur le nouveau format de la Ligue des Champions UEFA, organise une phase de qualification (3 matchs par équipe), avant d'envoyer les 4 premiers de chaque poule directement en quart de finale, et les équipes classées 5e à 12e en barrages.",
        en: "The format, modelled on the new UEFA Champions League format, runs a qualification phase (3 matches per team), then sends the top 4 in each group directly to the quarter-finals, while teams ranked 5th to 12th enter a play-off round." },
      { type: "h2", fr: "Des terrains ancrés dans le tissu urbain dakarois", en: "Venues embedded in the Dakar urban fabric" },
      { type: "list",
        fr: ["Stade Mobile Mariste — Mariste, après le parc de Hann", "Stade de Grand Yoff — sur l'autoroute Patte d'Oie", "Stade Castor — derrière le marché de Castor", "Stade de Ngor — Ngor Yoff, derrière chez Katia", "Stade Alassane Djigo — Pikine", "Stade Guédiawaye", "Certains matchs se jouent également à Thiès"],
        en: ["Stade Mobile Mariste — Mariste, past Parc de Hann", "Stade de Grand Yoff — on the Patte d'Oie motorway", "Stade Castor — behind Castor market", "Stade de Ngor — Ngor Yoff, behind Chez Katia", "Stade Alassane Djigo — Pikine", "Stade Guédiawaye", "Some matches are also played in Thiès"] },
      { type: "h2", fr: "Éligibilité, frais et récompenses", en: "Eligibility, fees and prizes" },
      { type: "p",
        fr: "Les équipes s'acquittent de 150 000 FCFA de frais de participation. Les récompenses : 500 000 FCFA pour le vainqueur, 200 000 FCFA pour le finaliste, trophée Équipe Championne, prix du Meilleur Coach, Meilleur Joueur, Meilleur Gardien, Équipe la plus Fair-Play, et dîner de gala de clôture.",
        en: "Teams pay a 150,000 FCFA participation fee. Prizes include: 500,000 FCFA for the winner, 200,000 FCFA for the runner-up, Champions Trophy, Best Coach, Best Player, Best Goalkeeper, Most Fair-Play Team awards, and a closing gala dinner." },
      { type: "quote",
        fr: "« L'IFL démontre que le football universitaire peut être organisé de façon professionnelle, transparente et à impact social réel. C'est exactement l'ADN que l'AUL veut porter à l'échelle du continent. » — Ahmadou Wathie, Fondateur AUL",
        en: "\"The IFL shows that university football can be run in a professional, transparent way with real social impact. That is exactly the DNA the AUL wants to carry across the continent.\" — Ahmadou Wathie, AUL Founder" },
    ],
  },
  {
    id: "format-aufl-reglement",
    tag: "AUFL",
    title: {
      fr: "Le règlement officiel de l'AUFL — tout ce que vous devez savoir",
      en: "The official AUFL rulebook — everything you need to know",
    },
    date: "1 Fév 2027",
    readTime: "7 min",
    imageSrc: IMG.a4,
    imageCaption: { fr: "Le règlement officiel de l'AUFL, saison inaugurale 2027", en: "The official AUFL rulebook, inaugural 2027 season" },
    author: { fr: "Département Réglementaire AUL", en: "AUL Regulations Department" },
    body: [
      { type: "p",
        fr: "Éligibilité des joueurs, système de points, protocoles d'avant-match — tout ce que vous devez savoir pour suivre et comprendre le championnat.",
        en: "Player eligibility, points system, pre-match protocols — everything you need to know to follow and understand the championship." },
      { type: "h2", fr: "Éligibilité des joueurs", en: "Player eligibility" },
      { type: "list",
        fr: ["Être inscrit à temps plein dans une université membre de l'AUFL pour l'année académique en cours", "Avoir entre 18 et 25 ans au premier jour de la saison", "Ne pas être sous contrat avec un club professionnel", "Satisfaire aux exigences académiques minimales (GPA ≥ 2.5/4.0 ou équivalent)", "Avoir la nationalité d'un pays africain ou être résident permanent d'un pays africain"],
        en: ["Be enrolled full-time at an AUFL member university for the current academic year", "Be between 18 and 25 years old on the first day of the season", "Not hold a professional club contract", "Meet minimum academic requirements (GPA ≥ 2.5/4.0 or equivalent)", "Hold African nationality or permanent residency in an African country"] },
      { type: "h2", fr: "Format de compétition", en: "Competition format" },
      { type: "list",
        fr: ["Phase de groupes : 6 équipes en deux groupes. 3 points pour une victoire, 1 pour un nul, 0 pour une défaite.", "Demi-finales : Les 2 premiers de chaque groupe se qualifient. Matchs à élimination directe, prolongations et tirs au but si nécessaire.", "Finale : Les deux demi-finalistes victorieux s'affrontent pour le titre."],
        en: ["Group stage: 6 teams in two groups. 3 points for a win, 1 for a draw, 0 for a loss.", "Semi-finals: The top 2 from each group qualify. Knockout matches, extra time and penalties if required.", "Final: The two winning semi-finalists compete for the title."] },
      { type: "h2", fr: "Fair-play et discipline", en: "Fair play and discipline" },
      { type: "p",
        fr: "L'AUFL accorde une importance particulière au fair-play. En cas d'égalité au classement général, le fair-play est le premier critère de départage. Les sanctions disciplinaires suivent le règlement FIFA adapté au contexte universitaire.",
        en: "The AUFL places particular importance on fair play. In the event of a tie in the general standings, fair play is the first tiebreaker. Disciplinary sanctions follow FIFA regulations adapted for the university context." },
      { type: "quote",
        fr: "« Le règlement de l'AUFL a été conçu pour promouvoir l'excellence sportive tout en protégeant la dimension académique du projet. L'étudiant-athlète est notre priorité. » — Comité Réglementaire AUL",
        en: "\"The AUFL regulations were designed to promote sporting excellence while protecting the academic dimension of the project. The student-athlete is our priority.\" — AUL Regulatory Committee" },
    ],
  },
  {
    id: "dakar-ville-hote",
    tag: "AUFL",
    title: {
      fr: "Dakar, ville hôte de l'AUFL 2027 — le Stade L.S. Senghor au cœur de l'histoire",
      en: "Dakar, host city of AUFL 2027 — Stade L.S. Senghor at the heart of history",
    },
    date: "20 Jan 2027",
    readTime: "4 min",
    imageSrc: IMG.a5,
    imageCaption: { fr: "Le Stade Léopold Sédar Senghor de Dakar, enceinte principale de l'AUFL 2027", en: "The Léopold Sédar Senghor Stadium in Dakar, main venue for AUFL 2027" },
    author: { fr: "Rédaction AUL", en: "AUL Editorial" },
    body: [
      { type: "p",
        fr: "Dakar. La ville de la Teranga, capitale du Sénégal, accueille l'édition inaugurale de la Ligue Africaine de Football Universitaire. Un choix chargé de symboles et de sens pour le projet AUL.",
        en: "Dakar. The city of Teranga, capital of Senegal, hosts the inaugural edition of the African University Football League. A choice laden with symbolism and meaning for the AUL project." },
      { type: "h2", fr: "Pourquoi Dakar ?", en: "Why Dakar?" },
      { type: "p",
        fr: "Le Sénégal est l'un des pays africains les plus avancés en matière de sport universitaire. Ses universités disposent d'équipes sportives structurées, de terrains homologués et d'une culture sportive forte.",
        en: "Senegal is one of Africa's most advanced countries in university sport. Its universities have structured sports teams, certified pitches and a strong sporting culture." },
      { type: "h2", fr: "Le Stade Léopold Sédar Senghor", en: "The Léopold Sédar Senghor Stadium" },
      { type: "list",
        fr: ["Capacité : 60 000 places", "Pelouse : gazon naturel aux normes FIFA", "Éclairage : adapté aux matchs en soirée (18h00)", "Infrastructures médias : cabines de commentaires, zone mixte, salle de conférence de presse"],
        en: ["Capacity: 60,000 seats", "Pitch: natural grass to FIFA standards", "Lighting: adapted for evening matches (18:00)", "Media facilities: commentary booths, mixed zone, press conference room"] },
      { type: "quote",
        fr: "« Jouer au Stade L.S. Senghor, c'est jouer dans un temple du football africain. Pour nos étudiants-athlètes, c'est une expérience qui les marquera à vie. » — Ahmadou Wathie",
        en: "\"Playing at Stade L.S. Senghor means playing in a temple of African football. For our student-athletes, it is an experience that will stay with them for life.\" — Ahmadou Wathie" },
      { type: "h2", fr: "Un héritage pour le futur", en: "A legacy for the future" },
      { type: "p",
        fr: "Au-delà de l'événement sportif, la tenue de l'AUFL 2027 à Dakar laissera un héritage durable : partenariats avec les universités locales, formation d'arbitres et d'encadrants, modèle d'organisation reproductible pour les futures villes hôtes.",
        en: "Beyond the sporting event, holding AUFL 2027 in Dakar will leave a lasting legacy: partnerships with local universities, training for referees and coaches, and an organisational model that future host cities can replicate." },
    ],
  },
];

function ArticleBody({ body, lang }: { body: Block[]; lang: Lang }) {
  return (
    <div className="article-body">
      {body.map((block, i) => {
        if (block.type === "p") return (
          <p key={i} className="mb-5 leading-relaxed text-base" style={{ color: "#3a3a35" }}>
            {block[lang] as string}
          </p>
        );
        if (block.type === "h2") return (
          <h2 key={i} className="uppercase mt-10 mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", letterSpacing: "0.05em", color: "#0c0c0a" }}>
            {block[lang] as string}
          </h2>
        );
        if (block.type === "h3") return (
          <h3 key={i} className="uppercase mt-7 mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.05em", color: "#0c0c0a" }}>
            {block[lang] as string}
          </h3>
        );
        if (block.type === "quote") return (
          <blockquote key={i} className="my-8 pl-6 py-1" style={{ borderLeft: "3px solid #c5a059" }}>
            <p className="text-base italic leading-relaxed" style={{ color: "#3a3a35" }}>{block[lang] as string}</p>
          </blockquote>
        );
        if (block.type === "list") return (
          <ul key={i} className="mb-6 pl-5 space-y-2">
            {(block[lang] as string[]).map((item, j) => (
              <li key={j} className="text-sm leading-relaxed flex gap-3" style={{ color: "#3a3a35" }}>
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#c5a059" }} />
                {item}
              </li>
            ))}
          </ul>
        );
        return null;
      })}
    </div>
  );
}

export default function ArticlePage() {
  const params = useParams();
  const { lang } = useLang();
  const id = params?.id as string;
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fafaf8" }}>
      <div className="text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#c5a059" }}>404</p>
        <h1 className="uppercase mb-6" style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "#0c0c0a" }}>
          {lang === "fr" ? "Article introuvable" : "Article not found"}
        </h1>
        <Link href="/actualites" className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#c5a059" }}>
          {lang === "fr" ? "← Retour aux actualités" : "← Back to news"}
        </Link>
      </div>
    </div>
  );

  const backLabel = lang === "fr" ? "Retour aux actualités" : "Back to news";
  const readLabel = lang === "fr" ? "de lecture" : "read";

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: "#fafaf8" }}>
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: "520px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.imageSrc} alt={article.title[lang]} className="w-full object-cover" style={{ maxHeight: "520px", objectPosition: "center" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,57,39,0.7) 0%, transparent 60%)" }} />
        </div>

        <div className="px-5 md:px-12 py-10 md:py-16">
          <div className="max-w-3xl mx-auto">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#6b6b60" }}>
              <Link href="/actualites" className="hover:text-[#c5a059] transition-colors">
                {lang === "fr" ? "Actualités" : "News"}
              </Link>
              <span>›</span>
              <span style={{ color: "#c5a059" }}>{article.tag}</span>
            </div>

            {/* Header */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-[2px]" style={{ backgroundColor: "#c5a059" }} />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: "#c5a059" }}>{article.tag}</span>
              </div>
              <h1 className="uppercase leading-tight mb-5" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "0.03em", color: "#0c0c0a" }}>
                {article.title[lang]}
              </h1>
              <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6b6b60" }}>
                {article.author && <span>{article.author[lang]}</span>}
                {article.author && <span>·</span>}
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime} {readLabel}</span>
              </div>
            </div>

            <div className="mb-8 md:mb-10" style={{ borderTop: "1px solid #e2e0d8" }} />

            <ArticleBody body={article.body} lang={lang} />

            {article.imageCaption && (
              <p className="mt-2 mb-8 text-[10px] font-semibold uppercase tracking-widest text-center" style={{ color: "#9b9b90" }}>
                {article.imageCaption[lang]}
              </p>
            )}

            {/* Back link */}
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid #e2e0d8" }}>
              <Link href="/actualites" className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors" style={{ color: "#c5a059" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                {backLabel}
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
