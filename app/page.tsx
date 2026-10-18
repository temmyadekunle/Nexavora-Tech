import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/Services";
import ProjectShowcase from "@/components/ProjectShowcase";
import { Clients, Testimonials } from "@/components/sections/Proof";
import { Insights } from "@/components/sections/Growth";
import { FinalCta } from "@/components/sections/Growth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProjectShowcase />
      <Clients />
      <Testimonials />
      <Insights />
      <FinalCta />
    </>
  );
}
