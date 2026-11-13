import ProductMark from "@/components/ProductMark";
import { products } from "@/lib/content";
import { getAccentStyle, getStatusDotStyle, getStatusStyle } from "@/lib/utils";

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
            Both are in development now. We&apos;ll share more as each one gets closer to
            launch.
          </p>
        </div>

        <div className="grid-2 product-grid">
          {products.map((product) => (
            <article
              className="product-card"
              id={product.slug}
              key={product.slug}
              style={getAccentStyle(product.accent)}
            >
              <div className="product-card__visual">
                <ProductMark name={product.name} logo={product.logo} accent={product.accent} />
              </div>

              <div className="product-card__body">
                <div className="product-card__header">
                  <span className="product-card__kind">Nexavora product</span>
                  <span
                    className="product-card__status"
                    style={getStatusStyle(product.status)}
                  >
                    <i style={getStatusDotStyle(product.status)} aria-hidden="true" />
                    {product.status}
                  </span>
                </div>

                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__desc">{product.summary}</p>
                <span className="product-card__category">{product.industry}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}