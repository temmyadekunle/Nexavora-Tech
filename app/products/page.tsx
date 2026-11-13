import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { Products } from "@/components/sections/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "CareNBuddi and Livanta — the digital products Nexavora is designing and building in-house, both currently in development.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Products we&apos;re <span className="grad-text">building</span>
          </>
        }
        lead="We build our own products too. CareNBuddi and Livanta are in development today — designed and engineered in-house, and held to the same standard as our client work."
      />
      <Products />
      <FinalCta />
    </>
  );
}
