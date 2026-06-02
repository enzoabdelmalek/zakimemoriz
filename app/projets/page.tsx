import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/data";

export const metadata: Metadata = { title: "Projets" };

export default function ProjetsPage() {
    return (
        <div className="page">
            <div className="container">
                <div className="page-header">
                    <p className="page-title">Projets</p>
                    <p className="page-desc">{categories.length} catégories · {categories.reduce((acc, c) => acc + c.photos.length, 0)} photos</p>
                </div>
            </div>

            <div className="category-grid" style={{ marginTop: 2 }}>
                {categories.map((cat) => (
                    <Link key={cat.slug} href={`/projets/${cat.slug}`} className="category-item">
                        {cat.cover ? (
                            <img src={cat.cover} alt={cat.title} />
                        ) : (
                            <div className="category-placeholder" />
                        )}
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
