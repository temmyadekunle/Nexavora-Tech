import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  // The generated variable must NOT be called --font-body/--font-display:
  // globals.css builds the font stack on top of it with
  //   --font-display: var(--font-display), "Sora", ...
  // which is a self-reference (cycle) and makes the whole declaration
  // invalid-at-computed-value-time, silently falling back to Times New Roman.
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} ${site.brandSuffix} — ${site.tagline}`,
    template: `%s · ${site.name} ${site.brandSuffix}`,
  },
  description: site.positioning,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${site.name} ${site.brandSuffix}`,
    description: site.positioning,
    type: "website",
    siteName: `${site.name} ${site.brandSuffix}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050817",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
