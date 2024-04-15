import { LandingPageLayout } from "@/layout";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "iconsax-react";
import { OtherCards } from "./other-cards";
import { Avatar, clsx } from "@mantine/core";

const data = [
  {
    title: "Agricultural consulting",
    text: "Gain a competitive edge with agricultural consulting services. our experts provide personalized advice on market trends,sustainability practices and customized solutions based on your specific needs. we work closely with you to develop strategies,implement best practices, and navigate regulatory challenges, empowering your agribusiness to thrive and succeed.",
    icon: "/hero-section/hands.svg",
  },
  {
    title: "Capacity building ",
    text: "Gain a competitive edge with agricultural consulting services. our experts provide personalized advice on market trends,sustainability practices and customized solutions based on your specific needs. we work closely with you to develop strategies,implement best practices, and navigate regulatory challenges, empowering your agribusiness to thrive and succeed",
    icon: "/hero-section/bulb.svg",
  },
  {
    title: "Supply Chain",
    text: "Gain a competitive edge with agricultural consulting services. our experts provide personalized advice on market trends,sustainability practices and customized solutions based on your specific needs. we work closely with you to develop strategies,implement best practices, and navigate regulatory challenges, empowering your agribusiness to thrive and succeed",
    icon: "/hero-section/farm-remove.svg",
  },
  {
    title: "Value chain analysis",
    text: "Gain a competitive edge with agricultural consulting services. our experts provide personalized advice on market trends,sustainability practices and customized solutions based on your specific needs. we work closely with you to develop strategies,implement best practices, and navigate regulatory challenges, empowering your agribusiness to thrive and succeed",
    icon: "/hero-section/chain.svg",
  },
];

export const OurServices = () => {
  return (
    <LandingPageLayout>
      <main className="flex items-start gap-4 max-[1000px]:flex-col">
        <div className="w-[40%] flex flex-col gap-2 max-[1000px]:w-full">
          <h3 className="font-semibold text-[1.25rem] text-homics-success-400 text-center">
            Our Services
          </h3>
        </div>
        <div className="w-[60%] flex flex-col gap-4 max-[1000px]:w-full">
          <section className="grid grid-cols-2 gap-x-5 gap-y-3 max-[530px]:grid-cols-1">
            {data.map(({ icon, title, text }, idx) => (
              <article
                key={idx}
                className={clsx(
                  idx === 1 ? "bg-homics-success-500" : "bg-[#CEFAD0]",
                  "flex flex-col gap-4 p-[clamp(1.2rem,2vw,2rem)] rounded-xl "
                )}
              >
                <Avatar src={icon} size={100} radius="100%" />
                <h3
                  className={clsx(
                    idx === 1 ? "text-white" : null,
                    "text-[1.25rem] font-semibold text-homics-success-500"
                  )}
                >
                  {title}
                </h3>
                <p
                  className={clsx(
                    idx === 1 ? "text-white" : "text-[#666666]",
                    " max-w-[21rem] text-sm font-medium"
                  )}
                >
                  {text}
                </p>
              </article>
            ))}
          </section>
          <figure className="flex flex-col gap-4 p-[clamp(1.2rem,2vw,2rem)] rounded-xl bg-homics-success-500">
            <Avatar src="/hero-section/chain.svg" size={100} radius="100%" />
            <h3 className="text-[1.25rem] font-semibold text-white ">
              Policy consulting
            </h3>
            <p className="text-white max-w-[21rem] text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
            </p>
          </figure>
        </div>
      </main>
    </LandingPageLayout>
  );
};
