import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import { FinalCta } from "@/components/sections/Growth";
import { FILTER_CATEGORY_KEYS } from "@/lib/portfolioCategories";

const preHydrationFilter = `(function () {
  try {
    var key = new URLSearchParams(window.location.search).get("category");
    if (key && ${JSON.stringify(FILTER_CATEGORY_KEYS)}.indexOf(key) !== -1) {
      var style = document.createElement("style");
      style.id = "folio-filter-boot";
      style.textContent =
        '.portfolio-grid>.portfolio-card:not([data-category="' + key + '"]){display:none}' +
        '.portfolio-filters,.portfolio-count{visibility:hidden}';
      document.head.appendChild(style);
    }
  } catch {}
})();`;

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
        lead="Explore the websites, applications and designs we've delivered for clients — plus the two products we're building in-house."
        actions={
          <Link className="btn btn-primary" href="/contact/">
            Start a Project
          </Link>
        }
      />

      <section className="section section--line" id="portfolio-filters">
        <script dangerouslySetInnerHTML={{ __html: preHydrationFilter }} />
        <div className="container">
          <PortfolioGallery />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
