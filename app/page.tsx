import { Hero } from "@/components/sections/Hero";
import { WhatWeDo, WhyNexavora, Process } from "@/components/sections/Services";
import ProjectShowcase from "@/components/ProjectShowcase";
import { Clients, Testimonials } from "@/components/sections/Proof";
import { FinalCta } from "@/components/sections/Growth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProjectShowcase />
      <Clients />
      <Testimonials />
      <WhyNexavora />
      <Process />
      <FinalCta />
    </>
  );
}
