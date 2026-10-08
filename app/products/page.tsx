import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { FinalCta } from "@/components/sections/Growth";
import { Products } from "@/components/sections/Products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The digital products Nexavora designs, builds and ships for itself — CareNBuddi and Livanta.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Products we <span className="grad-text">build and run</span>
          </>
        }
        lead="We don't just build for clients — we build our own products too. The same team, the same standards, our own skin in the game."
      />
      <Products />
      <FinalCta />
    </>
  );
}
