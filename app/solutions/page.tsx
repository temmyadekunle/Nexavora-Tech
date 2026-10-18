import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { whatWeDo, buildApproach, buildCta } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Build, Design, Grow and Operate — technology, design, digital growth, customer experience and business solutions from Nexavora.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Four solutions, <span className="grad-text">one team</span>
          </>
        }
        lead="Technology, design, digital growth, customer experience and business solutions — combined around the problem you are actually trying to solve."
      />

      {whatWeDo.map((solution) => (
        <section
          className={`section${solution.key === "build" ? "" : " section--line"}`}
          id={solution.key}
          key={solution.key}
        >
          <div className="container">
            <div className="tech">
              <div className="prose">
                <span className="eyebrow">
                  {solution.index} — {solution.subtitle}
                </span>
                <h2>{solution.headline}</h2>
                <p>{solution.body}</p>
                <p className="prose__cta-row">
                  <Link className="link-arrow" href={solution.cta.href}>
                    {solution.cta.label} <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="card__subtitle">What that includes</h3>
                <ul className="checklist">
                  {solution.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section section--line" id="build-approach">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our Approach</span>
            <h2 className="section-title">
              Understand <span className="grad-text">→</span> Plan <span className="grad-text">→</span> Build <span className="grad-text">→</span> Launch <span className="grad-text">→</span> Improve
            </h2>
          </div>
          <ol className="process">
            {buildApproach.map((step, i) => (
              <li key={step.step} className="process__step">
                <span className="process__step__mark">{i + 1}</span>
                <div>
                  <h3>{step.step}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--line" id="build-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Ready to Build?</span>
            <h2 className="section-title">{buildCta.heading}</h2>
            <p className="section-lead">{buildCta.body}</p>
          </div>
          <div className="cta-actions">
            <Link className="btn btn-primary" href={buildCta.primary.href}>
              {buildCta.primary.label}
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
