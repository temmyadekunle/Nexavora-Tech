"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  // Reset during render (not in an effect) whenever the route changes, so a
  // navigation — including back/forward — always collapses the mobile menu.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <span className="brand__mark">
            <Image src="/mark.png" alt="" width={313} height={214} />
          </span>
          <span className="brand__text">
            NEXAVORA
            <span className="brand__sub">Technologies</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <Link className="nav__link" href={nav.primary[0].href}>
            {nav.primary[0].label}
          </Link>

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

          {nav.primary.slice(1).map((item) => (
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
        <div className="mobile-nav__group">
          <Link href={nav.primary[0].href}>{nav.primary[0].label}</Link>
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

        {nav.primary.slice(1).map((item) => (
          <div className="mobile-nav__group" key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </div>
        ))}

        <Link className="btn btn-primary" href="/contact/">
          Start a Project
        </Link>
      </div>
    </header>
  );
}
