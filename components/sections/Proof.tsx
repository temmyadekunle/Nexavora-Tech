import Link from "next/link";
import ClientLogo from "@/components/ClientLogo";
import { clientValue, clients, stats, team, work } from "@/lib/content";

export function SelectedWork() {
  return (
    <section className="section section--line" id="selected-work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2 className="section-title">
            A look at the products, experiences and digital solutions{" "}
            <span className="grad-text">we&apos;ve helped bring to life</span>
          </h2>
        </div>

        <div className="grid-3">
          {work.map((project) => (
            <article className="work-card" id={project.slug} key={project.slug}>
              <div
                className={`work-card__band${
                  project.accent === "violet"
                    ? " work-card__band--violet"
                    : project.accent === "orange"
                      ? " work-card__band--orange"
                      : ""
                }`}
              >
                <span>{project.name}</span>
              </div>

              <span className="work-card__industry">{project.industry}</span>
              <h3>{project.name}</h3>
              <p className="work-card__outcome">{project.outcome}</p>

              <ul className="work-card__services">
                {project.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>

              <div className="work-card__cta">
                <Link className="link-arrow" href={`/company/#${project.slug}`}>
                  View case study <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="section section--line" id="team">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Meet the People</span>
          <h2 className="section-title">The people behind Nexavora</h2>
          <p className="section-lead">
            Designers, technologists, strategists and problem-solvers committed to building
            useful digital solutions.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-card__avatar" aria-hidden="true">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt=""
                    width={120}
                    height={120}
                    loading="lazy"
                  />
                ) : (
                  member.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")
                )}
              </div>
              <h3>{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p className="team-card__focus">{member.focus}</p>
              <p className="team-card__specialty">{member.specialty}</p>
            </article>
          ))}
        </div>

        <p className="team-note">A small team building big ideas.</p>
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
          <span className="eyebrow">Businesses We&apos;ve Worked With</span>
          <h2 className="section-title">Real organisations, real work</h2>
          <p className="section-lead">
            From emerging businesses to established organisations, we work with teams that
            want to solve problems and build better digital experiences.
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
        <p className="muted" style={{ marginTop: 18, fontSize: 14 }}>
          More logos are added as partners give permission to display them.
        </p>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="section section--tight section--line">
      <div className="container">
        <div className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat__value">{stat.value}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
