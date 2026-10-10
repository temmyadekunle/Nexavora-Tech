import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";
import { getAccentStyle, getStatusStyle, getStatusDotStyle } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = products.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.coverImage ? [{ url: project.coverImage }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = products.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <section className="project-detail-hero" style={getAccentStyle(project.accent)}>
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/portfolio/">Portfolio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.name}</span>
          </nav>
          <div className="project-detail-hero__grid">
            <div className="project-detail-hero__content">
              <span className="eyebrow">{project.industry}</span>
              <h1 className="project-detail-hero__title">{project.name}</h1>
              <div className="project-detail-hero__meta">
                <span
                  className="project-detail-hero__status"
                  style={getStatusStyle(project.status)}
                >
                  <i style={getStatusDotStyle(project.status)} /> {project.status}
                </span>
              </div>
              <p className="project-detail-hero__description">{project.longDescription || project.description}</p>
              <div className="project-detail-hero__actions btn-row">
                {project.links?.website && (
                  <a className="btn btn-primary" href={project.links.website} target="_blank" rel="noopener noreferrer">
                    Visit Application
                  </a>
                )}
                {project.links?.app && (
                  <a className="btn btn-primary" href={project.links.app} target="_blank" rel="noopener noreferrer">
                    Open App
                  </a>
                )}
                {project.links?.prototype && (
                  <a className="btn btn-primary" href={project.links.prototype} target="_blank" rel="noopener noreferrer">
                    View Prototype
                  </a>
                )}
                {project.links?.landing && (
                  <a className="btn btn-ghost" href={project.links.landing} target="_blank" rel="noopener noreferrer">
                    Landing Page
                  </a>
                )}
                {project.links?.github && (
                  <a className="btn btn-ghost" href={project.links.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                )}
                {project.links?.apk && (
                  <a className="btn btn-ghost" href={project.links.apk} target="_blank" rel="noopener noreferrer">
                    Download APK
                  </a>
                )}
                {project.links?.download && (
                  <a className="btn btn-ghost" href={project.links.download} target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                )}
                <Link className="link-arrow" href="/portfolio/">
                  Back to Portfolio <span>→</span>
                </Link>
              </div>
            </div>
            <div className="project-detail-hero__visual">
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={`${project.name} cover`}
                  width={800}
                  height={450}
                  className="project-detail-hero__image"
                  priority
                  unoptimized
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="section section--line project-detail-screenshots" style={getAccentStyle(project.accent)}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Screenshots</span>
              <h2 className="section-title">Inside {project.name}</h2>
              <p className="section-lead">A closer look at the interface and key features.</p>
            </div>
            <div className="project-screenshots-grid">
              {project.screenshots.map((screenshot, index) => (
                <article
                key={index}
                className="project-screenshot-card"
                style={getAccentStyle(project.accent)}
              >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={800}
                    height={600}
                    className="project-screenshot-card__image"
                    loading="lazy"
                    unoptimized
                  />
                  <figcaption className="project-screenshot-card__caption">{screenshot.caption}</figcaption>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.mockups && (project.mockups.desktop || project.mockups.mobile) && (
        <section className="section project-detail-mockups" style={getAccentStyle(project.accent)}>
          <div className="container">
            <div className="section-head section-head--center">
              <span className="eyebrow">Device Mockups</span>
              <h2 className="section-title">{project.name} in Context</h2>
              <p className="section-lead">See how {project.name} looks across different devices.</p>
            </div>
            <div className="project-mockups-grid">
              {project.mockups.desktop && (
                <article className="project-mockup-card">
                  <h3 className="project-mockup-card__label">Desktop</h3>
                  <Image
                    src={project.mockups.desktop}
                    alt={`${project.name} desktop mockup`}
                    width={1200}
                    height={800}
                    className="project-mockup-card__image"
                    loading="lazy"
                    unoptimized
                  />
                </article>
              )}
              {project.mockups.mobile && (
                <article className="project-mockup-card">
                  <h3 className="project-mockup-card__label">Mobile</h3>
                  <Image
                    src={project.mockups.mobile}
                    alt={`${project.name} mobile mockup`}
                    width={400}
                    height={800}
                    className="project-mockup-card__image"
                    loading="lazy"
                    unoptimized
                  />
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {project.features && project.features.length > 0 && (
        <section className="section section--line project-detail-features" style={getAccentStyle(project.accent)}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Features</span>
              <h2 className="section-title">What {project.name} Does</h2>
              <p className="section-lead">Key capabilities and functionality.</p>
            </div>
            <div className="grid-3">
              {project.features.map((feature, index) => (
                <article key={index} className="feature-card">
                  <div className="feature-card__icon" style={{ background: `var(--${project.accent})` }}>
                    <i />
                  </div>
                  <h3 className="feature-card__title">{feature.split(" — ")[0] || feature}</h3>
                  <p className="feature-card__description">{feature.split(" — ")[1] || ""}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <section className="section project-detail-tech" style={getAccentStyle(project.accent)}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Technology</span>
              <h2 className="section-title">Built With</h2>
              <p className="section-lead">The tools and technologies powering {project.name}.</p>
            </div>
            <div className="project-tech-grid">
              {project.techStack.map((tech, index) => (
                <span key={index} className="project-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.links && Object.keys(project.links).length > 0 && (
        <section className="section section--line project-detail-links" style={getAccentStyle(project.accent)}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Links</span>
              <h2 className="section-title">Explore {project.name}</h2>
            </div>
            <div className="project-links-grid">
              {project.links.website && (
                <a className="project-link-card" href={project.links.website} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Live Application</span>
                  <span className="project-link-card__url">{project.links.website}</span>
                </a>
              )}
              {project.links.app && (
                <a className="project-link-card" href={project.links.app} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8M12 17v-5" />
                  </svg>
                  <span>Web App</span>
                  <span className="project-link-card__url">{project.links.app}</span>
                </a>
              )}
              {project.links.prototype && (
                <a className="project-link-card" href={project.links.prototype} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <path d="M9 9h6M9 15h6" />
                  </svg>
                  <span>Prototype</span>
                  <span className="project-link-card__url">{project.links.prototype}</span>
                </a>
              )}
              {project.links.landing && (
                <a className="project-link-card" href={project.links.landing} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12V7H5V7M14 7v10M17 7v10" />
                  </svg>
                  <span>Landing Page</span>
                  <span className="project-link-card__url">{project.links.landing}</span>
                </a>
              )}
              {project.links.github && (
                <a className="project-link-card" href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18v3.87" />
                  </svg>
                  <span>GitHub Repository</span>
                  <span className="project-link-card__url">{project.links.github}</span>
                </a>
              )}
              {project.links.apk && (
                <a className="project-link-card" href={project.links.apk} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  <span>Android APK</span>
                  <span className="project-link-card__url">GitHub Releases</span>
                </a>
              )}
              {project.links.download && (
                <a className="project-link-card" href={project.links.download} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  <span>Download</span>
                  <span className="project-link-card__url">Available</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}

import { FinalCta } from "@/components/sections/Growth";