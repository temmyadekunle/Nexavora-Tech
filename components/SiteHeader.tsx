"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2 4.5 6 8.5 10 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Reset during render (not in an effect) whenever the route changes, so a
  // navigation — including back/forward — always collapses the mobile menu.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock background scroll while the mobile panel is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Escape") return;

    if (open) {
      setOpen(false);
      toggleRef.current?.focus();
      return;
    }

    // Escape closes an open desktop dropdown. Focus must leave the whole
    // <nav> — not just that one drop — otherwise the :focus-within rule that
    // opened the menu keeps it open, and landing on the next drop would simply
    // open that one instead. The drop containers are plain <div>s anyway and
    // cannot take focus themselves.
    const active = document.activeElement as HTMLElement | null;
    if (active?.closest(".nav")) {
      const next = document.querySelector<HTMLElement>(
        ".site-header__actions a, .site-header__actions button"
      );
      (next ?? document.querySelector<HTMLElement>(".brand"))?.focus();
    }
  };

  return (
    <header className="site-header" onKeyDown={onKeyDown}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand__mark">
            <Image src="/logo/nexavora-symbol.svg" alt="" width={36} height={36} />
          </span>
          <span className="brand__text">
            NEXAVORA
            <span className="brand__sub">{site.brandSuffix}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <div className="nav__drop">
            <Link className="nav__drop-label" href={nav.products.href}>
              {nav.products.label}
              <Chevron />
            </Link>
            <div className="nav__menu">
              {nav.products.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <strong>{item.label}</strong>
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className="nav__drop">
            <Link className="nav__drop-label" href={nav.solutions.href}>
              {nav.solutions.label}
              <Chevron />
            </Link>
            <div className="nav__menu">
              {nav.solutions.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <strong>{item.label}</strong>
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className="nav__drop">
            <Link className="nav__drop-label" href={nav.company.href}>
              {nav.company.label}
              <Chevron />
            </Link>
            <div className="nav__menu">
              {nav.company.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <strong>{item.label}</strong>
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          {nav.links.map((item) => (
            <Link key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link className="btn btn-primary btn-sm" href="/contact/">
            Start a Project
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={open ? "mobile-nav is-open" : "mobile-nav"}>
        <nav aria-label="Mobile">
          <div className="mobile-nav__group">
            <Link href={nav.products.href}>{nav.products.label}</Link>
            <div className="mobile-nav__sub">
              {nav.products.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className="mobile-nav__group">
            <Link href={nav.solutions.href}>{nav.solutions.label}</Link>
            <div className="mobile-nav__sub">
              {nav.solutions.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className="mobile-nav__group">
            <Link href={nav.company.href}>{nav.company.label}</Link>
            <div className="mobile-nav__sub">
              {nav.company.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          {nav.links.map((item) => (
            <div className="mobile-nav__group" key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </div>
          ))}

          <Link className="btn btn-primary" href="/contact/">
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
