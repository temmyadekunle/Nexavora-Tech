"use client";

import Link from "next/link";
import Image from "next/image";
import { products, portfolio } from "@/lib/content";
import { getAccentStyle, getStatusStyle, getStatusDotStyle, getExternalActions } from "@/lib/utils";

export default function ProjectShowcase() {
  // The strongest project is flagged in content; fall back to the first record.
  const featured = products.find((p) => (p as { featured?: boolean }).featured) ?? products[0];
  // More Projects: Livanta (product), Electrotrans + Euphoria + Farm-Pal
  // (client and portfolio work — the full set shown by the old Selected Work).
  const others = [
    products.find((p) => p.slug === "livanta")!,
    portfolio.find((p) => p.slug === "electrotrans")!,
    portfolio.find((p) => p.slug === "euphoriabykylie")!,
    portfolio.find((p) => p.slug === "farm-pal")!,
  ];

  const featuredActions = getExternalActions(
    featured ? (featured.links as Record<string, string | undefined>) : undefined,
  );

  return (
    <section className="section section--line" id="showcase">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">
            Ideas into <span className="grad-text">Digital Experiences.</span>
          </h2>
          <p className="section-lead">
            Explore the digital products, websites and designs we&apos;ve created, along
            with the products we&apos;re developing.
          </p>
        </div>

        {featured && (
          <article className="project-showcase-featured" style={getAccentStyle(featured.accent)}>
            <div className="project-showcase-featured__visual">
              {featured.coverImage && (
                <Link
                  className="project-showcase-featured__image-link"
                  href={`/portfolio/${featured.slug}/`}
                  aria-label={`Explore ${featured.name}`}
                >
                  <Image
                    src={featured.coverImage}
                    alt={`${featured.name} — ${featured.industry}`}
                    width={1200}
                    height={675}
                    className="project-showcase-featured__image"
                    priority
                    unoptimized
                  />
                </Link>
              )}
            </div>
            <div className="project-showcase-featured__content">
              <div className="project-showcase-featured__header">
                <div className="project-showcase-featured__meta">
                  {featured.logo && (
                    <Image
                      src={featured.logo}
                      alt={`${featured.name} logo`}
                      width={64}
                      height={64}
                      className="project-showcase-featured__logo"
                      unoptimized
                    />
                  )}
                  <div>
                    <h3 className="project-showcase-featured__name">
                      <Link href={`/portfolio/${featured.slug}/`}>{featured.name}</Link>
                    </h3>
                    <span className="project-showcase-featured__status" style={getStatusStyle(featured.status)}>
                      <i style={getStatusDotStyle(featured.status)} /> {featured.status}
                    </span>
                  </div>
                </div>
                <span className="project-showcase-featured__badge">Featured</span>
              </div>
              <span className="project-showcase-featured__category">{featured.industry}</span>
              <p className="project-showcase-featured__description">
                {featured.longDescription || featured.description}
              </p>
              <div className="project-showcase-featured__actions btn-row">
                <Link className="btn btn-primary" href={`/portfolio/${featured.slug}/`}>
                  Explore Project
                </Link>
                {featuredActions.slice(0, 1).map((a) => (
                  <a
                    key={a.key}
                    className="btn btn-ghost"
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        )}

        {others.length > 0 && (
          <div className="project-showcase-grid">
            <h3 className="project-showcase-grid__title">More Projects</h3>
            <div className="grid-3">
              {others.map((project) => {
                const actions = getExternalActions(project.links as Record<string, string | undefined>);
                return (
                  <article
                    key={project.slug}
                    className="project-showcase-card"
                    style={getAccentStyle(project.accent)}
                  >
                    <div className="project-showcase-card__visual">
                      {project.coverImage && (
                        <Link
                          href={`/portfolio/${project.slug}/`}
                          aria-label={`Explore ${project.name}`}
                        >
                          <Image
                            src={project.coverImage}
                            alt={`${project.name} — ${project.industry}`}
                            width={800}
                            height={450}
                            className="project-showcase-card__image"
                            loading="lazy"
                            unoptimized
                          />
                        </Link>
                      )}
                      <span className="project-showcase-card__badge">{project.industry}</span>
                      <span className="project-showcase-card__status" style={getStatusStyle(project.status)}>
                        <i style={getStatusDotStyle(project.status)} />
                        {project.status}
                      </span>
                    </div>
                    <div className="project-showcase-card__content">
                      <div className="project-showcase-card__header">
                        {project.logo && project.logo !== project.coverImage && (
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            width={48}
                            height={48}
                            className="project-showcase-card__logo"
                            unoptimized
                          />
                        )}
                        <h4 className="project-showcase-card__name">
                          <Link href={`/portfolio/${project.slug}/`}>{project.name}</Link>
                        </h4>
                      </div>
                      <p className="project-showcase-card__description">{project.description}</p>
                      <div className="project-showcase-card__actions">
                        <Link className="project-showcase-card__link" href={`/portfolio/${project.slug}/`}>
                          <span>Explore Project</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                        {actions.slice(0, 1).map((a) => (
                          <a
                            key={a.key}
                            className="project-showcase-card__link project-showcase-card__link--secondary"
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
        )}

        <div className="project-showcase-cta">
          <Link className="btn btn-primary" href="/portfolio/">
            Explore Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
