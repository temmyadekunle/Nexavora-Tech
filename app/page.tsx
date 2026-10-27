import { Hero } from "@/components/sections/Hero";
import { WhatWeDo } from "@/components/sections/Services";
import ProjectShowcase from "@/components/ProjectShowcase";
import { Clients, Team, Testimonials } from "@/components/sections/Proof";
import { FinalCta } from "@/components/sections/Growth";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <ProjectShowcase />
      <Clients />
      <Testimonials />
      <Team home />
      <FinalCta />
    </>
  );
}
