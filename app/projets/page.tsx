"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { categories } from "@/lib/data";

export default function ProjetsPage() {
    const [active, setActive] = useState(0);
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observers = categories.map((_, i) => {
            const el = sectionRefs.current[i];
            if (!el) return null;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(i); },
                { threshold: 0.4 }
            );
            obs.observe(el);
            return obs;
        });
        return () => observers.forEach(o => o?.disconnect());
    }, []);

    const scrollTo = (i: number) => {
        sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="page">
            {/* Indicateur latéral fixe */}
            <nav className="scroll-indicator">
                {categories.map((cat, i) => (
                    <button
                        key={cat.slug}
                        className={`scroll-dot${active === i ? " active" : ""}`}
                        onClick={() => scrollTo(i)}
                        aria-label={cat.title}
                        title={cat.title}
                    />
                ))}
            </nav>

            {/* Sections projets */}
            {categories.map((cat, i) => (
                <section
                    key={cat.slug}
                    className={`project-section${i % 2 === 1 ? " reversed" : ""}`}
                    ref={el => { sectionRefs.current[i] = el; }}
                >
                    {/* Image */}
                    <Link href={`/projets/${cat.slug}`} className="project-section-img">
                        <img src={cat.cover} alt={cat.title} />
                    </Link>

                    {/* Texte */}
                    <div className="project-section-info">
                        <p className="project-section-num">0{i + 1}</p>
                        <h2 className="project-section-title">{cat.title}</h2>
                        {cat.description && (
                            <p className="project-section-desc">{cat.description}</p>
                        )}
                        <p className="project-section-count">{cat.photos.length} photos</p>
                        <Link href={`/projets/${cat.slug}`} className="project-section-link">
                            Voir le projet →
                        </Link>
                    </div>
                </section>
            ))}
        </div>
    );
}
