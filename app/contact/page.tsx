"use client";

import type { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nom, email, message }),
            });
            setSent(true);
        } catch {
            // silent
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page">
            <div className="container content-section">
                <div className="content-block">
                    <h1>Contact</h1>
                    <div className="divider" />

                    {sent ? (
                        <div style={{ padding: "28px 0" }}>
                            <p style={{ color: "var(--fg)", marginBottom: 8 }}>Message envoyé.</p>
                            <p style={{ color: "var(--muted)", fontSize: "0.875rem" }}>Je vous répondrai dans les meilleurs délais.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="nom">Nom</label>
                                <input id="nom" type="text" className="form-input" value={nom} onChange={e => setNom(e.target.value)} required placeholder="Votre nom" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input id="email" type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required placeholder="votre@email.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea id="message" className="form-textarea" value={message} onChange={e => setMessage(e.target.value)} required placeholder="Votre message..." />
                            </div>
                            <button type="submit" className="btn" disabled={loading} style={{ alignSelf: "flex-start" }}>
                                {loading ? "Envoi…" : "Envoyer"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
