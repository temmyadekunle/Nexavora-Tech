"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/Lightbox";

interface ProjectCardProps {
  project: {
    slug: string;
    name: string;
    industry: string;
    description: string;
    longDescription?: string;
    status: string;
    accent: string;
    logo: string;
    coverImage?: string;
    screenshots?: { src: string; alt: string; caption: string }[];
    mockups?: { desktop?: string; mobile?: string };
    features?: string[];
    techStack?: string[];
    links?: {
      website?: string;
      app?: string;
      prototype?: string;
      landing?: string;
      apk?: string;
      github?: string;
      download?: string;
    };
    demoData?: unknown[];
    roadmap?: unknown;
    testimonials?: unknown[];
    providerFeatures?: string[];
    details?: unknown;
  };
  featured?: boolean;
}

const accentColors: Record<string, string> = {
  cyan: "var(--cyan)",
  violet: "var(--violet)",
  amber: "var(--orange)",
  orange: "var(--orange)",
};

const statusStyles: Record<string, { bg: string; text: string; dot: string }> = {
  Live: { bg: "rgba(56, 224, 139, 0.15)", text: "#38e08b", dot: "#38e08b" },
  "In development": { bg: "rgba(163, 75, 255, 0.15)", text: "var(--violet)", dot: "var(--violet)" },
  Prototype: { bg: "rgba(255, 173, 50, 0.15)", text: "var(--orange)", dot: "var(--orange)" },
};

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [lightboxCaption, setLightboxCaption] = useState("");

  const statusInfo = statusStyles[project.status] || statusStyles["Prototype"];
  const accentColor = accentColors[project.accent] || "var(--cyan)";

  const openLightbox = (src: string, alt: string, caption?: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxCaption(caption || "");
    setLightboxOpen(true);
  };

  const primaryLink = project.links?.website || project.links?.prototype || project.links?.app || project.links?.landing;
  const secondaryLink = project.links?.github || project.links?.apk || project.links?.download;

  const styleWithAccent = { "--accent": accentColor } as React.CSSProperties;

  if (featured) {
    return (
      <article className="project-featured" style={styleWithAccent}>
        <div className="project-featured__visual">
          {project.coverImage && (
            <button
              className="project-featured__image-wrapper"
              onClick={() => openLightbox(project.coverImage!, project.name + " cover", project.name + " cover")}
              aria-label={`View ${project.name} cover image`}
            >
              <Image
                src={project.coverImage}
                alt={`${project.name} cover`}
                width={1200}
                height={600}
                className="project-featured__image"
                priority
                unoptimized
              />
              <span className="project-featured__zoom" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </button>
          )}
        </div>
        <div className="project-featured__content">
          <div className="project-featured__header">
            <div className="project-featured__meta">
              {project.logo && (
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={64}
                  height={64}
                  className="project-featured__logo"
                  unoptimized
                />
              )}
              <div>
                <h2 className="project-featured__name">{project.name}</h2>
                <span
                  className="project-featured__status"
                  style={{
                    backgroundColor: statusInfo.bg,
                    color: statusInfo.text,
                  }}
                >
                  <i style={{ backgroundColor: statusInfo.dot }} />
                  {project.status}
                </span>
              </div>
            </div>
            <span className="project-featured__badge" style={{ background: accentColor }}>Featured</span>
          </div>
          <p className="project-featured__description">{project.longDescription || project.description}</p>
          <div className="project-featured__actions btn-row">
            {primaryLink && (
              <a
                className="btn btn-primary"
                href={primaryLink}
                target={primaryLink.startsWith("http") ? "_blank" : undefined}
                rel={primaryLink.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                Visit Project
              </a>
            )}
            {secondaryLink && (
              <a
                className="btn btn-ghost"
                href={secondaryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            )}
          </div>
          <Lightbox
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            src={lightboxSrc}
            alt={lightboxAlt}
            caption={lightboxCaption}
          />
        </div>
      </article>
    );
  }

  return (
    <article className="project-card" style={styleWithAccent}>
      <div className="project-card__image-wrapper">
        {project.coverImage && (
          <button
            className="project-card__image"
            onClick={() => openLightbox(project.coverImage!, project.name + " cover", project.name + " cover")}
            aria-label={`View ${project.name} cover image`}
          >
            <Image
              src={project.coverImage}
              alt={`${project.name} cover`}
              width={800}
              height={450}
              className="project-card__image-img"
              loading="lazy"
              unoptimized
            />
            <span className="project-card__overlay" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="project-card__content">
        <div className="project-card__header">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={48}
              height={48}
              className="project-card__logo"
              unoptimized
            />
          )}
          <div className="project-card__meta">
            <h3 className="project-card__name">{project.name}</h3>
            <span
              className="project-card__status"
              style={{
                backgroundColor: statusInfo.bg,
                color: statusInfo.text,
              }}
            >
              <i style={{ backgroundColor: statusInfo.dot }} />
              {project.status}
            </span>
          </div>
        </div>
        <span className="project-card__badge">{project.industry}</span>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__actions">
          {primaryLink && (
            <a
              className="project-card__link"
              href={primaryLink}
              target={primaryLink.startsWith("http") ? "_blank" : undefined}
              rel={primaryLink.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span>Explore Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
          {secondaryLink && (
            <a
              className="project-card__link project-card__link--secondary"
              href={secondaryLink}
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
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src={lightboxSrc}
          alt={lightboxAlt}
          caption={lightboxCaption}
        />
      </div>
    </article>
  );
}