import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageTransition from "@/app/components/PageTransition";
import ScrollAnimations from "@/app/components/ScrollAnimations";

const geist = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: { default: "zakimemoriz", template: "%s | zakimemoriz" },
    description: "Portfolio photographique — zakimemoriz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={`${geist.variable} ${cormorant.variable}`}>
            <body>
                <Header />
                <ScrollAnimations />
                <main>
                    <PageTransition>{children}</PageTransition>
                </main>
                <Footer />
            </body>
        </html>
    );
}
