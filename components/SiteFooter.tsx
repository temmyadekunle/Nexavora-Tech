import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" className="brand brand--footer" aria-label={`${site.name} home`}>
              <Image
                className="brand__lockup"
                src="/logo/nexavora-primary.svg"
                alt=""
                width={180}
                height={143}
              />
            </Link>
            <p>{footer.blurb}</p>
            <a className="site-footer__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>

          {footer.columns.map((column) => (
            <div className="site-footer__col" key={column.title}>
              <h2 className="site-footer__col-title">{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footer.social.length > 0 && (
          <ul className="site-footer__social">
            {footer.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="site-footer__bottom">
          <span>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
