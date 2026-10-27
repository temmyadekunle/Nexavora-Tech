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

type MenuGroup = {
  key: "solutions" | "products" | "company";
  label: string;
  href: string;
  items: { label: string; hint: string; href: string }[];
};

const solutions: MenuGroup = { key: "solutions", ...nav.solutions };
const products: MenuGroup = { key: "products", ...nav.products };
const company: MenuGroup = { key: "company", ...nav.company };

function normalizePath(path: string) {
  return path !== "/" ? path.replace(/\/+$/, "") : "/";
}

function isCurrent(pathname: string, href: string) {
  const base = normalizePath(href.split("#")[0].split("?")[0]);
  const current = normalizePath(pathname);
  return base === "/" ? current === "/" : current === base;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<MenuGroup["key"] | null>(null);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Reset during render (not in an effect) whenever the route changes, so a
  // navigation — including back/forward — always collapses the mobile menu.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setOpenGroup(null);
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

  const closeMenu = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "Escape") return;

    if (open) {
      closeMenu();
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
          <Link
            className="nav__link"
            href={nav.home.href}
            aria-current={isCurrent(pathname, nav.home.href) ? "page" : undefined}
          >
            {nav.home.label}
          </Link>

          {[solutions, products].map((group) => (
            <div className="nav__drop" key={group.key}>
              <Link
                className="nav__drop-label"
                href={group.href}
                aria-current={isCurrent(pathname, group.href) ? "page" : undefined}
              >
                {group.label}
                <Chevron />
              </Link>
              <div className="nav__menu">
                {group.items.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <strong>{item.label}</strong>
                    <small>{item.hint}</small>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            className="nav__link"
            href={nav.portfolio.href}
            aria-current={isCurrent(pathname, nav.portfolio.href) ? "page" : undefined}
          >
            {nav.portfolio.label}
          </Link>

          <div className="nav__drop">
            <Link
              className="nav__drop-label"
              href={company.href}
              aria-current={isCurrent(pathname, company.href) ? "page" : undefined}
            >
              {company.label}
              <Chevron />
            </Link>
            <div className="nav__menu">
              {company.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <strong>{item.label}</strong>
                  <small>{item.hint}</small>
                </Link>
              ))}
            </div>
          </div>

          <Link
            className="nav__link"
            href={nav.insights.href}
            aria-current={isCurrent(pathname, nav.insights.href) ? "page" : undefined}
          >
            {nav.insights.label}
          </Link>

          <Link
            className="nav__link"
            href={nav.contact.href}
            aria-current={isCurrent(pathname, nav.contact.href) ? "page" : undefined}
          >
            {nav.contact.label}
          </Link>
        </nav>

        <div className="site-header__actions">
          <Link className="btn btn-primary btn-sm" href={nav.cta.href}>
            {nav.cta.label}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? closeMenu() : setOpen(true))}
          >
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={open ? "mobile-nav is-open" : "mobile-nav"}>
        <nav aria-label="Mobile primary">
          <div className="mobile-nav__group">
            <Link
              className="mobile-nav__link"
              href={nav.home.href}
              aria-current={isCurrent(pathname, nav.home.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {nav.home.label}
            </Link>
          </div>

          {[solutions, products].map((group) => (
            <div className="mobile-nav__group" key={group.key}>
              <div className="mobile-nav__row">
                <Link
                  className="mobile-nav__link"
                  href={group.href}
                  aria-current={isCurrent(pathname, group.href) ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {group.label}
                </Link>
                <button
                  type="button"
                  className="mobile-nav__toggle"
                  aria-expanded={openGroup === group.key}
                  aria-controls={`mobile-sub-${group.key}`}
                  aria-label={`${openGroup === group.key ? "Hide" : "Show"} ${group.label} links`}
                  onClick={() =>
                    setOpenGroup((value) => (value === group.key ? null : group.key))
                  }
                >
                  <Chevron />
                </button>
              </div>
              {openGroup === group.key && (
                <div className="mobile-nav__sub" id={`mobile-sub-${group.key}`}>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} onClick={closeMenu}>
                      {item.label}
                      <small>{item.hint}</small>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mobile-nav__group">
            <Link
              className="mobile-nav__link"
              href={nav.portfolio.href}
              aria-current={isCurrent(pathname, nav.portfolio.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {nav.portfolio.label}
            </Link>
          </div>

          <div className="mobile-nav__group">
            <div className="mobile-nav__row">
              <Link
                className="mobile-nav__link"
                href={company.href}
                aria-current={isCurrent(pathname, company.href) ? "page" : undefined}
                onClick={closeMenu}
              >
                {company.label}
              </Link>
              <button
                type="button"
                className="mobile-nav__toggle"
                aria-expanded={openGroup === company.key}
                aria-controls={`mobile-sub-${company.key}`}
                aria-label={`${openGroup === company.key ? "Hide" : "Show"} ${company.label} links`}
                onClick={() =>
                  setOpenGroup((value) => (value === company.key ? null : company.key))
                }
              >
                <Chevron />
              </button>
            </div>
            {openGroup === company.key && (
              <div className="mobile-nav__sub" id={`mobile-sub-${company.key}`}>
                {company.items.map((item) => (
                  <Link key={item.href} href={item.href} onClick={closeMenu}>
                    {item.label}
                    <small>{item.hint}</small>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-nav__group">
            <Link
              className="mobile-nav__link"
              href={nav.insights.href}
              aria-current={isCurrent(pathname, nav.insights.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {nav.insights.label}
            </Link>
          </div>

          <div className="mobile-nav__group">
            <Link
              className="mobile-nav__link"
              href={nav.contact.href}
              aria-current={isCurrent(pathname, nav.contact.href) ? "page" : undefined}
              onClick={closeMenu}
            >
              {nav.contact.label}
            </Link>
          </div>

          <Link className="btn btn-primary" href={nav.cta.href} onClick={closeMenu}>
            {nav.cta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
