import { SecondaryButton } from "@/shared";
import { motion, AnimatePresence } from "framer-motion";
import { Projects } from "@/projects";
import { useEffect, useState } from "react";

const images = [
  "/hero-section/first-bg.jpeg",
  "/hero-section/second-bg.jpeg",
  "/hero-section/third-bg.jpeg",
  "/hero-section/fourth-bg.jpeg",
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <main className="flex flex-col h-[92svh] max-[500px]:h-[50svh] max-[800px]:h-[70svh]">
        <motion.section
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          key={index}
          className="h-full px-[clamp(2rem,4.2vw,4.2rem)] py-[clamp(3rem,7.5vw,7.5rem)] flex items-end "
          style={{
            background: `url(${images[index]})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: " center",
          }}
        >
          <figure className="max-w-[1440px] p-[clamp(1rem,2vw,2rem)]">
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
        </motion.section>
        <Projects />
      </main>
    </AnimatePresence>
  );
};
