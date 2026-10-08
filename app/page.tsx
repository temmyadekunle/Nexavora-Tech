import { Hero, TrustedBy } from "@/components/sections/Hero";
import { Process, WhatWeDo, WhyNexavora } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { ClientValue, Clients, SelectedWork, Stats, Team } from "@/components/sections/Proof";
import { Careers, Capabilities, FinalCta, Insights } from "@/components/sections/Growth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhatWeDo />
      <Products />
      <WhyNexavora />
      <Process />
      <SelectedWork />
      <Team />
      <ClientValue />
      <Clients />
      <Stats />
      <Capabilities />
      <Insights />
      <Careers />
      <FinalCta />
    </>
  );
}
