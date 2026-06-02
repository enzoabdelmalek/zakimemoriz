import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
    return (
        <div className="page">
            <div className="container content-section">
                <div className="content-block">
                    <h1>Mentions légales</h1>
                    <div className="divider" />

                    <h2>Éditeur du site</h2>
                    <p>
                        Ce site est édité par :<br />
                        <strong style={{ color: "var(--fg)" }}>zakimemoriz</strong><br />
                        [Adresse]<br />
                        [Email de contact]
                    </p>

                    <h2>Hébergement</h2>
                    <p>
                        Ce site est hébergé par Vercel Inc.,<br />
                        440 N Barranca Ave #4133, Covina, CA 91723, USA.
                    </p>

                    <h2>Propriété intellectuelle</h2>
                    <p>
                        L'ensemble des photographies, textes et éléments visuels présents sur ce site
                        sont la propriété exclusive de zakimemoriz. Toute reproduction, même partielle,
                        est strictement interdite sans autorisation préalable.
                    </p>

                    <h2>Données personnelles</h2>
                    <p>
                        Les informations recueillies via le formulaire de contact sont uniquement
                        utilisées pour répondre à vos demandes et ne sont jamais transmises à des tiers.
                        Conformément au RGPD, vous disposez d'un droit d'accès, de modification et
                        de suppression de vos données.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Ce site n'utilise pas de cookies de traçage ou publicitaires.
                    </p>
                </div>
            </div>
        </div>
    );
}
