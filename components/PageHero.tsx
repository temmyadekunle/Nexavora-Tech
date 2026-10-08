import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <p className="breadcrumbs">
          <Link href="/">Home</Link> / {eyebrow}
        </p>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}
