import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const IMG = {
  a1: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
  a2: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
  a3: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  a4: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
  a5: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&q=80",
  a6: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
};

const categories = ["Tous", "Playoffs", "Statistiques", "Universités", "Histoire", "AUFL", "AUL"];

const articles = [
  {
    id: "playoffs-2026-singularite",
    tag: "Playoffs",
    title: "La singularité de chaque équipe abordant les Playoffs AUFL 2026",
    excerpt: "Chacune des huit universités restant en lice pour les Playoffs 2026 a disputé cinq matchs lors de la phase de groupes avec des résultats très contrastés.",
    date: "18 Mai 2026",
    readTime: "5 min",
    imageSrc: IMG.a1,
    featured: true,
  },
  {
    id: "classements-statistiques",
    tag: "Statistiques",
    title: "Les équipes en tête des classements statistiques à l'approche des Playoffs",
    excerpt: "Analyse des données clés : buts marqués, possession, passes décisives. Dakar domine, Nairobi surprend.",
    date: "16 Mai 2026",
    readTime: "4 min",
    imageSrc: IMG.a2,
    featured: false,
  },
  {
    id: "histoire-finales",
    tag: "Histoire",
    title: "Les finales décidées dans les dernières secondes — l'histoire de l'AUFL",
    excerpt: "Depuis la création de la ligue, plusieurs rencontres historiques ont basculé dans le temps additionnel — retour sur les moments les plus intenses.",
    date: "14 Mai 2026",
    readTime: "6 min",
    imageSrc: IMG.a3,
    featured: false,
  },
  {
    id: "brackets-playoffs",
    tag: "Playoffs",
    title: "Classements et brackets : tout savoir sur les Playoffs 2026",
    excerpt: "Comment les demi-finales ont été formées, quelles confrontations attendre et quel chemin mène à la finale de Kigali.",
    date: "13 Mai 2026",
    readTime: "3 min",
    imageSrc: IMG.a4,
    featured: false,
  },
  {
    id: "dakar-domination",
    tag: "Universités",
    title: "L'Université de Dakar — comment ils ont dominé la saison régulière",
    excerpt: "Avec un bilan de 14 victoires pour 2 défaites, Dakar s'impose comme le grand favori de ces Playoffs. Analyse de leur système de jeu et de leurs atouts.",
    date: "10 Mai 2026",
    readTime: "7 min",
    imageSrc: IMG.a5,
    featured: false,
  },
  {
    id: "kigali-finale",
    tag: "AUFL",
    title: "Le Kigali Pelé Stadium accueille la grande finale — tout ce qu'il faut savoir",
    excerpt: "Capacité, logistique, accès pour les supporters — le Rwanda se prépare à accueillir l'événement sportif universitaire africain le plus attendu.",
    date: "8 Mai 2026",
    readTime: "4 min",
    imageSrc: IMG.a6,
    featured: false,
  },
];

export default function ActualitesPage() {
  const featured = articles.find((a) => a.featured)!;
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      <Navbar />
      <PageHeader
        label="Médias & Actualités"
        title="Actualités"
        subtitle="Analyses, résultats, portraits d'équipes et coulisses de la première saison AUL / AUFL."
      />

      <main className="px-5 md:px-12 py-10 md:py-16" style={{ backgroundColor: "#fafaf8" }}>
        <div className="max-w-6xl mx-auto">

          {/* Category filters */}
          <div className="flex items-center gap-2 mb-8 md:mb-12 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="shrink-0 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] border transition-colors"
                style={i === 0
                  ? { backgroundColor: "#043927", borderColor: "#043927", color: "#ffffff" }
                  : { borderColor: "#e2e0d8", color: "#6b6b60" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          <Link href={`/actualites/${featured.id}`} className="block group mb-8 md:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 border overflow-hidden transition-colors" style={{ borderColor: "#e2e0d8" }}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.imageSrc} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center" style={{ backgroundColor: "#ffffff" }}>
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <span className="block w-6 h-[2px]" style={{ backgroundColor: "#c5a059" }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color: "#c5a059" }}>
                    À la une · {featured.tag}
                  </span>
                </div>
                <h2
                  className="uppercase leading-tight mb-3 md:mb-4 transition-colors"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 1.8rem)", letterSpacing: "0.03em", color: "#0c0c0a" }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm leading-relaxed mb-4 md:mb-6" style={{ color: "#6b6b60" }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "#6b6b60" }}>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime} de lecture</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {rest.map((article) => (
              <Link key={article.id} href={`/actualites/${article.id}`} className="group flex flex-col border overflow-hidden transition-colors" style={{ borderColor: "#e2e0d8", backgroundColor: "#ffffff" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.imageSrc} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="text-[9px] font-black uppercase tracking-[0.18em]" style={{ color: "#c5a059" }}>{article.tag}</span>
                  </div>
                  <h3
                    className="uppercase leading-tight mb-3 flex-1 transition-colors"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.03em", color: "#0c0c0a" }}
                  >
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest mt-auto pt-3" style={{ borderTop: "1px solid #e2e0d8", color: "#6b6b60" }}>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
