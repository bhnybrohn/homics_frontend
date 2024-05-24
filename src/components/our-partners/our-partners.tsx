import Image from "next/image";
import React from "react";

const data = [
  "/our-partners/USSOY.svg",
  "/our-partners/USSEC-Full.svg",
  "/our-partners/Group.svg",
  "/our-partners/Clip.svg"
];

export const OurPartners = () => {
  return (
    <main className="flex flex-col gap-[clamp(1.2rem,2.2vw,2.2rem)] pt-8">
      <h3 className="text-[clamp(1.3rem,2vw,2rem)] font-medium text-homics-dark-500 text-center">
        Our Partners
      </h3>
      <section className="py-[clamp(2rem,3vw,3rem)] border-y-[1.5px] border-homics-dark-500 overflow-hidden marquee">
        <div
          className="max-w-[1440px] mx-auto grid grid-cols-5 gap-[clamp(1.2rem,2vw,2rem)] justify-items-center"
          id="marquee"
        >
          {data.map((item, idx) => (
            <figure
              key={idx}
              className="w-[clamp(3rem,9.1vw,9.1rem)] h-[clamp(3rem,9.1vw,9.1rem)]"
            >
              <Image
                className="!w-full !h-full"
                src={item}
                height={100}
                width={100}
                priority
                alt=""
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};
