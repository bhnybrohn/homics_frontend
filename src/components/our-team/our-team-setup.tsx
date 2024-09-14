import { MainLayout } from "@/layout";
import React from "react";
import { TeamCard } from "./team-card";
import { useRouter } from "next/router";
import { randomId } from "@mantine/hooks";

const images = [
  "https://res.cloudinary.com/xenerr/image/upload/v1720786938/IMG_3911_ofap9s.jpg",
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
              <h2 className="text-white text-2xl">
                Meet our team of dedicated professionals
              </h2>
              <p className=" font-thin text-xl text-white ">
                With over 25 years of combined experience, our team of seasoned professionals combines deep industry knowledge with a passion for agriculture, enabling us to deliver solutions that address the sector's unique challenges.
              </p>
            </div>
            {/* <article className="flex flex-col gap-2 max-[850]:w-full">
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

              </figure>
              <div className="flex flex-col">
                <h3 className="text-white text-[clamp(1.3rem,2vw,2rem)]">
                  Michael David Ph.D
                </h3>
                <p className="text-[1.125rem] text-gray-400">Founder / CEO</p>
              </div>
            </article> */}
          </div>
        </section>
        <section className="p-[clamp(2rem,4.2vw,4.2rem)]">
          <article className="grid grid-cols-4 gap-[clamp(1.2rem,2vw,2rem)] max-[1020px]:grid-cols-2 max-sm:grid-cols-1">
            {/* {Array(1)
              .fill(0)
              .map((_, idx) => ( */}
            <TeamCard />
            {/* // ))} */}
          </article>
        </section>
      </main>
    </MainLayout>
  );
};
