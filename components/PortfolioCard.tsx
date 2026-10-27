import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/content";
import { CATEGORY_KEY_BY_LABEL } from "@/lib/portfolioCategories";
import {
  getAccentStyle,
  getStatusStyle,
  getStatusDotStyle,
  getExternalActions,
} from "@/lib/utils";

type Project = (typeof portfolio)[number];

export default function PortfolioCard({ project }: { project: Project }) {
  const actions = getExternalActions(project.links as Record<string, string | undefined>);
  const href = `/portfolio/${project.slug}/`;

  return (
    <article
      className="portfolio-card"
      style={getAccentStyle(project.accent)}
      data-category={CATEGORY_KEY_BY_LABEL[project.category]}
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
              alt={project.coverAlt ?? `${project.name} project cover`}
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
        <div className="portfolio-card__meta">{project.category}</div>
        <div className="portfolio-card__actions">
          <Link className="portfolio-card__link" href={href}>
            <span>Explore Project</span>
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
              className="portfolio-card__link portfolio-card__link--secondary"
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
}
