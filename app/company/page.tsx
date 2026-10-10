import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { SelectedWork, Team } from "@/components/sections/Proof";
import { Process } from "@/components/sections/Services";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Nexavora Technology Solutions is a technology company building digital products and providing technology, design, digital growth, customer experience and business solutions.",
};

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            A technology company with <span className="grad-text">real people</span>
          </>
        }
        lead="We build products, we solve business problems, and we do it with real capabilities, real work and real clients."
      />

      <section className="section" id="about">
        <div className="container prose">
          <span className="eyebrow">About Nexavora</span>
          <h2>Who we are and what we believe</h2>
          <p>
            Nexavora Technology Solutions is a technology company building digital products
            and providing technology, design, digital growth, customer experience and
            business solutions.
          </p>
          <p>
            We work with businesses, organisations and people building what&apos;s next — and
            we build our own products alongside client work, because the standard we hold
            ourselves to should be the same one we&apos;d want as a client.
          </p>
          <ul className="checklist">
            <li>We start with the problem, not the technology.</li>
            <li>We design around the people who will actually use the product.</li>
            <li>Strategy, design, engineering and growth work under one roof.</li>
            <li>We build solutions that can evolve as the business grows.</li>
          </ul>
        </div>
      </section>

      <div id="approach">
        <Process />
      </div>

      <Team />
      <SelectedWork />

      <section className="section section--line" id="labs">
        <div className="container prose">
          <span className="eyebrow">Nexavora Labs</span>
          <h2>Where we experiment, prototype and explore what&apos;s next</h2>
          <p>
            Labs is our early-stage space. Not everything here is a product yet — but it&apos;s
            where tomorrow&apos;s products start. When Nexavora ships something new, it usually
            begins as a question we wanted to answer.
          </p>
          <ul className="checklist">
            <li>AI experiments</li>
            <li>Experimental products and prototypes</li>
            <li>New technology and internal tools</li>
            <li>Early-stage ideas worth testing</li>
          </ul>
          <p className="section-lead" style={{ marginTop: 22 }}>
            Nexavora Technology Solutions is organised into three parts:{" "}
            <strong>Products</strong> —
            what we build and launch; <strong>Solutions</strong> — what we build for clients;
            and <strong>Labs</strong> — what we&apos;re experimenting with.
          </p>
        </div>
      </section>

      <section className="section section--line" id="careers">
        <div className="container prose">
          <span className="eyebrow">Careers</span>
          <h2>Build with us</h2>
          <p>
            We&apos;re a small team and we like it that way — everyone ships, everyone sees
            the outcome. If you love solving problems and want to work across product,
            design and engineering, we&apos;d like to hear from you.
          </p>
          <ul className="checklist">
            <li>Designers (UI/UX, graphics)</li>
            <li>Software developers (web, mobile, WordPress)</li>
            <li>Strategists and operators</li>
          </ul>
          <p style={{ marginTop: 22 }}>
            Send a short note about yourself and the work you&apos;re proudest of to{" "}
            <a href={`mailto:${site.email}`} className="grad-text">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
