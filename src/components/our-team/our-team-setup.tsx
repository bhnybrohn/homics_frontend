import { MainLayout } from "@/layout";
import React from "react";
import { TeamCard } from "./team-card";
import { useRouter } from "next/router";
import { randomId } from "@mantine/hooks";

const images = [
  "https://res.cloudinary.com/xenerr/image/upload/v1716542861/homicss_1_e2wfvg.png",
  // "https://res.cloudinary.com/xenerr/image/upload/v1714048690/rmeytfnggl8iomb1zlgj.jpg",
];

export const OurTeamSetup = () => {
  const { push } = useRouter();

  return (
    <MainLayout>
      <main className="flex flex-col h-full">
        <section className="px-[clamp(2rem,4.2vw,4.2rem)] py-[clamp(4rem,6vw,6rem)] bg-[#043E35] ">
          <div className="flex items-center gap-8 justify-between max-w-[1440px] mx-auto max-[850px]:flex-col">
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="px-2 py-1 rounded-xl border border-white w-fit animate-bounce text-sm text-white"
                onClick={() => push(`/our-team/${randomId()}`)}
              >
                The team
              </button>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#54E53E] font-semibold max-w-[450px]">
                Meet our team of dedicated professionals
              </h2>
              <p className="text-[clamp(1rem,2vw,2rem)] font-thin text-white max-w-[32.5rem] max-[1265px]:pb-8">
                With over 50 years or combined experience our team is ready to
                take on any tasks
              </p>
            </div>
            <article className="flex flex-col gap-2 max-[850]:w-full">
              <figure className="w-[clamp(18rem,32vw,32rem)] h-auto max-[850]:w-full">
                <div
                  className="!w-full !h-[45vh] rounded-3xl !min-w-[19.5rem]"
                  style={{
                    background: `url(${images})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: " center",
                  }}
                />
                <div className="flex flex-col">
                  <h3 className="text-white text-[clamp(1.3rem,2vw,2rem)]">
                    Michael David
                  </h3>
                  <p className="text-[1.125rem] text-gray-400">Founder / CEO</p>
                </div>
              </figure>
            </article>
          </div>
        </section>
        <section className="p-[clamp(2rem,4.2vw,4.2rem)]">
          <article className="grid grid-cols-3 gap-[clamp(1.2rem,2vw,2rem)] max-[1020px]:grid-cols-2 max-sm:grid-cols-1">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <TeamCard key={idx} />
              ))}
          </article>
        </section>
      </main>
    </MainLayout>
  );
};
