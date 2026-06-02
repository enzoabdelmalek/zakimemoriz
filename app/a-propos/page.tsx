import type { Metadata } from "next";

export const metadata: Metadata = { title: "À propos" };

export default function AProposPage() {
    return (
        <div className="page">
            <div className="container content-section">
                <div className="content-block">
                    <h1>À propos</h1>
                    <div className="divider" />
                    <h2>Qui suis-je</h2>
                    <p>
                        Photographe passionné, je capture les moments, les émotions et les atmosphères
                        qui font la richesse du quotidien. Mon travail s'articule autour de la lumière,
                        de la composition et de l'authenticité.
                    </p>
                    <p>
                        Basé en France, je travaille aussi bien en studio qu'en extérieur,
                        sur des projets personnels ou des commandes professionnelles.
                    </p>

                    <h2>Mon approche</h2>
                    <p>
                        Chaque image est une histoire. Je cherche l'instant juste, celui qui dit
                        tout sans en faire trop. Un regard, une lumière, une géométrie —
                        c'est dans ces détails que réside la puissance d'une photo.
                    </p>

                    <h2>Contact</h2>
                    <p>
                        Pour toute demande de collaboration ou de projet, écrivez-moi via la{" "}
                        <a href="/contact">page contact</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
