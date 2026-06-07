export interface League {
  key: "aufl" | "aubl" | "awbl";
  label: string;
  fullName: string;
  sport: string;
  accentColor: string;
  href: string;
  heroImage: string;
  heroAlt: string;
  tag: string;
  title: string;
  title_en: string;
  description: string;
  description_en: string;
  ctaLabel: string;
  ctaLabel_en: string;
  ctaHref: string;
  season: string;
  available: boolean;
  standings: { rank: number; university: string; wins: number; losses: number }[];
  matches: {
    id: string;
    date: string;
    day: string;
    homeTeam: string;
    awayTeam: string;
    time: string;
    venue: string;
    round: string;
    isHighlight?: boolean;
  }[];
  videos: {
    id: string;
    title: string;
    title_en: string;
    date: string;
    thumb: string;
    featured: boolean;
  }[];
  news: {
    id: string;
    category: string;
    title: string;
    title_en: string;
    excerpt: string;
    excerpt_en: string;
    date: string;
    image: string;
    featured: boolean;
  }[];
}

const IMG = {
  football1: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
  football2: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
  football3: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  football4: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
  basketball1: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
  basketball2: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
  basketball3: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
  video_football1: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
  video_football2: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
  video_football3: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
  video_basketball1: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
  video_basketball2: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
  video_basketball3: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
};

