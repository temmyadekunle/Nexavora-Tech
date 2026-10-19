import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";

// Explore buttons send visitors to each product's own destination:
// CareNBuddi -> live web app; Livanta -> prototype. Prefer website,
// then prototype, then landing.
function getExploreHref(product: (typeof products)[0]): string | undefined {
  const links = product.links as { website?: string; prototype?: string; landing?: string };
  return links.website || links.prototype || links.landing;
}

export function Products() {
  return (
    <section className="section section--line" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Products</span>
          <h2 className="section-title">
            Two products, <span className="grad-text">designed and built in-house.</span>
          </h2>
          <p className="section-lead">
            CareNBuddi and Livanta were designed, engineered and are maintained by the same
            team available for client work.
          </p>
        </div>

        <div className="product-showcase-list">
          {products.map((product, index) => {
            const explore = getExploreHref(product);
            return (
              <article
                className={`product-showcase${index % 2 === 1 ? " product-showcase--reverse" : ""}`}
                id={product.slug}
                key={product.slug}
              >
                <div className="product-showcase__visual">
                  <figure className="product-showcase__frame">
                    <Image
                      src={product.showcaseScreenshot}
                      alt={`${product.name} application home screen`}
                      width={780}
                      height={1688}
                      className="product-showcase__screenshot"
                      priority={index === 0}
                      unoptimized
                    />
                  </figure>
                </div>

                <div className="product-showcase__info">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={56}
                    height={56}
                    className="product-showcase__logo"
                  />

                  <h3 className="product-showcase__name">{product.name}</h3>

                  <div className="product-showcase__meta">
                    <span className="product-showcase__status">
                      <i /> {product.status}
                    </span>
                    <span className="product-showcase__category">{product.industry}</span>
                  </div>

                  <p className="product-showcase__desc">{product.description}</p>

                  <ul className="product-showcase__features">
                    {product.showcaseHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="product-showcase__actions">
                    {explore ? (
                      <a
                        className="btn btn-primary"
                        href={explore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Explore {product.name}
                      </a>
                    ) : (
                      <Link className="btn btn-primary" href="/contact/">
                        Explore {product.name}
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
