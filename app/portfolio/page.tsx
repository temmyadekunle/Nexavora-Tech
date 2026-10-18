import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import { FinalCta } from "@/components/sections/Growth";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected digital products, websites, applications, UI/UX design and brand work created by Nexavora Technology Solutions.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title={
          <>
            Ideas Into <span className="grad-text">Digital Experiences</span>
          </>
        }
        lead="Explore selected digital products, websites, applications and designs created by Nexavora Technology Solutions."
        actions={
          <Link className="btn btn-primary" href="/contact/">
            Start a Project
          </Link>
        }
      />

      <section className="section section--line" id="portfolio-filters">
        <div className="container">
          <PortfolioGallery />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
