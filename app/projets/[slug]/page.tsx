"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCategoryBySlug } from "@/lib/data";

export default function ProjetPage() {
    const params = useParams();
    const slug = typeof params.slug === "string" ? params.slug : params.slug?.[0] ?? "";
    const category = getCategoryBySlug(slug);

    const [lightbox, setLightbox] = useState<number | null>(null);

    if (!category) {
        return (
            <div className="page">
                <div className="container content-section">
                    <p style={{ color: "var(--muted)" }}>Catégorie introuvable.</p>
                    <Link href="/projets" className="back-link" style={{ marginTop: 20 }}>← Retour aux projets</Link>
                </div>
            </div>
        );
    }

    const prev = lightbox !== null ? (lightbox - 1 + category.photos.length) % category.photos.length : null;
    const next = lightbox !== null ? (lightbox + 1) % category.photos.length : null;

    return (
        <>
            <div className="page">
                <div className="container">
                    <div className="page-header">
                        <Link href="/projets" className="back-link">← Tous les projets</Link>
                        <p className="page-title">{category.title}</p>
                        {category.description && <p className="page-desc">{category.description}</p>}
                    </div>
                </div>

                <div className="photo-grid" style={{ marginTop: 2 }}>
                    {category.photos.map((photo, i) => (
                        <button
                            key={i}
                            className="photo-item"
                            onClick={() => setLightbox(i)}
                            aria-label={photo.alt ?? `Photo ${i + 1}`}
                        >
                            <img src={photo.src} alt={photo.alt ?? `Photo ${i + 1}`} loading="lazy" />
                        </button>
                    ))}
                </div>
            </div>

            {lightbox !== null && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Fermer">✕</button>

                    <button
                        className="lightbox-nav prev"
                        onClick={e => { e.stopPropagation(); setLightbox(prev!); }}
                        aria-label="Photo précédente"
                    >
                        ←
                    </button>

                    <img
                        src={category.photos[lightbox].src}
                        alt={category.photos[lightbox].alt ?? `Photo ${lightbox + 1}`}
                        onClick={e => e.stopPropagation()}
                    />

                    <button
                        className="lightbox-nav next"
                        onClick={e => { e.stopPropagation(); setLightbox(next!); }}
                        aria-label="Photo suivante"
                    >
                        →
                    </button>

                    <p className="lightbox-counter">{lightbox + 1} / {category.photos.length}</p>
                </div>
            )}
        </>
    );
}