export const LEAGUES: League[] = [
  {
    key: "aufl",
    label: "AUFL",
    fullName: "African University Football League",
    sport: "Football",
    accentColor: "#c5a059",
    href: "/aufl",
    heroImage: "/hero-aufl-2.jpg",
    heroAlt: "Joueurs de football universitaire africain célébrant un but",
    tag: "African University Football League",
    title: "La Référence du Football Universitaire Africain",
    title_en: "The Reference of African University Football",
    description: "6 universités, 5 pays, une seule championne. L'AUFL porte le football universitaire africain vers l'excellence internationale.",
    description_en: "6 universities, 5 countries, one champion. AUFL elevates African university football to international excellence.",
    ctaLabel: "Découvrir la Saison 2026",
    ctaLabel_en: "Explore the 2026 Season",
    ctaHref: "/calendrier",
    season: "Saison 2026",
    available: true,
    standings: [
      { rank: 1, university: "Univ. Cheikh Anta Diop — Dakar",     wins: 5, losses: 0 },
      { rank: 2, university: "Univ. de Thiès",                      wins: 4, losses: 1 },
      { rank: 3, university: "Univ. de Cape Town — Afrique du Sud", wins: 2, losses: 3 },
      { rank: 4, university: "Univ. de Gambie",                     wins: 1, losses: 4 },
      { rank: 5, university: "Univ. Félix Houphouët-Boigny — Côte d'Ivoire", wins: 1, losses: 4 },
      { rank: 6, university: "Univ. Thomas Sankara — Burkina Faso", wins: 0, losses: 5 },
    ],
    matches: [
      { id: "1", date: "10", day: "Mar", homeTeam: "Univ. Cheikh Anta Diop", awayTeam: "Univ. de Gambie",  time: "15:00", venue: "Stade L.S. Senghor, Dakar", round: "Phase de groupes — GS-01" },
      { id: "2", date: "10", day: "Mar", homeTeam: "Univ. de Cape Town",    awayTeam: "Univ. Félix H-B",   time: "18:00", venue: "Stade L.S. Senghor, Dakar", round: "Phase de groupes — GS-02" },
      { id: "3", date: "12", day: "Mar", homeTeam: "Univ. de Thiès",         awayTeam: "Univ. Thomas Sankara",    time: "15:00", venue: "Stade L.S. Senghor, Dakar", round: "Phase de groupes — GS-03" },
      { id: "4", date: "12", day: "Mar", homeTeam: "Univ. Félix H-B",        awayTeam: "Univ. de Gambie",         time: "18:00", venue: "Stade L.S. Senghor, Dakar", round: "Phase de groupes — GS-04" },
      { id: "5", date: "20", day: "Mar", homeTeam: "TBD",                    awayTeam: "TBD",                     time: "15:00", venue: "Stade L.S. Senghor, Dakar", round: "Demi-finale 1" },
      { id: "6", date: "20", day: "Mar", homeTeam: "TBD",                    awayTeam: "TBD",                     time: "18:00", venue: "Stade L.S. Senghor, Dakar", round: "Demi-finale 2" },
      { id: "7", date: "25", day: "Mar", homeTeam: "TBD",                    awayTeam: "TBD",                     time: "18:00", venue: "Stade L.S. Senghor, Dakar", round: "Finale AUFL 2027", isHighlight: true },
    ],
    videos: [
      { id: "v1", title: "AUFL × Kigali | Finale de Conférence | Saison 1", title_en: "AUFL × Kigali | Conference Final | Season 1", date: "17 Mai 2026", thumb: IMG.video_football1, featured: true },
      { id: "v2", title: "Récap Conférence Ouest | AUFL Saison 1", title_en: "West Conference Recap | AUFL Season 1", date: "15 Mai 2026", thumb: IMG.video_football2, featured: false },
      { id: "v3", title: "Top 10 Actions | Conférence Sahel | Saison 1", title_en: "Top 10 Plays | Sahel Conference | Season 1", date: "13 Mai 2026", thumb: IMG.video_football3, featured: false },
    ],
    news: [
      { id: "n1", category: "AUFL", title: "Dakar s'impose en demi-finale", title_en: "Dakar wins semi-final", excerpt: "L'Université de Dakar s'est qualifiée pour la grande finale après une victoire convaincante.", excerpt_en: "University of Dakar qualified for the grand final after a convincing victory.", date: "20 Mai 2026", image: IMG.football1, featured: true },
      { id: "n2", category: "AUFL", title: "Le Caire renverse Lagos", title_en: "Cairo upsets Lagos", excerpt: "Un match spectaculaire qui propulse l'Université du Caire en finale.", excerpt_en: "A spectacular match sends University of Cairo to the final.", date: "20 Mai 2026", image: IMG.football2, featured: false },
      { id: "n3", category: "AUFL", title: "Finale confirmée à Kigali", title_en: "Final confirmed in Kigali", excerpt: "Le Kigali Pelé Stadium accueillera la grande finale le 25 mai.", excerpt_en: "Kigali Pelé Stadium will host the grand final on May 25.", date: "18 Mai 2026", image: IMG.football3, featured: false },
      { id: "n4", category: "AUFL", title: "Bilan de la phase de groupes", title_en: "Group stage review", excerpt: "Retour sur les performances des 8 universités pendant la phase de groupes.", excerpt_en: "A look back at the 8 universities' performances during the group stage.", date: "15 Mai 2026", image: IMG.football4, featured: false },
    ],
  },
  {
    key: "aubl",
    label: "AUBL",
    fullName: "African University Basketball League",
    sport: "Basketball",
    accentColor: "#3b82f6",
    href: "/aubl",
    heroImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1400&q=80",
    heroAlt: "Basketball universitaire africain",
    tag: "African University Basketball League",
    title: "Le Basketball Universitaire Africain à Son Plus Haut Niveau",
    title_en: "African University Basketball at Its Peak",
    description: "L'AUBL réunit les meilleures équipes de basketball masculin des universités africaines. Saison inaugurale 2027.",
    description_en: "AUBL brings together the best men's basketball teams from African universities. Inaugural season 2027.",
    ctaLabel: "Inscrire mon Université",
    ctaLabel_en: "Register My University",
    ctaHref: "/contact",
    season: "Saison 2027 — Bientôt",
    available: false,
    standings: [],
    matches: [],
    videos: [
      { id: "v1", title: "Présentation de l'AUBL — Saison 2027", title_en: "AUBL Presentation — 2027 Season", date: "1 Juin 2026", thumb: IMG.video_basketball1, featured: true },
      { id: "v2", title: "Pourquoi rejoindre l'AUBL ?", title_en: "Why join AUBL?", date: "28 Mai 2026", thumb: IMG.video_basketball2, featured: false },
      { id: "v3", title: "Basketball africain en plein essor", title_en: "African basketball on the rise", date: "25 Mai 2026", thumb: IMG.video_basketball3, featured: false },
    ],
    news: [
      { id: "n1", category: "AUBL", title: "L'AUBL annonce sa saison inaugurale", title_en: "AUBL announces inaugural season", excerpt: "La ligue de basketball masculin de l'AUL ouvre ses candidatures pour la saison 2027.", excerpt_en: "AUL's men's basketball league opens applications for the 2027 season.", date: "1 Juin 2026", image: IMG.basketball1, featured: true },
      { id: "n2", category: "AUBL", title: "12 universités candidates", title_en: "12 universities apply", excerpt: "Un engouement fort pour la première saison de l'AUBL avec des candidatures de 8 pays.", excerpt_en: "Strong interest for AUBL's first season with applications from 8 countries.", date: "30 Mai 2026", image: IMG.basketball2, featured: false },
      { id: "n3", category: "AUBL", title: "Format de compétition dévoilé", title_en: "Competition format unveiled", excerpt: "Phase de groupes, playoffs et finale — le format complet de l'AUBL 2027 est connu.", excerpt_en: "Group stage, playoffs and final — the full AUBL 2027 format is revealed.", date: "28 Mai 2026", image: IMG.basketball3, featured: false },
    ],
  },
  {
    key: "awbl",
    label: "AWBL",
    fullName: "African University Women's Basketball League",
    sport: "Basketball Féminin",
    accentColor: "#a855f7",
    href: "/awbl",
    heroImage: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1400&q=80",
    heroAlt: "Basketball féminin universitaire africain",
    tag: "African University Women's Basketball League",
    title: "Le Basketball Féminin Universitaire Africain",
    title_en: "African University Women's Basketball",
    description: "L'AWBL donne une scène nationale et continentale aux meilleures joueuses des universités africaines. Saison inaugurale 2027.",
    description_en: "AWBL gives national and continental stage to the best players from African universities. Inaugural season 2027.",
    ctaLabel: "Inscrire mon Université",
    ctaLabel_en: "Register My University",
    ctaHref: "/contact",
    season: "Saison 2027 — Bientôt",
    available: false,
    standings: [],
    matches: [],
    videos: [
      { id: "v1", title: "Présentation de l'AWBL — Saison 2027", title_en: "AWBL Presentation — 2027 Season", date: "1 Juin 2026", thumb: IMG.video_basketball1, featured: true },
      { id: "v2", title: "Pourquoi rejoindre l'AWBL ?", title_en: "Why join AWBL?", date: "28 Mai 2026", thumb: IMG.video_basketball2, featured: false },
      { id: "v3", title: "Le basketball féminin africain progresse", title_en: "African women's basketball grows", date: "25 Mai 2026", thumb: IMG.video_basketball3, featured: false },
    ],
    news: [
      { id: "n1", category: "AWBL", title: "L'AWBL annonce sa saison inaugurale", title_en: "AWBL announces inaugural season", excerpt: "La ligue de basketball féminin de l'AUL ouvre ses candidatures pour la saison 2027.", excerpt_en: "AUL's women's basketball league opens applications for the 2027 season.", date: "1 Juin 2026", image: IMG.basketball1, featured: true },
      { id: "n2", category: "AWBL", title: "Visibilité pour les athlètes féminines", title_en: "Visibility for women athletes", excerpt: "L'AWBL représente une opportunité historique pour les joueuses universitaires africaines.", excerpt_en: "AWBL represents a historic opportunity for African university women players.", date: "30 Mai 2026", image: IMG.basketball2, featured: false },
      { id: "n3", category: "AWBL", title: "Candidatures ouvertes jusqu'au 30 juin", title_en: "Applications open until June 30", excerpt: "Les universités peuvent soumettre leur candidature pour participer à l'AWBL 2027.", excerpt_en: "Universities can submit their application to participate in AWBL 2027.", date: "28 Mai 2026", image: IMG.basketball3, featured: false },
    ],
  },
];

export function getLeague(key: string): League | undefined {
  return LEAGUES.find((l) => l.key === key);
}
