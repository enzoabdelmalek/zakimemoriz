import Link from "next/link";
import { categories } from "@/lib/data";

export default function HomePage() {
    return (
        <div className="page">
            {/* ─── Hero ─── */}
            <section className="hero">
                <p className="hero-label">Photographe · Paris</p>
                <h1 className="hero-title">
                    Reportage.<br />
                    <span>Événementiel.</span><br />
                    <em>Portrait.</em>
                </h1>

                <div className="hero-body">
                    <p>
                        zakimemoriz est un photographe basé à Paris, spécialisé dans la
                        captation d'instants authentiques. Des backstages aux scènes,
                        des tribunes aux pelouses — il documente ce que les autres manquent.
                    </p>
                    <p>
                        Son travail se distingue par une approche discrète et précise :
                        être là au bon moment, avec le bon cadre. Pas de mise en scène,
                        pas d'artifice — seulement la lumière, le sujet et l'instant.
                    </p>
                    <p>
                        Collaborations avec des artistes, des clubs sportifs et des marques
                        internationales. Chaque projet est abordé avec la même exigence,
                        qu'il s'agisse d'un concert à l'Accor Arena ou d'un match de Ligue des Champions.
                    </p>
                </div>

                <Link href="/projets" className="hero-cta">
                    Voir les projets →
                </Link>
            </section>

            {/* ─── 1 photo par projet ─── */}
            <div className="home-photos">
                {categories.map((cat) => (
                    <div key={cat.slug} className="home-photo">
                        <img src={cat.photos[0].src} alt={cat.title} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
