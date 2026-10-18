import Link from "next/link";
import { capabilities, careers, finalCta } from "@/lib/content";

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
        </div>
      </div>
    </section>
  );
}
