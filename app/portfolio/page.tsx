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
        eyebrow="Portfolio"
        title={
          <>
            Our <span className="grad-text">Work</span>
          </>
        }
        lead="Explore the digital products, websites, applications and designs we've created, along with projects still in development."
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
