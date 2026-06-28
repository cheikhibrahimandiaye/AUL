export interface League {
  key: "aufl" | "aubl" | "awbl";
  label: string;
  fullName: string;
  sport: string;
  accentColor: string;
  href: string;
  heroImage: string;
  heroImageMobile?: string;
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
    heroImageMobile: "/hero-aufl-2-mobile.jpg",
    heroAlt: "Joueurs de football universitaire africain célébrant un but",
    tag: "African University Football League",
    title: "La Référence du Football Universitaire Africain",
    title_en: "The Reference of African University Football",
    description: "6 universités, 5 pays, une seule championne. L'AUFL porte le football universitaire africain vers l'excellence internationale.",
    description_en: "6 universities, 5 countries, one champion. AUFL elevates African university football to international excellence.",
    ctaLabel: "Découvrir la Saison 2027",
    ctaLabel_en: "Explore the 2027 Season",
    ctaHref: "/calendrier",
    season: "Saison 2027",
    available: true,
    standings: [
      { rank: 1, university: "Univ. Cheikh Anta Diop — Dakar",     wins: 0, losses: 0 },
      { rank: 2, university: "Univ. de Thiès",                      wins: 0, losses: 0 },
      { rank: 3, university: "Univ. de Cape Town — Afrique du Sud", wins: 0, losses: 0 },
      { rank: 4, university: "Univ. de Gambie",                     wins: 0, losses: 0 },
      { rank: 5, university: "Univ. Félix Houphouët-Boigny — Côte d'Ivoire", wins: 0, losses: 0 },
      { rank: 6, university: "Univ. Thomas Sankara — Burkina Faso", wins: 0, losses: 0 },
    ],
    matches: [
      { id: "1", date: "—", day: "2027", homeTeam: "TBD", awayTeam: "TBD", time: "—", venue: "Stade L.S. Senghor, Dakar", round: "Saison inaugurale 2027", isHighlight: true },
    ],
    videos: [
      { id: "v1", title: "Présentation de l'AUFL — Saison inaugurale 2027", title_en: "AUFL Presentation — Inaugural Season 2027", date: "1 Juin 2026", thumb: "/photo-aufl-2027.jpg", featured: true },
      { id: "v2", title: "Dakar, ville hôte de l'AUFL 2027", title_en: "Dakar, host city of AUFL 2027", date: "28 Mai 2026", thumb: "/photo-dakar.jpg", featured: false },
      { id: "v3", title: "AUL × IFL : le football universitaire en action", title_en: "AUL × IFL: university football in action", date: "25 Mai 2026", thumb: "/photo-football-league.jpg", featured: false },
    ],
    news: [
      { id: "aufl-2027-presentation", category: "AUFL", title: "AUFL 2027 : 6 universités, 5 pays, une seule championne", title_en: "AUFL 2027: 6 universities, 5 countries, one champion", excerpt: "La Ligue Africaine de Football Universitaire lance son édition inaugurale en mars 2027 à Dakar.", excerpt_en: "The African University Football League launches its inaugural edition in March 2027 in Dakar.", date: "15 Jan 2027", image: "/photo-aufl-2027.jpg", featured: true },
      { id: "aul-ifl-partenariat", category: "AUFL", title: "AUL × IFL : un partenariat pour conquérir l'Afrique", title_en: "AUL × IFL: a partnership to conquer Africa", excerpt: "L'AUL et l'Institut Football League s'allient autour du développement du football universitaire.", excerpt_en: "AUL and the Institut Football League join forces around university football development.", date: "1 Jan 2026", image: "/photo-football-league.jpg", featured: false },
      { id: "dakar-ville-hote", category: "AUFL", title: "Dakar, ville hôte de l'AUFL 2027", title_en: "Dakar, host city of AUFL 2027", excerpt: "Le Stade L.S. Senghor accueillera l'édition inaugurale de la Ligue Africaine de Football Universitaire.", excerpt_en: "Stade L.S. Senghor will host the inaugural edition of the African University Football League.", date: "20 Jan 2027", image: "/photo-dakar.jpg", featured: false },
      { id: "format-aufl-reglement", category: "AUFL", title: "Le règlement officiel de l'AUFL", title_en: "The official AUFL rulebook", excerpt: "Éligibilité des joueurs, système de points, format de compétition — tout ce qu'il faut savoir.", excerpt_en: "Player eligibility, points system, competition format — everything you need to know.", date: "1 Fév 2027", image: "/logo-aul.jpg", featured: false },
    ],
  },
  {
    key: "aubl",
    label: "AUBL",
    fullName: "African University Basketball League",
    sport: "Basketball",
    accentColor: "#3b82f6",
    href: "/aubl",
    heroImage: "/hero-aubl.jpg",
    heroImageMobile: "/hero-aubl-mobile.jpg",
    heroAlt: "Basketball universitaire africain",
    tag: "African University Basketball League",
    title: "Le Basketball Universitaire Africain",
    title_en: "African University Basketball",
    description: "L'AUBL réunit les meilleures équipes de basketball masculin des universités africaines. Saison inaugurale 2027.",
    description_en: "AUBL brings together the best men's basketball teams from African universities. Inaugural season 2027.",
    ctaLabel: "Inscrire mon Université",
    ctaLabel_en: "Register My University",
    ctaHref: "/contact?sujet=universite#contact-form",
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
      { id: "aubl-saison-2027", category: "AUBL", title: "L'AUBL annonce sa saison inaugurale", title_en: "AUBL announces inaugural season", excerpt: "La ligue de basketball masculin de l'AUL ouvre ses candidatures pour la saison 2027.", excerpt_en: "AUL's men's basketball league opens applications for the 2027 season.", date: "1 Juin 2026", image: "/photo-aubl-article.jpg", featured: true },
      { id: "ahmadou-wathie-fondateur-aul", category: "AUL", title: "Ahmadou Wathie : « L'Afrique a le plus grand vivier de talents sportifs au monde »", title_en: "Ahmadou Wathie: « Africa has the largest pool of sports talent in the world »", excerpt: "Le fondateur de l'AUL revient sur la genèse du projet et sa vision pour les trois ligues.", excerpt_en: "The AUL founder looks back at the project's origins and his vision for the three leagues.", date: "1 Juin 2025", image: "/ahmadou-wathie.jpg", featured: false },
      { id: "awbl-saison-2027", category: "AWBL", title: "L'AWBL ouvre ses candidatures", title_en: "AWBL opens applications", excerpt: "Le basketball féminin universitaire africain prend son envol avec la saison inaugurale 2027.", excerpt_en: "African university women's basketball takes off with the inaugural 2027 season.", date: "1 Juin 2026", image: "/photo-awbl-article.jpg", featured: false },
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
    ctaHref: "/contact?sujet=universite#contact-form",
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
      { id: "awbl-saison-2027", category: "AWBL", title: "L'AWBL annonce sa saison inaugurale", title_en: "AWBL announces inaugural season", excerpt: "La ligue de basketball féminin de l'AUL ouvre ses candidatures pour la saison 2027.", excerpt_en: "AUL's women's basketball league opens applications for the 2027 season.", date: "1 Juin 2026", image: "/photo-awbl-article.jpg", featured: true },
      { id: "ahmadou-wathie-fondateur-aul", category: "AUL", title: "Ahmadou Wathie : « L'Afrique a le plus grand vivier de talents sportifs au monde »", title_en: "Ahmadou Wathie: « Africa has the largest pool of sports talent in the world »", excerpt: "Le fondateur de l'AUL revient sur la genèse du projet et sa vision pour les trois ligues.", excerpt_en: "The AUL founder looks back at the project's origins and his vision for the three leagues.", date: "1 Juin 2025", image: "/ahmadou-wathie.jpg", featured: false },
      { id: "aubl-saison-2027", category: "AUBL", title: "L'AUBL annonce sa saison inaugurale", title_en: "AUBL announces inaugural season", excerpt: "La ligue de basketball masculin de l'AUL ouvre ses candidatures pour la saison 2027.", excerpt_en: "AUL's men's basketball league opens applications for the 2027 season.", date: "1 Juin 2026", image: "/photo-aubl-article.jpg", featured: false },
    ],
  },
];

export function getLeague(key: string): League | undefined {
  return LEAGUES.find((l) => l.key === key);
}
