import { LandingPageLayout } from "@/layout";
import { SecondaryButton } from "@/shared";
import React from "react";

export const WhoAreWe = () => {
  return (
    <LandingPageLayout>
      <main className="flex flex-col gap-6 " id="who-are-we">
        <div className="w-[70%] max-[500px]:w-full py-[clamp(1rem,4vw,4rem)] flex flex-col gap-2 mx-auto">
          <h3 className="text-homics-success-400 text-[clamp(1.2rem,2vw,2rem)] font-semibold text-center ">
            Who are we ?
          </h3>
          <p className="max-w-[43.6rem] text-base text-gray-500 text-center mx-auto">
            <span className="text-homics-success-500 font-semibold">
              Homics
            </span>{" "}
            is a leading innovator within the agribusiness sector. We specialize
            in the seamless fusion of agriculture and commerce, driving
            agricultural growth and prosperity{" "}
            <span className="text-homics-success-500 font-semibold">
              Our unwavering commitment{" "}
            </span>{" "}
            to excellence permeates every step of the agricultural value chain,
            ensuring sustainable and impactful outcomes for our partners.
            Founded on the principles of {" "}
            <span className="text-homics-success-500 font-semibold">
              excellence and innovation{" "}
            </span>{" "},
            Homics International has become a trusted partner for farmers, agribusinesses, and policymakers around the world.
          </p>
        </div>
        <section className="flex items-center gap-4 max-[700px]:flex-col">
          <div
            className="w-[40%] rounded-xl min-h-[400px] max-[700px]:w-full"
            style={{
              background: `url(/hero-section/analyser.svg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="w-[60%] rounded-xl min-h-[400px] max-[700px]:w-full"
            style={{
              background: `url(/hero-section/fruits.svg)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </section>
      </main>
    </LandingPageLayout>
  );
};
