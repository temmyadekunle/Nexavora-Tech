"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import { getAccentStyle } from "@/lib/utils";

export interface GalleryShot {
  src: string;
  alt: string;
  caption: string;
  pending?: boolean;
}

interface ProjectGalleryProps {
  projectName: string;
  accent: string;
  screenshots: GalleryShot[];
}

export default function ProjectGallery({ projectName, accent, screenshots }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryShot | null>(null);

  const show = (shot: GalleryShot) => {
    setActive(shot);
    setOpen(true);
  };

  return (
    <>
      <div className="project-screenshots-grid">
        {screenshots.map((shot, index) => (
          <article key={index} className="project-screenshot-card" style={getAccentStyle(accent)}>
            <button
              type="button"
              className="project-screenshot-card__media"
              onClick={() => show(shot)}
              aria-label={`View ${shot.caption} image`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={800}
                height={600}
                className="project-screenshot-card__image"
                loading="lazy"
                unoptimized
              />
              {shot.pending && (
                <span className="project-screenshot-card__pending">Asset pending</span>
              )}
              <span className="project-screenshot-card__zoom" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </span>
            </button>
            <figcaption className="project-screenshot-card__caption">{shot.caption}</figcaption>
          </article>
        ))}
      </div>

      <Lightbox
        isOpen={open}
        onClose={() => setOpen(false)}
        src={active?.src || ""}
        alt={active?.alt || `${projectName} screenshot`}
        caption={active?.caption}
      />
    </>
  );
}
