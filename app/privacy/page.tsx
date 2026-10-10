import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles information on this website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="grad-text">Policy</span>
          </>
        }
        lead="A plain-language description of what this website does with information."
      />

      <section className="section">
        <div className="container prose">
          <h2>This website collects nothing automatically</h2>
          <p>
            This is a static website. It has no user accounts, no analytics, no advertising
            trackers and no tracking cookies. Simply visiting the site does not send us any
            personal information.
          </p>

          <h2>When you contact us</h2>
          <p>
            Our contact form does not store or transmit anything through this website.
            Pressing <strong>Send Inquiry</strong> opens the email application already
            installed on your device, with your message pre-filled, and sends it from your
            own email account to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p>
            We keep the correspondence you send us so that we can reply and, if you go on to
            work with us, continue the conversation. We do not sell it, rent it or share it
            with third parties for marketing.
          </p>

          <h2>Third parties</h2>
          <p>
            The site is delivered from a content delivery network, which sees standard
            technical request data such as an IP address and browser type in order to serve
            the pages. We do not run advertising, profiling or cross-site tracking scripts on
            this website.
          </p>

          <h2>Links to other websites</h2>
          <p>
            Where we link to another organisation&apos;s website, that site&apos;s own
            privacy policy applies. We are not responsible for their content or practices.
          </p>

          <h2>Your choices</h2>
          <p>
            You can avoid the contact form entirely and email us directly. If you have
            previously contacted us and would like to know what we hold, or ask us to delete
            it, write to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will respond.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If the way this website handles information changes, this page will be updated to
            match. Check back here for the current version.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
