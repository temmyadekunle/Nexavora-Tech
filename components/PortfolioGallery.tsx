"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolio } from "@/lib/content";
import {
  PORTFOLIO_CATEGORIES,
  filterPortfolio,
  parsePortfolioCategory,
  type PortfolioCategoryKey,
} from "@/lib/portfolioCategories";

const FILTER_EVENT = "folio-filter-change";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(FILTER_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(FILTER_EVENT, onChange);
  };
}

export default function PortfolioGallery() {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const selected = useMemo(() => parsePortfolioCategory(search), [search]);

  useEffect(() => {
    if (selected !== "all") {
      document.getElementById("folio-filter-boot")?.remove();
    }
  }, [selected]);

  const select = (key: PortfolioCategoryKey) => {
    if (key === selected) return;
    const url = key === "all" ? "/portfolio/" : `/portfolio/?category=${key}`;
    window.history.pushState(null, "", url);
    window.dispatchEvent(new Event(FILTER_EVENT));
  };

  const filtered = useMemo(() => filterPortfolio(selected), [selected]);

  return (
    <>
      <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
        {PORTFOLIO_CATEGORIES.map((category) => (
          <button
            key={category.key}
            type="button"
            data-key={category.key}
            className={`portfolio-filter-btn ${
              selected === category.key ? "portfolio-filter-btn--active" : ""
            }`}
            aria-pressed={selected === category.key}
            onClick={() => select(category.key)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <p className="portfolio-count" aria-live="polite">
        Showing {filtered.length} of {portfolio.length} projects
      </p>

      <div className="grid-3 portfolio-grid">
        {filtered.map((project) => (
          <PortfolioCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
