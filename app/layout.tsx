import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
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
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
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
  themeColor: "#05060f",
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
