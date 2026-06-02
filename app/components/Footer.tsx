import Link from "next/link";

const NAV = [
    { href: "/", label: "Accueil" },
    { href: "/projets", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

const SOCIALS = [
    { href: "https://instagram.com/zakimemoriz", label: "Instagram" },
    { href: "https://tiktok.com/@zakimemoriz", label: "TikTok" },
    { href: "tel:+33687877039", label: "+33 6 87 87 70 39" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-top">
                {/* Brand & tagline */}
                <div className="footer-col footer-col-brand">
                    <Link href="/" className="footer-brand">zakimemoriz</Link>
                    <p className="footer-tagline">
                        Photographe basé à Paris.<br />
                        Reportage — Événementiel — Portrait.
                    </p>
                </div>

                {/* Navigation */}
                <div className="footer-col">
                    <p className="footer-col-title">Navigation</p>
                    <nav className="footer-nav">
                        {NAV.map(l => (
                            <Link key={l.href} href={l.href}>{l.label}</Link>
                        ))}
                    </nav>
                </div>

                {/* Réseaux */}
                <div className="footer-col">
                    <p className="footer-col-title">Réseaux</p>
                    <div className="footer-socials">
                        {SOCIALS.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                                {s.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Contact rapide */}
                <div className="footer-col">
                    <p className="footer-col-title">Contact</p>
                    <div className="footer-contact">
                        <p>Un projet ? Une collaboration ?</p>
                        <Link href="/contact" className="footer-contact-link">
                            Travaillons ensemble →
                        </Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {year} zakimemoriz — Tous droits réservés</p>
                <Link href="/mentions-legales">Mentions légales</Link>
                <p className="footer-credit">
                    Designé & développé par{" "}
                    <a href="https://vibewebagency.fr" target="_blank" rel="noopener noreferrer">
                        Vibe Web Agency
                    </a>
                </p>
            </div>
        </footer>
    );
}
