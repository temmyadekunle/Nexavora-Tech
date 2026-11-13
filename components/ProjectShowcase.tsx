import Link from "next/link";
import Image from "next/image";
import ProductMark from "@/components/ProductMark";
import { homeFeaturedWork, portfolio } from "@/lib/content";
import {
  getAccentStyle,
  getStatusStyle,
  getStatusDotStyle,
  getExternalActions,
} from "@/lib/utils";

// Ownership labels keep the showcase factual: products are Nexavora's own,
// the rest are client projects.
const showcaseKinds: Record<string, string> = {
  carenbuddi: "Nexavora Product",
  livanta: "Nexavora Product",
  euphoriabykylie: "Client Project",
  electrotrans: "Client Project",
};

export default function ProjectShowcase() {
  const projects = homeFeaturedWork
    .map((slug) => portfolio.find((project) => project.slug === slug))
    .filter((project): project is (typeof portfolio)[number] => Boolean(project));

  const [featured, ...others] = projects;
  const featuredActions = featured
    ? getExternalActions(featured.links as Record<string, string | undefined>)
    : [];

  return (
    <section className="section section--line" id="featured-work">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Featured Work</span>
          <h2 className="section-title">
            Products, websites and experiences{" "}
            <span className="grad-text">we&apos;re building</span>
          </h2>
          <p className="section-lead">
            A short selection of genuine project work — client builds, plus the products
            we&apos;re developing in-house.
          </p>
        </div>

        {featured && (
          <article
            className="project-showcase-featured"
            style={getAccentStyle(featured.accent)}
          >
            <div className="project-showcase-featured__visual">
              {featured.inHouse && featured.logo ? (
                <Link
                  className="project-showcase-featured__image-link"
                  href={`/portfolio/${featured.slug}/`}
                  aria-label={`Product overview for ${featured.name}`}
                >
                  <ProductMark
                    name={featured.name}
                    logo={featured.logo}
                    accent={featured.accent}
                  />
                </Link>
              ) : (
                featured.coverImage && (
                  <Link
                    className="project-showcase-featured__image-link"
                    href={`/portfolio/${featured.slug}/`}
                    aria-label={`Explore ${featured.name}`}
                  >
                    <Image
                      src={featured.coverImage}
                      alt={featured.coverAlt ?? `${featured.name} project cover`}
                      width={1200}
                      height={675}
                      className="project-showcase-featured__image"
                      priority
                      unoptimized
                    />
                  </Link>
                )
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
                    <span
                      className="project-showcase-featured__status"
                      style={getStatusStyle(featured.status)}
                    >
                      <i style={getStatusDotStyle(featured.status)} /> {featured.status}
                    </span>
                  </div>
                </div>
                <span className="project-showcase-featured__badge">
                  {showcaseKinds[featured.slug] ?? "Featured"}
                </span>
              </div>
              <span className="project-showcase-featured__category">
                {featured.category}
              </span>
              <p className="project-showcase-featured__description">
                {featured.description}
              </p>
              <div className="project-showcase-featured__actions btn-row">
                <Link className="btn btn-primary" href={`/portfolio/${featured.slug}/`}>
                  {featured.inHouse ? "Product Overview" : "Explore Project"}
                </Link>
                {featuredActions.slice(0, 1).map((action) => (
                  <a
                    key={action.key}
                    className="btn btn-ghost"
                    href={action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        )}

        {others.length > 0 && (
          <div className="project-showcase-grid">
            <h3 className="project-showcase-grid__title">More projects</h3>
            <div className="grid-3">
              {others.map((project) => {
                const actions = getExternalActions(
                  project.links as Record<string, string | undefined>,
                );
                return (
                  <article
                    key={project.slug}
                    className="project-showcase-card"
                    style={getAccentStyle(project.accent)}
                  >
                    <div className="project-showcase-card__visual">
                      {project.inHouse && project.logo ? (
                        <Link
                          href={`/portfolio/${project.slug}/`}
                          aria-label={`Product overview for ${project.name}`}
                        >
                          <ProductMark
                            name={project.name}
                            logo={project.logo}
                            accent={project.accent}
                          />
                        </Link>
                      ) : (
                        project.coverImage && (
                          <Link
                            href={`/portfolio/${project.slug}/`}
                            aria-label={`Explore ${project.name}`}
                          >
                            <Image
                              src={project.coverImage}
                              alt={project.coverAlt ?? `${project.name} project cover`}
                              width={800}
                              height={450}
                              className="project-showcase-card__image"
                              loading="lazy"
                              unoptimized
                            />
                          </Link>
                        )
                      )}
                      <span className="project-showcase-card__badge">
                        {project.category}
                      </span>
                      <span
                        className="project-showcase-card__status"
                        style={getStatusStyle(project.status)}
                      >
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
                      {showcaseKinds[project.slug] && (
                        <span className="project-showcase-card__kind">
                          {showcaseKinds[project.slug]}
                        </span>
                      )}
                      <p className="project-showcase-card__description">
                        {project.description}
                      </p>
                      <div className="project-showcase-card__actions">
                        <Link
                          className="project-showcase-card__link"
                          href={`/portfolio/${project.slug}/`}
                        >
                          <span>{project.inHouse ? "Product Overview" : "Explore Project"}</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </Link>
                        {actions.slice(0, 1).map((action) => (
                          <a
                            key={action.key}
                            className="project-showcase-card__link project-showcase-card__link--secondary"
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>{action.label}</span>
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
            View Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
