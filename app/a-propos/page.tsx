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
                    L'œil derrière<br />
                    <em>l'objectif.</em>
                </h1>
            </section>

            {/* ─── Texte 1 — pleine largeur ─── */}
            <section className="about-text-block">
                <p className="about-section-label">Identité</p>
                <div className="about-text-cols">
                    <p>
                        Je suis zakimemoriz, photographe basé à Paris. Je me spécialise dans le
                        reportage événementiel et le portrait — des coulisses de concerts aux
                        stades de football, des backstages aux vestiaires.
                    </p>
                    <p>
                        Mon objectif n'est pas de mettre en scène, mais de révéler. Chaque cliché
                        est une tentative de figer ce qui ne dure qu'un instant : une expression,
                        une lumière, une atmosphère.
                    </p>
                </div>
            </section>

            {/* ─── Photo 1 (gauche) + Texte 2 (droite) ─── */}
            <section className="about-photo-text">
                <div className="about-photo-placeholder">
                    <span>Photo à venir</span>
                </div>
                <div className="about-photo-text-side">
                    <p className="about-section-label">Parcours</p>
                    <p>
                        Autodidacte, j'ai commencé à photographier dans les rues de Paris avant
                        d'être remarqué pour mon travail sur les événements sportifs.
                    </p>
                    <p>
                        J'ai eu l'opportunité de travailler avec des artistes internationaux,
                        des clubs de haut niveau et des marques de référence — chaque collaboration
                        m'a forgé un regard plus affûté.
                    </p>
                    <p>
                        Ces expériences m'ont appris que la discrétion est la première qualité
                        d'un bon photographe de terrain.
                    </p>
                </div>
            </section>

            {/* ─── Texte 3 — pleine largeur ─── */}
            <section className="about-text-block">
                <p className="about-section-label">Approche</p>
                <div className="about-text-cols">
                    <p>
                        La photographie est une question de patience autant que de technique.
                        Être au bon endroit, dans le bon état d'esprit — et attendre que le
                        réel se révèle de lui-même.
                    </p>
                    <p>
                        Je travaille essentiellement en lumière naturelle et en milieu réel.
                        Pas de studio, pas de mise en scène. Juste la vie telle qu'elle est,
                        capturée avant qu'elle ne passe.
                    </p>
                </div>
            </section>

            {/* ─── Texte 4 (gauche) + Photo 2 (droite) ─── */}
            <section className="about-photo-text reversed">
                <div className="about-photo-text-side">
                    <p className="about-section-label">Vision</p>
                    <p>
                        Chaque projet est une nouvelle façon de voir. C'est ce qui rend
                        ce métier inépuisable — il n'y a pas deux situations identiques,
                        pas deux lumières pareilles.
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
