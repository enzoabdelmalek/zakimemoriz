import Link from "next/link";
import { categories } from "@/lib/data";

export default function HomePage() {
    return (
        <div className="page">
            {/* ─── Hero banner ─── */}
            <section className="hero-banner">
                <img
                    src="/assets/PSG finale/IMG_7660.JPG"
                    alt="zakimemoriz"
                    className="hero-banner-img"
                />
                <div className="hero-banner-overlay" />
                <div className="hero-banner-content">
                    <p className="hero-label">Photographe · Paris</p>
                    <h1 className="hero-title">
                        Événementiel / Lifestyle.<br />
                        <span>Portrait / Instants.</span><br />
                        <em>Reportage / Émotion.</em>
                    </h1>
                    <Link href="/projets" className="hero-cta">
                        Voir les projets →
                    </Link>
                </div>
            </section>

            {/* ─── Description pleine largeur ─── */}
            <section className="hero-desc">
                <p className="anim">
                    Basé à Paris, Zakimemoriz développe une approche sensible et spontanée
                    de la photographie, guidée par une idée simple : mettre le temps sur pause.
                    À travers chaque image, il cherche à capturer ce qui disparaît en quelques
                    secondes — un regard, un mouvement, une émotion, une présence. Des détails
                    souvent invisibles sur l'instant, mais qui deviennent des souvenirs pour toujours.
                </p>
                <p className="anim anim-d2">
                    Inspiré par l'énergie du sport, de la musique et des scènes du quotidien,
                    son travail se construit autour d'images vivantes et sincères. Pas de moments
                    forcés, seulement des émotions réelles figées dans le temps.
                </p>
            </section>

            {/* ─── 1 photo par projet ─── */}
            <div className="home-photos">
                {categories.map((cat, i) => (
                    <div key={cat.slug} className={`home-photo anim anim-d${Math.min(i + 1, 4) as 1 | 2 | 3 | 4}`}>
                        <img src={cat.photos[0].src} alt={cat.title} loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
