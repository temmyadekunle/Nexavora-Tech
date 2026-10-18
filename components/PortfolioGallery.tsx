"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useSyncExternalStore } from "react";
import { portfolio } from "@/lib/content";
import { getAccentStyle, getStatusStyle, getStatusDotStyle, getExternalActions } from "@/lib/utils";

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "ui-ux-product-design", label: "UI/UX & Product Design" },
  { key: "web-development", label: "Web Development" },
  { key: "mobile-apps", label: "Mobile Apps" },
  { key: "branding-graphic-design", label: "Branding & Graphic Design" },
  { key: "social-media-marketing-design", label: "Social Media & Marketing Design" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

const CATEGORY_KEY_BY_LABEL: Record<string, CategoryKey> = {
  "UI/UX & Product Design": "ui-ux-product-design",
  "Web Development": "web-development",
  "Mobile Apps": "mobile-apps",
  "Branding & Graphic Design": "branding-graphic-design",
  "Social Media & Marketing Design": "social-media-marketing-design",
};

const FILTER_EVENT = "folio-filter-change";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(FILTER_EVENT, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(FILTER_EVENT, onChange);
  };
}

function parseCategory(search: string): CategoryKey {
  const value = new URLSearchParams(search).get("category") as CategoryKey | null;
  if (value && CATEGORIES.some((c) => c.key === value)) return value;
  return "all";
}

export default function PortfolioGallery() {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const selected = useMemo(() => parseCategory(search), [search]);

  const select = (key: CategoryKey) => {
    const url = key === "all" ? "/portfolio/" : `/portfolio/?category=${key}`;
    window.history.replaceState(null, "", url);
    window.dispatchEvent(new Event(FILTER_EVENT));
  };

  const filtered = useMemo(
    () => (selected === "all" ? portfolio : portfolio.filter((p) => CATEGORY_KEY_BY_LABEL[p.category] === selected)),
    [selected],
  );

  return (
    <>
      <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`portfolio-filter-btn ${selected === cat.key ? "portfolio-filter-btn--active" : ""}`}
            aria-pressed={selected === cat.key}
            onClick={() => select(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="portfolio-count" aria-live="polite">
        Showing {filtered.length} of {portfolio.length} projects
      </p>

      <div className="grid-3 portfolio-grid">
        {filtered.map((project) => {
          const actions = getExternalActions(project.links as Record<string, string | undefined>);
          const href = `/portfolio/${project.slug}/`;
          return (
            <article
              key={project.slug}
              className="portfolio-card"
              style={getAccentStyle(project.accent)}
            >
              <div className="portfolio-card__visual">
                {project.coverImage && (
                  <Link
                    className="portfolio-card__image-link"
                    href={href}
                    aria-label={`Explore ${project.name}`}
                  >
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} — ${project.industry}`}
                      width={800}
                      height={450}
                      className="portfolio-card__image"
                      loading="lazy"
                      unoptimized
                    />
                  </Link>
                )}
                <span className="portfolio-card__badge">{project.industry}</span>
                <span className="portfolio-card__status" style={getStatusStyle(project.status)}>
                  <i style={getStatusDotStyle(project.status)} />
                  {project.status}
                </span>
              </div>
              <div className="portfolio-card__content">
                <div className="portfolio-card__header">
                  {project.logo && project.logo !== project.coverImage && (
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={48}
                      height={48}
                      className="portfolio-card__logo"
                      unoptimized
                    />
                  )}
                  <h3 className="portfolio-card__name">
                    <Link href={href}>{project.name}</Link>
                  </h3>
                </div>
                <p className="portfolio-card__description">{project.description}</p>
                <div className="portfolio-card__meta">
                  <span className="portfolio-card__tech">
                    {project.category}
                  </span>
                </div>
                <div className="portfolio-card__actions">
                  <Link className="portfolio-card__link" href={href}>
                    <span>Explore Project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  {actions.slice(0, 1).map((a) => (
                    <a
                      key={a.key}
                      className="portfolio-card__link portfolio-card__link--secondary"
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{a.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
