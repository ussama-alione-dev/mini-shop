import type { Metadata } from "next";
import { Afacad, Lora, Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const fontSans = Afacad({
    subsets: ["latin"],
    variable: "--font-sans",
});

const fontSerif = Lora({
    subsets: ["latin"],
    variable: "--font-serif",
});

const fontMono = Fira_Code({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "MaBoutique",
    description: "Mini boutique en ligne réalisée avec Next.js et TypeScript",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased flex flex-col min-h-screen`}
            >
                <Header />
                <main className="flex-1 text-foreground bg-background p-8">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
