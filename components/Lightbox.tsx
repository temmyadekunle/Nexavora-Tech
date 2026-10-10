"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  caption?: string;
}

export default function Lightbox({ isOpen, onClose, src, alt, caption }: LightboxProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <div className="lightbox__backdrop" />
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="lightbox__image-wrapper">
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={1000}
            className={`lightbox__image ${imageLoaded ? "lightbox__image--loaded" : ""}`}
            onLoad={() => setImageLoaded(true)}
            priority
            unoptimized
          />
          {!imageLoaded && (
            <div className="lightbox__loader" aria-hidden="true">
              <div className="lightbox__spinner" />
            </div>
          )}
        </div>
        {caption && (
          <p className="lightbox__caption">{caption}</p>
        )}
      </div>
    </div>
  );
}