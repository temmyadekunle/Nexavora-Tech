import Link from "next/link";
import { capabilities, careers, finalCta, insights } from "@/lib/content";

export function Capabilities() {
  return (
    <section className="section section--line" id="capabilities">
      <div className="container">
        <div className="tech">
          <div className="prose">
            <span className="eyebrow">Technology &amp; Capabilities</span>
            <h2>Built with modern technology</h2>
            <p>
              The point is credibility, not a wall of logos: the tools we use every day to
              design, build and ship.
            </p>
          </div>

          <ul className="tech__chips">
            {capabilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section className="section section--line" id="insights">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Insights</span>
          <h2 className="section-title">
            Ideas, perspectives &amp; <span className="grad-text">practical knowledge</span>
          </h2>
          <p className="section-lead">
            What we have learned building products, working with clients and keeping up with
            the tools.
          </p>
        </div>

        <div className="grid-4">
          {insights.map((article) => (
            <article className="insight-card" key={article.title}>
              <span className="insight-card__topic">{article.topic}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link className="link-arrow" href="/insights/">
                Read insight <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Careers() {
  return (
    <section className="section section--tight" id="careers">
      <div className="container">
        <div className="careers">
          <div>
            <span className="eyebrow">Careers</span>
            <h2>{careers.heading}</h2>
            <p>{careers.body}</p>
          </div>
          <Link className="btn btn-ghost" href={careers.cta.href}>
            {careers.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final-cta" id="start">
      <div className="container">
        <span className="eyebrow">Have an idea worth building?</span>
        <h2>{finalCta.heading}</h2>
        <p>{finalCta.body}</p>
        <div className="btn-row">
          <Link className="btn btn-primary" href={finalCta.primary.href}>
            {finalCta.primary.label}
          </Link>
          <Link className="btn btn-ghost" href={finalCta.secondary.href}>
            {finalCta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
