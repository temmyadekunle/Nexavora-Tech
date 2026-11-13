import Image from "next/image";
import { getAccentStyle } from "@/lib/utils";

type ProductMarkProps = {
  name: string;
  logo: string;
  accent: string;
};

// Restrained identity visual for pre-launch products: the approved logo on a
// neutral tile over an accent-tinted panel. No product screens are shown.
export default function ProductMark({ name, logo, accent }: ProductMarkProps) {
  return (
    <div className="product-mark" style={getAccentStyle(accent)}>
      <span className="product-mark__grid" aria-hidden="true" />
      <span className="product-mark__tile">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={480}
          height={480}
          className="product-mark__logo"
          unoptimized
        />
      </span>
    </div>
  );
}