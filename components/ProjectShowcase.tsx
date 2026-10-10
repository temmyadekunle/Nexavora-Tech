"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/content";
import { getAccentStyle, getStatusStyle, getStatusDotStyle } from "@/lib/utils";

export default function ProjectShowcase() {
  // Get featured project (first live product) and others
  const featuredProject = products.find((p) => p.status === "Live") || products[0];
  const otherProjects = products.filter((p) => p.slug !== featuredProject?.slug);

  return (
    <section className="section section--line" id="showcase">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Our Work — Built with Purpose</span>
          <h2 className="section-title">
            Ideas into <span className="grad-text">Digital Experiences.</span>
          </h2>
          <p className="section-lead">
            Explore the digital products, applications, and innovative projects
            we are building to solve real-world problems.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <article className="project-showcase-featured" style={getAccentStyle(featuredProject.accent)}>
            <div className="project-showcase-featured__visual">
              {featuredProject.coverImage && (
                <Image
                  src={featuredProject.coverImage}
                  alt={`${featuredProject.name} cover`}
                  width={1200}
                  height={600}
                  className="project-showcase-featured__image"
                  priority
                  unoptimized
                />
              )}
            </div>
            <div className="project-showcase-featured__content">
              <div className="project-showcase-featured__header">
                <div className="project-showcase-featured__meta">
                  {featuredProject.logo && (
                    <Image
                      src={featuredProject.logo}
                      alt={`${featuredProject.name} logo`}
                      width={64}
                      height={64}
                      className="project-showcase-featured__logo"
                      unoptimized
                    />
                  )}
                  <div>
                    <h2 className="project-showcase-featured__name">{featuredProject.name}</h2>
                    <span className="project-showcase-featured__status project-showcase-featured__status--live">
                      <i /> {featuredProject.status}
                    </span>
                  </div>
                </div>
                <span className="project-showcase-featured__badge">Featured</span>
              </div>
              <p className="project-showcase-featured__description">{featuredProject.longDescription || featuredProject.description}</p>
              <div className="project-showcase-featured__actions btn-row">
                {featuredProject.links?.website && (
                  <Link className="btn btn-primary" href={featuredProject.links.website} target="_blank" rel="noopener noreferrer">
                    Visit Application
                  </Link>
                )}
                {featuredProject.links?.app && (
                  <Link className="btn btn-primary" href={featuredProject.links.app} target="_blank" rel="noopener noreferrer">
                    Open App
                  </Link>
                )}
                {featuredProject.links.prototype && (
                  <Link className="btn btn-ghost" href={featuredProject.links.prototype} target="_blank" rel="noopener noreferrer">
                    View Prototype
                  </Link>
                )}
                <Link className="link-arrow" href={`/products/#${featuredProject.slug}`}>
                  Explore Project <span>→</span>
                </Link>
              </div>
            </div>
          </article>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="project-showcase-grid">
            <h3 className="project-showcase-grid__title">More Projects</h3>
            <div className="grid-3">
              {otherProjects.map((project) => (
                <article
                  key={project.slug}
                  className="project-showcase-card"
                  style={getAccentStyle(project.accent)}
                >
                  <div className="project-showcase-card__visual">
                    {project.coverImage && (
                      <Image
                        src={project.coverImage}
                        alt={`${project.name} cover`}
                        width={800}
                        height={450}
                        className="project-showcase-card__image"
                        loading="lazy"
                        unoptimized
                      />
                    )}
                    <span className="project-showcase-card__badge">{project.industry}</span>
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
                      {project.logo && (
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          width={48}
                          height={48}
                          className="project-showcase-card__logo"
                          unoptimized
                        />
                      )}
                      <h3 className="project-showcase-card__name">{project.name}</h3>
                    </div>
                    <p className="project-showcase-card__description">{project.description}</p>
                    <div className="project-showcase-card__actions">
                      <Link
                        className="project-showcase-card__link"
                        href={project.links?.website || project.links?.prototype || project.links?.app || `/products/#${project.slug}`}
                        target={project.links?.website || project.links?.prototype ? "_blank" : undefined}
                        rel={project.links?.website || project.links?.prototype ? "noopener noreferrer" : undefined}
                      >
                        <span>Explore Project</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Explore All Button */}
        <div className="project-showcase-cta">
          <Link className="btn btn-primary" href="/portfolio/">
            Explore All Products & Projects
          </Link>
        </div>
      </div>
    </section>
  );
}