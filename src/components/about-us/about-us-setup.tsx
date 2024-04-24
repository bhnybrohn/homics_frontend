import { MainLayout } from "@/layout";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "/hero-section/first-bg.jpeg",
  "/hero-section/second-bg.jpeg",
  "/hero-section/third-bg.jpeg",
  // "/hero-section/fourth-bg.jpeg",
];

const imageTexts = [
  " Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
  " Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus Morbi convallis convallis diam sit amet lacinia. ",
  " Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
];

export const AboutUsSetup = () => {
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTextIndex((prevIndex) => (prevIndex + 1) % imageTexts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayout>
      <main className="flex flex-col h-full">
        <section className="px-[clamp(2rem,4.2vw,4.2rem)] py-[clamp(4rem,6vw,6rem)] bg-[#29BF12] rounded-b-3xl">
          <div className="flex items-center gap-8 justify-between max-w-[1440px] mx-auto max-[850px]:flex-col">
            <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-white font-semibold">
              About Us
            </h2>
            <p className="text-[clamp(0.9rem,1.25vw,1.25rem)] font-medium text-white max-w-[38.5rem] max-[1265px]:pb-8">
              At Homics, we specialise in providing services designed to address
              key challenges, drive efficiency, and empower agribusinesses to
              achieve their goals and thrive in today's competitive landscape.
            </p>
          </div>
        </section>
        <div className="max-w-[1440px] mx-auto pb-[8rem] max-[851px]:pb-4 relative overflow-auto mt-[clamp(-4rem,8vw,-8rem)] z-10">
          <section className="w-[60%] mx-auto max-[850px]:w-[90%] ">
            <article className="bg-homics-dark-500 p-8 rounded-2xl flex flex-col gap-[clamp(2px,2vw,32px)]">
              <figure className="w-full h-[clamp(10rem,28.25vw,28.25rem)]">
                <Image
                  className="!w-full !h-full"
                  src={images[index]}
                  width={100}
                  height={100}
                  alt=""
                  priority
                />
              </figure>
              <p className="w-[75%] max-[1000px]:w-full mx-auto text-center font-medium text-sm text-white">
                {imageTexts[textIndex]}
              </p>
            </article>
            <figure className="max-[851px]:hidden bg-[#D9D9D9] rounded-3xl w-[60%] h-[75%] absolute top-[clamp(3rem,6vw,6rem)] right-[clamp(8rem,16.5vw,16.5rem)] -z-10" />
            <figure className="max-[851px]:hidden bg-[#D9D9D9]/50 rounded-3xl w-[60%] h-[75%] absolute top-[clamp(4rem,8vw,8rem)] right-[clamp(6rem,15vw,15rem)] -z-10" />
          </section>
        </div>
      </main>
    </MainLayout>
  );
};
