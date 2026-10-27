import Image from "next/image";
import Link from "next/link";
import ClientLogo from "@/components/ClientLogo";
import PortfolioCard from "@/components/PortfolioCard";
import { clientValue, clients, companyWorkPreview, portfolio, team, testimonials } from "@/lib/content";

export function SelectedWorkPreview() {
  const projects = companyWorkPreview
    .map((slug) => portfolio.find((project) => project.slug === slug))
    .filter((project): project is (typeof portfolio)[number] => Boolean(project));

  return (
    <section className="section section--line" id="selected-work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">
            A short look at <span className="grad-text">what we&apos;ve built</span>
          </h2>
          <p className="section-lead">
            Three projects that show the range of the work. The complete collection of
            products, websites, UI/UX and design projects lives on the Portfolio page.
          </p>
        </div>

        <div className="grid-3">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="section-actions">
          <Link className="btn btn--outline" href="/portfolio/">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Team({ home }: { home?: boolean }) {
  return (
    <section className="section section--line" id="team">
      <div className="container">
        {home ? (
          <div className="section-head section-head--center">
            <span className="eyebrow">Meet the Team</span>
            <h2 className="section-title">The People Behind Nexavora</h2>
            <p className="section-lead">
              Meet the people bringing our ideas to life through product development, design,
              engineering, and creative problem-solving.
            </p>
          </div>
        ) : (
          <div className="section-head section-head--center">
            <span className="eyebrow">Meet the People</span>
            <h2 className="section-title">The people behind Nexavora</h2>
            <p className="section-lead">
              Designers, technologists, strategists and problem-solvers committed to building
              useful digital solutions.
            </p>
          </div>
        )}

        <div className={home ? "team-grid team-grid--home" : "team-grid"}>
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card__avatar" aria-hidden={member.photo ? undefined : true}>
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    width={420}
                    height={520}
                    className="team-card__photo"
                    loading="lazy"
                    unoptimized
                  />
                ) : (
                  member.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                )}
              </div>
              <div className="team-card__body">
                <h3>{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__focus">{member.focus}</p>
                {!home && <p className="team-card__specialty">{member.specialty}</p>}
              </div>
            </article>
          ))}
        </div>

        {home ? (
          <div className="section-actions">
            <Link className="btn btn--outline" href="/company/#team">
              Meet the Full Team
            </Link>
          </div>
        ) : (
          <p className="team-note">A small team building big ideas.</p>
        )}
      </div>
    </section>
  );
}

export function ClientValue() {
  return (
    <section className="section section--line" id="clients">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What Our Clients Value</span>
          <h2 className="section-title">How we show up in the work</h2>
          <p className="section-lead">
            Rather than publish quotes we haven&apos;t earned, here is what working with
            Nexavora actually looks like.
          </p>
        </div>

        <div className="value-list">
          {clientValue.map((item) => (
            <article className="value-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section className="section section--line" id="our-clients">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Clients &amp; Collaborations</span>
          <h2 className="section-title">Businesses We&apos;ve Worked With</h2>
          <p className="section-lead">
            Real organisations we have delivered digital work for.
          </p>
        </div>

        <div className="logo-grid logo-grid--clients">
          {clients.map((client) => {
            const tile = (
              <ClientLogo
                name={client.name}
                src={client.logo}
                width={client.width}
                height={client.height}
              />
            );

            return (
              <div className="logo-tile" key={client.name}>
                {client.url ? (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${client.name} (opens in a new tab)`}
                  >
                    {tile}
                    <small>{client.sector}</small>
                  </a>
                ) : (
                  <>
                    {tile}
                    <small>{client.sector}</small>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section section--line" id="testimonials">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Client Feedback</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-lead">
            Feedback from the businesses we&apos;ve had the opportunity to work with.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article key={t.business} className="testimonial-card">
              <h3 className="testimonial-card__title">{t.title}</h3>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__meta">
                <span className="testimonial-card__business">{t.business}</span>
                <span className="testimonial-card__attribution">{t.attribution}</span>
                <span className="testimonial-card__service">{t.service}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
