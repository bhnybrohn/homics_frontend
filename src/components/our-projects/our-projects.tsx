import { LandingPageLayout } from "@/layout";
import clsx from "clsx";
import React from "react";

const data = [
  {
    id: 1,
    title: "ALDDN",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    bg: "#fff",
    color: "#4D4B4B",
  },
  {
    id: 2,
    title: "ALDDN",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    bg: "#7ACF5F",
    color: "#fff",
  },
  {
    id: 3,
    title: "ALDDN",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    bg: "#7ACF5F",
    color: "#fff",
  },
  {
    id: 4,
    title: "ALDDN",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    bg: "#fff",
    color: "#4D4B4B",
  },
];

export const OurProjects = () => {
  return (
    <LandingPageLayout>
      <main className="bg-homics-dark-500 rounded-3xl p-[clamp(2rem,3vw,3rem)] flex flex-col gap-4">
        <h3 className="text-[clamp(1.3rem,2vw,2rem)] font-medium text-white text-center">
          Our Projects
        </h3>
        <section className="grid grid-cols-2 max-[570px]:grid-cols-1 gap-6 overflow-x-auto">
          {data.map(({ title, text, id, bg, color }) => (
            <div
              key={id}
              className={clsx(
                "flex flex-col gap-2  rounded-xl p-[clamp(1.2rem,2vw,2rem)] min-w-[241px] min-h-[230px]"
              )}
              style={{ background: bg }}
            >
              <h3
                className={clsx(" font-medium text-[1.3rem] text-center")}
                style={{
                  color: color,
                }}
              >
                {title}
              </h3>
              <p className="text-base font-normal text-center">{text}</p>
            </div>
          ))}
        </section>
      </main>
    </LandingPageLayout>
  );
};
