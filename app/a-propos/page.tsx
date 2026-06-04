import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "À propos" };

export default function AProposPage() {
    return (
        <div className="page">

            {/* ─── Intro ─── */}
            <section className="about-intro">
                <p className="about-label">À propos</p>
                <h1 className="about-title">
                    Celui qui fige<br />
                    <em>les instants.</em>
                </h1>
            </section>

            {/* ─── Texte 1 — pleine largeur ─── */}
            <section className="about-text-block anim">
                <p className="about-section-label">Identité</p>
                <div className="about-text-cols">
                    <p>
                        Je suis Zakimemoriz — Zacharia ou Zaki pour les intimes — photographe basé à Paris.
                        Je capture ce qui échappe au regard : les regards qui passent, les mouvements
                        spontanés, les émotions brutes.
                    </p>
                    <p>
                        Ce qui m'intéresse, ce n'est pas de construire une image, mais de saisir un instant
                        tel qu'il existe, avant qu'il disparaisse. Entre portrait et événementiel, j'évolue
                        dans des environnements vivants où tout se joue rapidement — j'observe, j'attends,
                        je déclenche au bon moment pour transformer des fragments de réalité en souvenirs durables.
                    </p>
                </div>
            </section>

            {/* ─── Photo 1 (gauche) + Texte 2 (droite) ─── */}
            <section className="about-photo-text anim">
                <div className="about-photo-placeholder">
                    <span>Photo à venir</span>
                </div>
                <div className="about-photo-text-side">
                    <p className="about-section-label">Parcours</p>
                    <p>
                        J'ai appris la photographie seul, et j'apprends encore aujourd'hui.
                        Tout a commencé simplement, avec un téléphone, en capturant ce qui m'entourait
                        au quotidien. Petit à petit, cette habitude est devenue une manière de voir le monde
                        autrement — de faire attention aux détails, aux regards, aux moments qui passent sans
                        qu'on y pense.
                    </p>
                    <p>
                        Je me suis ensuite invité dans des événements, et j'ai continué à photographier dans
                        la rue, au contact des gens et des situations spontanées. C'est dans ces environnements
                        imprévisibles que j'ai développé mon approche : observer, m'adapter et capturer ce qui
                        est vrai sur l'instant.
                    </p>
                </div>
            </section>

            {/* ─── Texte 3 — pleine largeur ─── */}
            <section className="about-text-block anim">
                <p className="about-section-label">Approche</p>
                <div className="about-text-cols">
                    <p>
                        Ma manière de travailler repose sur l'adaptation et l'observation. Chaque lieu et
                        chaque moment demande une approche différente. Je me place dans le réel, j'analyse
                        la scène, puis je m'ajuste pour capter ce qui se joue naturellement.
                    </p>
                    <p>
                        Je travaille en lumière naturelle, en milieu réel. Pas de studio, pas de mise en scène.
                        Juste la vie telle qu'elle est, capturée avant qu'elle ne passe.
                    </p>
                </div>
            </section>

            {/* ─── Texte 4 (gauche) + Photo 2 (droite) ─── */}
            <section className="about-photo-text reversed anim">
                <div className="about-photo-text-side">
                    <p className="about-section-label">Vision</p>
                    <p>
                        Chaque projet est une nouvelle façon de voir. La photographie est propre à chacun,
                        et aucune situation ne se répète vraiment — ni les lieux, ni les lumières, ni les émotions.
                    </p>
                    <p>
                        Je cherche toujours l'image qui dit plus que ce qu'elle montre.
                        Celle qu'on regarde deux fois.
                    </p>
                    <Link href="/contact" className="about-cta" style={{ marginTop: "24px" }}>
                        Travaillons ensemble →
                    </Link>
                </div>
                <div className="about-photo-placeholder">
                    <span>Photo à venir</span>
                </div>
            </section>

        </div>
    );
}
