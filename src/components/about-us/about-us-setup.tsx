import { MainLayout } from "@/layout";
import { clsx } from "@mantine/core";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/xenerr/image/upload/v1723219389/WhatsApp_Image_2024-08-09_at_16.29.03_374acf68_nrwmiz.jpg",
  "https://res.cloudinary.com/xenerr/image/upload/v1723219388/WhatsApp_Image_2024-08-09_at_16.29.03_4a4bcd83_tlxbte.jpg",
  "https://res.cloudinary.com/xenerr/image/upload/v1714048690/dhrdhijhov6fna6wds5l.jpg",
  "https://res.cloudinary.com/xenerr/image/upload/v1723219388/WhatsApp_Image_2024-08-09_at_16.29.03_8c093f34_ceb9jg.jpg",
  "https://res.cloudinary.com/xenerr/image/upload/v1714048690/rmeytfnggl8iomb1zlgj.jpg",
  "https://res.cloudinary.com/xenerr/image/upload/v1723219389/WhatsApp_Image_2024-08-09_at_16.29.03_a85a72dd_f6idfw.jpg"
];

const imageTexts = [
  "Dr. Michael David, CEO of Homics International LLC, addresses a diverse audience, including US soy industry leaders and key figures from Nigeria's soybean value chain, at the Nigeria Now conference held in Atlanta in 2022. Organized by the US Soy, this event aimed to foster long-term, mutually beneficial relationships between the global soy industry and Nigerian stakeholders. ",
  "Dr. Michael David, CEO of Homics International LLC, addresses a diverse audience, including US soy industry leaders and key figures from Nigeria's soybean value chain, at the Nigeria Now conference held in Atlanta in 2022. Organized by the US Soy, this event aimed to foster long-term, mutually beneficial relationships between the global soy industry and Nigerian stakeholders. ",
  "Dr. Michael David, CEO of Homics International LLC, addresses a diverse audience, including US soy industry leaders and key figures from Nigeria's soybean value chain, at the Nigeria Now conference held in Atlanta in 2022. Organized by the US Soy, this event aimed to foster long-term, mutually beneficial relationships between the global soy industry and Nigerian stakeholders. "];

const data = [
  {
    title: "Our Vision",
    text: "To be the leading catalyst for agricultural transformation worldwide and a benchmark for agribusiness excellence globally.",
    bg: "url(/hero-section/bg-1.svg)",
  },
  {
    title: "Our Mission",
    text: "To empower agribusinesses through innovative solutions, sustainable practices, and strategic insights that drive growth and enhance food security.",
    bg: "url(/hero-section/bg-1.svg)",
  },
  {
    title: "Our Core Values",
    text: "We leverage innovative technologies to solve agricultural challenges while maintaining integrity and sustainability. Our commitment to excellence and collaboration ensures top-notch service and strong relationships with clients and partners.",
    bg: "url(/hero-section/bg-3.svg)",
  },
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
          <div className="flex items-center gap-8 justify-between max-w-[1440px] mx-auto max-custom-851:flex-col">
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
        <div className="max-w-[1440px] mx-auto pb-[8rem] max-custom-851:pb-4 relative overflow-auto mt-[clamp(-4rem,8vw,-8rem)] z-10">
          <section className="w-[60%] mx-auto max-custom-851:w-[90%] ">
            <article className="bg-homics-dark-500 p-8 rounded-2xl flex flex-col gap-[clamp(2px,2vw,32px)]">
              <figure className="w-full h-[clamp(10rem,28.25vw,28.25rem)]">
                <div
                  className="!w-full !h-full object-cover aspect-square"
                  key={index}
                  style={{
                    background: `url(${images[index]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: " center",
                  }}
                />
              </figure>
              <p className="w-[75%] max-[1000px]:w-full mx-auto text-center font-medium text-sm text-white">
                {imageTexts[textIndex]}
              </p>
            </article>
            <figure className="max-custom-851:hidden bg-[#D9D9D9] rounded-3xl w-[60%] h-[75%] absolute top-[clamp(3rem,6vw,6rem)] right-[clamp(8rem,16.5vw,16.5rem)] -z-10" />
            <figure className="max-custom-851:hidden bg-[#D9D9D9]/50 rounded-3xl w-[60%] h-[75%] absolute top-[clamp(4rem,8vw,8rem)] right-[clamp(6rem,15vw,15rem)] -z-10" />
          </section>
        </div>
        <section className="bg-[#29BF12] p-[clamp(1rem,2vw,2rem)]">
          <div className="max-[1440px] mx-auto flex flex-col gap-8 pt-[clamp(1.5rem,4.5vw,4.5rem)] px-[clamp(1rem,2vw,2rem)] pb-[clamp(1rem,2vw,2rem)]">
            <h3 className="text-white font-semibold text-[1.25rem] text-center">
              More About Us
            </h3>
            <figure className="grid grid-cols-3 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4">
              {data.map(({ title, text, bg }, idx) => (
                <article
                  className="flex flex-col gap-3 rounded-xl p-[clamp(1.2rem,2vw,2rem)] min-h-[400px]"
                  style={{
                    background: bg,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h3
                    className={clsx(
                      idx === 1 || idx === 3
                        ? "text-black"
                        : "text-homics-success-500",
                      "text-base font-semibold"
                    )}
                  >
                    {title}
                  </h3>
                  <p
                    className={clsx(
                      idx === 1 || idx === 3 ? "text-[#000]" : "text-[#666666]",
                      "text-sm font-medium"
                    )}
                  >
                    {text}
                  </p>
                </article>
              ))}
            </figure>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};
