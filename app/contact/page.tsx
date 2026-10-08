import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { FinalCta } from "@/components/sections/Growth";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Nexavora Technologies — tell us about the problem you are trying to solve.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="grad-text">useful</span>
          </>
        }
        lead="Have an idea, a business problem or a digital experience that needs to be better? Tell us about it and we'll reply with next steps."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>Talk to Nexavora</h2>
            <p>
              A short note is enough: what you want to build, who it is for, and roughly
              when you need it. We&apos;ll come back with questions, a plan or an honest
              &ldquo;that isn&apos;t worth building.&rdquo;
            </p>

            <div className="contact-list">
              <a href={`mailto:${site.email}`}>
                <span>Email</span>
                <strong>{site.email}</strong>
              </a>
              <div>
                <span>Response time</span>
                <strong>Within 1–2 working days</strong>
              </div>
              <div>
                <span>Best for</span>
                <strong>Products, platforms, design &amp; growth</strong>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
