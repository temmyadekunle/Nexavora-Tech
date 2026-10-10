import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms on which ${site.legalName} provides this website and its services.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Terms of <span className="grad-text">Service</span>
          </>
        }
        lead="The terms that apply to this website, and how project engagements are agreed."
      />

      <section className="section">
        <div className="container prose">
          <h2>About this website</h2>
          <p>
            This website is provided by {site.legalName} for general information about our
            company, products and services. By using it you agree to these terms. If you do
            not agree, please do not use the site.
          </p>

          <h2>Information, not advice</h2>
          <p>
            The content of this site describes what we do and how we think about it. It is
            general information and is not professional, legal, financial or technical advice
            for your specific situation. We aim to keep it accurate, but it may change
            without notice and is provided &ldquo;as is&rdquo; without warranties of any
            kind.
          </p>

          <h2>Project engagements</h2>
          <p>
            Nothing on this website forms a contract for work. Scope, deliverables, timing,
            fees and ownership of the work are agreed separately in writing before any
            project begins. Where a signed agreement exists, that agreement takes precedence
            over anything on this site.
          </p>

          <h2>Our products</h2>
          <p>
            Product names, descriptions and statuses shown on this site reflect what is true
            at the time of viewing. Some products may be in development and can change,
            pause or be withdrawn.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless stated otherwise, the content, design, code and branding on this site
            belong to {site.legalName}. Client names, logos and project material remain the
            property of their respective owners and are used with permission. You may not
            reproduce our content for commercial purposes without written permission.
          </p>

          <h2>Links to other sites</h2>
          <p>
            We link to third-party websites for convenience. We do not control them and are
            not responsible for their content, availability or practices.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.legalName} is not liable for any
            loss arising from your use of, or reliance on, this website. Nothing in these
            terms excludes liability that cannot lawfully be excluded.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. Continued use of the site after a
            change means you accept the revised terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
