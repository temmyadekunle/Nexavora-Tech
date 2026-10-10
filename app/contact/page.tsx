import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { FinalCta } from "@/components/sections/Growth";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Nexavora Technology Solutions — tell us about the problem you are trying to solve and we will reply with next steps.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to <span className="grad-text">Nexavora</span>
          </>
        }
        lead="Have an idea, a business problem or a digital experience that needs to be better? A short note is enough to get started."
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <h2>{contact.heading}</h2>
            <p>{contact.message}</p>

            <div className="contact-list">
              <a href={`mailto:${site.email}`}>
                <span>Email</span>
                <strong>{site.email}</strong>
              </a>
              <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}>
                <span>WhatsApp</span>
                <strong>{site.whatsapp}</strong>
              </a>
              <div>
                <span>Response time</span>
                <strong>{contact.responseTime}</strong>
              </div>
              <div>
                <span>Best for</span>
                <strong>{contact.bestFor}</strong>
              </div>
              <div>
                <span>Where we work</span>
                <strong>{contact.location}</strong>
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
