import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" className="brand">
              <span className="brand__mark">
                <Image src="/mark.png" alt="" width={313} height={214} />
              </span>
              <span className="brand__text">
                NEXAVORA
                <span className="brand__sub">{site.brandSuffix}</span>
              </span>
            </Link>
            <p>{footer.blurb}</p>
          </div>

          {footer.columns.map((column) => (
            <div className="site-footer__col" key={column.title}>
              <h4>{column.title}</h4>
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
