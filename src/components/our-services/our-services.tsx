import { LandingPageLayout } from "@/layout";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "iconsax-react";
import { OtherCards } from "./other-cards";

const data = [
  {
    count: "01",
    title: "Value chain analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
  },
  {
    count: "02",
    title: "Consulting support",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
  },
  {
    count: "03",
    title: "Policy consulting",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
  },
];

const data2 = [
  {
    count: "05",
    title: "Ecosystem solution",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
    bg: "#1F1F1F",
  },
  {
    count: "04",
    title: "Value chain analysis",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class",
    bg: "#218E11",
  },
];

export const OurServices = () => {
  return (
    <LandingPageLayout>
      <main className="py-[clamp(2rem,3vw,3rem)] flex flex-col gap-5">
        <h3 className="text-[clamp(1.3rem,2vw,2rem)] font-medium text-homics-dark-500 text-center">
          Our Services
        </h3>
        <section className="flex flex-col gap-4 ">
          <figure className="grid grid-cols-3 max-[768px]:grid-cols-2 max-[570px]:grid-cols-1 gap-6">
            {data.map(({ count, text, title }, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#ccc] p-[clamp(1.5rem,2.5vw,2.5rem)] flex flex-col gap-4 rounded-xl"
              >
                <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-homics-success-500 font-semibold">
                  {count}
                </h3>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[clamp(1.2rem,2vw,2rem)] text-homics-success-500 font-semibold">
                    {title}
                  </h4>
                  <p className="text-sm font-normal text-gray-500 max-w-[300px]">
                    {text}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="" className="text-sm font-normal text-gray-500">
                    learn more
                  </Link>
                  <ArrowRight size={18} className="rotate-[90]" />
                </div>
              </div>
            ))}
          </figure>
          <article className="grid grid-cols-2 max-[570px]:grid-cols-1 gap-6 ">
            {data2.map(({ count, text, title, bg }, idx) => (
              <OtherCards
                bg={bg}
                key={idx}
                number={count}
                text={text}
                title={title}
              />
            ))}
          </article>
        </section>
      </main>
    </LandingPageLayout>
  );
};
