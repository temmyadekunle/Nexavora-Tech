import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { products } from "@/lib/content";
import { getAccentStyle, getStatusStyle, getStatusDotStyle } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Nexavora's digital products, applications, prototypes, and technology projects. From healthcare platforms to life admin tools — see what we are building.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Products & Projects
            <span className="grad-text"> We Build</span>
          </>
        }
        lead="Every project starts with a problem. Here is a selection of the digital products, applications, and technology projects we have designed, engineered, and shipped — or are actively building."
      />

      <section className="section section--line" id="portfolio-grid">
        <div className="container">
          <div className="grid-3 portfolio-grid">
            {products.map((project) => (
              <article
                key={project.slug}
                className="portfolio-card"
                style={getAccentStyle(project.accent)}
              >
                <div className="portfolio-card__visual">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} cover`}
                      width={800}
                      height={450}
                      className="portfolio-card__image"
                      loading="lazy"
                      unoptimized
                    />
                  )}
                  <span className="portfolio-card__badge">{project.industry}</span>
<span
                    className="portfolio-card__status"
                    style={getStatusStyle(project.status)}
                  >
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
                    <h3 className="portfolio-card__name">{project.name}</h3>
                  </div>
                  <p className="portfolio-card__description">{project.description}</p>
                  <div className="portfolio-card__meta">
                    <span className="portfolio-card__tech">{project.techStack?.slice(0, 3).join(" · ") || "Modern stack"}</span>
                  </div>
                  <div className="portfolio-card__actions">
                    <Link
                      className="portfolio-card__link"
                      href={`/portfolio/${project.slug}`}
                    >
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                    {project.links && (project.links as { github?: string }).github && (
                      <a
                        className="portfolio-card__link portfolio-card__link--secondary"
                        href={(project.links as { github?: string }).github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18v3.87" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}