import { Footer } from "@/footer";
import { HeroSection } from "@/hero-section";
import { Navbar } from "@/nav";
import { OurPartners } from "@/our-partners";
import { OurProjects } from "@/our-projects";
import { OurServices } from "@/our-services";
import { Projects } from "@/projects";
import { WhoAreWe } from "@/who-are-we";
import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layout";

export const LandingPage = () => {
  return (
    <MainLayout>
      <HeroSection />
      <WhoAreWe />
      <OurServices />
      <OurProjects />
      <OurPartners />
    </MainLayout>
  );
};
