import Image from "next/image";
import Link from "next/link";
import { hero, trustedBy } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">
            We Build <span className="grad-text">Technology</span> That Moves Ideas Forward.
          </h1>
          <p className="hero__statement">{hero.statement}</p>

          <div className="btn-row hero__actions">
            <Link className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </Link>
            <Link className="btn btn-ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>

          <div className="hero__meta">
            <span>Product studio</span>
            <span>Design &amp; engineering</span>
            <span>Digital growth</span>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="orbit orbit--spin">
            <i className="orbit__dot" />
          </div>
          <div className="orbit orbit--2 orbit--spin-rev">
            <i className="orbit__dot orbit__dot--orange" />
          </div>
          <div className="orbit orbit--3" />

          <Image
            className="hero__mark"
            src="/mark.png"
            alt=""
            width={313}
            height={214}
            priority
          />

          <span className="chip chip--1">
            <i /> Build
          </span>
          <span className="chip chip--2">
            <i /> Design
          </span>
          <span className="chip chip--3">
            <i /> Grow &amp; Operate
          </span>
        </div>
      </div>
    </section>
  );
}

export function TrustedBy() {
  return (
    <section className="section section--tight trusted">
      <div className="container trusted__inner">
        <div className="trusted__copy">
          <h2>{trustedBy.headline}</h2>
          <p>{trustedBy.note}</p>
        </div>
        <ul className="trusted__marks">
          {trustedBy.marks.map((mark) => (
            <li key={mark}>{mark}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
