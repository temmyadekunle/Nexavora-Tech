import Link from "next/link";
import { process, whatWeDo, whyNexavora } from "@/lib/content";

export function WhatWeDo() {
  return (
    <section className="section" id="what-we-do">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">
            Four ways we turn ideas into <span className="grad-text">working products</span>
          </h2>
          <p className="section-lead">
            Build, Design, Grow and Operate — one team across the whole life of a digital
            product.
          </p>
        </div>

        <div className="grid-4">
          {whatWeDo.map((item) => (
            <article className="card card--service" key={item.key}>
              <span className="card__index">{item.index}</span>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__headline">{item.headline}</p>
              <p className="card__body">{item.summary}</p>
              <ul className="card__chips">
                {item.highlights.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
              <Link className="card__link" href={item.cta.href}>
                {item.cta.label} <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="process__cta">
          <Link className="link-arrow" href="/solutions/">
            Explore our solutions <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WhyNexavora() {
  return (
    <section className="section section--line" id="why-nexavora">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Nexavora</span>
          <h2 className="section-title">Practical, not generic</h2>
          <p className="section-lead">
            No “we are passionate” filler. This is how the work actually happens.
          </p>
        </div>

        <div className="why-list">
          {whyNexavora.map((item, index) => (
            <article className="why-item" key={item.title}>
              <span className="why-item__mark">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section section--line" id="how-we-work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How We Work</span>
          <h2 className="section-title">
            Discover <span className="grad-text">→</span> Define <span className="grad-text">→</span>{" "}
            Design <span className="grad-text">→</span> Build <span className="grad-text">→</span>{" "}
            Launch <span className="grad-text">→</span> Improve
          </h2>
          <p className="section-lead">
            A short, honest loop: understand the problem, ship the smallest useful version,
            then keep improving it against real usage.
          </p>
        </div>

        <ol className="process">
          {process.map((step) => (
            <li className="process__step" key={step.step}>
              <h3>{step.step}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
