"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
    { href: "/projets", label: "Projets" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const close = () => {
        setOpen(false);
        document.body.style.overflow = "";
    };

    const toggle = () => {
        setOpen(v => {
            const next = !v;
            document.body.style.overflow = next ? "hidden" : "";
            return next;
        });
    };

    return (
        <>
            <header className="header">
                <Link href="/" className="header-brand" onClick={close}>
                    zakimemoriz
                </Link>

                <nav className="header-nav">
                    {LINKS.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={pathname.startsWith(l.href) ? "active" : ""}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className={`burger${open ? " open" : ""}`}
                    onClick={toggle}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </header>

            <div className={`mobile-menu${open ? " open" : ""}`}>
                <Link href="/" onClick={close}>Accueil</Link>
                {LINKS.map(l => (
                    <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
                ))}
            </div>
        </>
    );
}
