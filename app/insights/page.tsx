import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { insights, insightsStatus } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Ideas, perspectives and practical knowledge on product development, digital transformation, UI/UX, AI and customer experience.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas, perspectives &amp; <span className="grad-text">practical knowledge</span>
          </>
        }
        lead="What we have learned building products, working with clients and keeping up with the tools — written down instead of kept in our heads."
      />

      <section className="section">
        <div className="container">
          <p className="insights-status">{insightsStatus}</p>

          <div className="grid-2 insights-grid">
            {insights.map((article) => (
              <article className="insight-card" key={article.title}>
                <span className="insight-card__topic">{article.topic}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
