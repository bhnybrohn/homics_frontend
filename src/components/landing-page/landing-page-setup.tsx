import { Footer } from "@/footer";
import { HeroSection } from "@/hero-section";
import { Navbar } from "@/nav";
import { OurPartners } from "@/our-partners";
import { OurProjects } from "@/our-projects";
import { OurServices } from "@/our-services";
import { Projects } from "@/projects";
import { WhoAreWe } from "@/who-are-we";
import React from "react";

export const LandingPage = () => {
  return (
    <main className="h-[100svh] flex flex-col">
      <Navbar />
      <section className="flex flex-col flex-1 overflow-auto">
        <HeroSection />
        <WhoAreWe />
        <Projects />
        <OurServices />
        <OurProjects />
        <OurPartners />
        <Footer />
      </section>
    </main>
  );
};
