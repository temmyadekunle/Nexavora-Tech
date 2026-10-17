import { Hero, TrustedBy } from "@/components/sections/Hero";
import { Process, WhatWeDo, WhyNexavora } from "@/components/sections/Services";
import { ClientValue, Clients, Stats, Team } from "@/components/sections/Proof";
import { Careers, Capabilities, FinalCta, Insights } from "@/components/sections/Growth";
import ProjectShowcase from "@/components/ProjectShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhatWeDo />
      <WhyNexavora />
      <Process />
      <ProjectShowcase />
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
