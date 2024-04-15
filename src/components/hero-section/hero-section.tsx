import { LandingPageLayout } from "@/layout";
import { SecondaryButton } from "@/shared";
import Image from "next/image";
import { motion } from "framer-motion";
import { Projects } from "@/projects";

export const HeroSection = () => {
  return (
    <main className="flex flex-col h-[92svh] max-[500px]:h-[50svh] max-[800px]:h-[70svh]">
      <section
        className="h-full px-[clamp(2rem,4.2vw,4.2rem)] py-[clamp(3rem,7.5vw,7.5rem)]  flex items-end"
        style={{
          background: "url(/hero-section/happy-farmer.JPG)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center",
        }}
      >
        <figure className="max-w-[1440px] ">
          <div className="flex flex-col gap-4 bg-[#000]/60 rounded-2xl px-4 py-6">
            <motion.h3
              className="text-white font-semibold max-w-[30.7rem] text-[clamp(1.5rem,2.5vw,2.5rem)]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Premiun partner for agricultural sourcing.
            </motion.h3>
            <motion.p
              className="text-sm text-white max-w-[25rem] "
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              We specialise in connecting you with the finest agricultural
              products sourced directly from trusted farmers and producers
              around the country.
            </motion.p>
            <div>
              <SecondaryButton
                w={150}
                type="button"
                title="Button"
                bg="#fff"
                className="text-black"
              />
            </div>
          </div>
        </figure>
      </section>
      <Projects />
    </main>
  );
};
