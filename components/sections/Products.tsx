import Link from "next/link";
import { products } from "@/lib/content";

export function Products() {
  return (
    <section className="section section--line" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Products We&apos;re Building</span>
          <h2 className="section-title">
            We don&apos;t just build for clients.{" "}
            <span className="grad-text">We build our own too.</span>
          </h2>
          <p className="section-lead">
            Nexavora is a product-building company. Every product below was designed,
            engineered and shipped by the same team available to you.
          </p>
        </div>

        <div>
          {products.map((product, index) => (
            <article
              className={`product-card${index % 2 === 1 ? " product-card--reverse" : ""}`}
              id={product.slug}
              key={product.slug}
            >
              <div>
                <span
                  className={`product-card__tag${product.status === "Live" ? " product-card__tag--live" : ""}`}
                >
                  <i /> {product.status}
                </span>

                <h3 className="product-card__name">{product.name}</h3>

                <p className="product-card__problem">
                  <span>The problem</span>
                  {product.problem}
                </p>

                <p className="product-card__desc">{product.description}</p>

                <div className="product-card__actions btn-row">
                  <Link className="btn btn-ghost btn-sm" href={`/products/#${product.slug}`}>
                    Explore {product.name}
                  </Link>
                </div>
              </div>

              <div className="product-card__visual">
                <span className="product-card__badge">{product.industry}</span>
                <span className="product-card__visual-word">{product.name}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
