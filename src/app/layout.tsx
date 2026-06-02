import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dragan Jovanovic — AI that actually pays off",
    template: "%s · Dragan Jovanovic",
  },
  description:
    "I help tech-friendly business owners work out what's worth doing with AI and what isn't, then build it myself. Fractional CTO and AI builder. No hype.",
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Dragan Jovanovic — AI that actually pays off",
    description:
      "Fractional CTO and AI builder. I work out what's worth doing with AI and what isn't, then build it myself. No hype.",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dragan Jovanovic — AI that actually pays off",
    description:
      "Fractional CTO and AI builder. I work out what's worth doing with AI and what isn't, then build it myself. No hype.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
