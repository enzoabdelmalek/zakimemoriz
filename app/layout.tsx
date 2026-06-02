import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const geist = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: { default: "zakimemoriz", template: "%s | zakimemoriz" },
    description: "Portfolio photographique — zakimemoriz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className={geist.variable}>
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
