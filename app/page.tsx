import Link from "next/link";
import { categories } from "@/lib/data";

export default function HomePage() {
    const total = categories.reduce((acc, c) => acc + c.photos.length, 0);

    return (
        <div className="page">
            {/* ─── Hero intro ─── */}
            <section className="hero">
                <div className="hero-inner">
                    <div className="hero-left">
                        <p className="hero-label">Photographe · Paris</p>
                        <h1 className="hero-title">
                            Capturer<br />
                            l'instant<br />
                            <em>juste.</em>
                        </h1>
                    </div>
                    <div className="hero-right">
                        <p className="hero-desc">
                            Spécialisé en reportage événementiel et portrait,
                            zakimemoriz immortalise les moments qui comptent —
                            des coulisses aux premières loges.
                        </p>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-num">{categories.length}</span>
                                <span className="hero-stat-label">Projets</span>
                            </div>
                            <div className="hero-stat-divider" />
                            <div className="hero-stat">
                                <span className="hero-stat-num">{total}+</span>
                                <span className="hero-stat-label">Photos</span>
                            </div>
                        </div>
                        <Link href="/projets" className="hero-cta">
                            Voir tous les projets →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Label avant grille ─── */}
            <div className="grid-label">
                <span>Sélection</span>
                <div className="grid-label-line" />
            </div>

            {/* ─── Grille projets ─── */}
            <div className="category-grid">
                {categories.map((cat, i) => (
                    <Link
                        key={cat.slug}
                        href={`/projets/${cat.slug}`}
                        className={`category-item${i === 0 ? " featured" : ""}`}
                    >
                        <img src={cat.cover} alt={cat.title} />
                        <div className="category-item-overlay">
                            <p className="category-item-title">{cat.title}</p>
                            <p className="category-item-count">{cat.photos.length} photos</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
