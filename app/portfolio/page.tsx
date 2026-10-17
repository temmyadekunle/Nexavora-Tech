import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
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

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Nexavora's UI/UX design, product development, websites, applications, and client projects.",
};

export default function PortfolioPage({ searchParams }: { searchParams: { category?: string } }) {
  const selected = (searchParams.category as CategoryKey) || "all";

  const filteredProjects =
    selected === "all"
      ? portfolio
      : portfolio.filter((p) => p.category === selected);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Our Work.
            <span className="grad-text"> Our Craft. Our Impact.</span>
          </>
        }
        lead="Explore our work across UI/UX design, digital product development, websites, applications, and technology solutions."
      />

      <section className="section section--line" id="portfolio-filters">
        <div className="container">
          <div className="portfolio-filters">
            {CATEGORIES.map((cat) => {
              const isActive = selected === cat.key;
              const params = new URLSearchParams();
              if (cat.key !== "all") params.set("category", cat.key);
              return (
                <a
                  key={cat.key}
                  href={`/?${params.toString()}`}
                  className={`portfolio-filter-btn ${isActive ? "portfolio-filter-btn--active" : ""}`}
                >
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--line" id="portfolio-grid">
        <div className="container">
          <div className="grid-3 portfolio-grid">
            {filteredProjects.map((project) => {
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
                      {project.logo && (
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
        </div>
      </section>

      <FinalCta />
    </>
  );
}
