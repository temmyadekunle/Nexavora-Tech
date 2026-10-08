import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { whatWeDo } from "@/lib/content";

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
                <h2>{solution.title}</h2>
                <p>{solution.body}</p>
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

      <FinalCta />
    </>
  );
}
