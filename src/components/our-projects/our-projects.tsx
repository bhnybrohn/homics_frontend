import clsx from "clsx";
import React from "react";

const data = [
  {
    title: "Enhancing Global Agricultural Productivity and Sustainability",
    text: "Over the years, we have partnered with numerous global agricultural enterprises, helping them enhance productivity, improve efficiency, and achieve sustainable growth. Our work has had a significant impact on food security, rural development, and economic prosperity across various regions.",
    bg: "url(/hero-section/bg-1.svg)",
  },
  {
    title: "Agricultural Revolution for a Sustainable Future",
    text: "At Homics International, we are more than just a service provider; we are a driving force behind the agricultural revolution. Join us as we continue to lead the way in creating a more sustainable and prosperous future for agriculture worldwide.",
    bg: "url(/hero-section/bg-2.svg)",
  },
  {
    title: " Enhancing Global Agricultural Productivity and Sustainability",
    text: "Over the years, we have partnered with numerous global agricultural enterprises, helping them enhance productivity, improve efficiency, and achieve sustainable growth. Our work has had a significant impact on food security, rural development, and economic prosperity across various regions.",
    bg: "url(/hero-section/bg-3.svg)",
  },
  {
    title: "Agricultural Revolution for a Sustainable Future",
    text: "At Homics International, we are more than just a service provider; we are a driving force behind the agricultural revolution. Join us as we continue to lead the way in creating a more sustainable and prosperous future for agriculture worldwide.",
    bg: "url(/hero-section/bg-4.svg)",
  },
];

export const OurProjects = () => {
  return (
    <main
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-section/section-bg.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="max-[1440px] mx-auto flex flex-col gap-8 pt-[clamp(1.5rem,4.5vw,4.5rem)] px-[clamp(1rem,2vw,2rem)] pb-[clamp(1rem,2vw,2rem)]">
        <h3 className="text-white font-semibold text-[1.25rem] text-center">
          Our Impressive Impact
        </h3>
        <figure className="grid grid-cols-4 max-[1000px]:grid-cols-3 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1 gap-4">
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
      </section>
    </main>
  );
};
