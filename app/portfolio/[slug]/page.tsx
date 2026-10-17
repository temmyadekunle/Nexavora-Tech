import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";
import { getAccentStyle, getStatusStyle, getStatusDotStyle, getStatusNote, getExternalActions } from "@/lib/utils";
import ProjectGallery from "@/components/ProjectGallery";

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

  const external = getExternalActions(project.links as Record<string, string | undefined>);

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
                <span className="project-detail-hero__status" style={getStatusStyle(project.status)}>
                  <i style={getStatusDotStyle(project.status)} /> {project.status}
                </span>
              </div>
              <p className="project-detail-hero__status-note">{getStatusNote(project.status)}</p>
              <p className="project-detail-hero__description">
                {project.longDescription || project.description}
              </p>
              <div className="project-detail-hero__actions btn-row">
                {external.slice(0, 2).map((a) => (
                  <a
                    key={a.key}
                    className="btn btn-primary"
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {a.label}
                  </a>
                ))}
                <Link className="link-arrow" href="/portfolio/">
                  Back to Portfolio <span>→</span>
                </Link>
              </div>
            </div>
            <div className="project-detail-hero__visual">
              {project.coverImage && (
                <Image
                  src={project.coverImage}
                  alt={`${project.name} — ${project.industry}`}
                  width={1200}
                  height={675}
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
              <p className="section-lead">
{(project.status as "In Development" | "Beta" | "Concept" | "Prototype") === "In Development"
? "A look at how the site looks today."
: "A closer look at the interface and key features."}
              </p>
            </div>
            <ProjectGallery
              projectName={project.name}
              accent={project.accent}
              screenshots={project.screenshots}
            />
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
                  <div className="feature-card__icon">
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

      {external.length > 0 && (
        <section className="section section--line project-detail-links" style={getAccentStyle(project.accent)}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Links</span>
              <h2 className="section-title">Explore {project.name}</h2>
            </div>
            <div className="project-links-grid">
              {external.map((a) => (
                <a
                  key={a.key}
                  className="project-link-card"
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>{a.label}</span>
                  <span className="project-link-card__url">{a.url.replace(/^https?:\/\//, "")}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta />
    </>
  );
}

import { FinalCta } from "@/components/sections/Growth";