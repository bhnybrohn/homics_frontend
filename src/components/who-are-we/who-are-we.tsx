import { LandingPageLayout } from "@/layout";
import { SecondaryButton } from "@/shared";
import React from "react";

export const WhoAreWe = () => {
  return (
    <LandingPageLayout>
      <main className="flex items-center justify-between gap-6 max-[500px]:flex-col">
        <div className="w-[70%] py-[clamp(2rem,4vw,4rem)] flex flex-col gap-2">
          <h3 className="text-black text-[clamp(1.2rem,2vw,2rem)] font-medium max-[500px]:text-center">
            Who are we ?
          </h3>
          <p className="max-w-[43.6rem] text-sm text-gray-500 max-[500px]:text-center">
            <span className="text-homics-success-500 font-semibold">Torem</span>{" "}
            ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim,{" "}
            <span className="text-homics-success-500 font-semibold">
              metus nec{" "}
            </span>{" "}
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
            elit sed risus.
          </p>
        </div>
        <article className="flex flex-col flex-1 gap-[clamp(2rem,3vw,3rem)] bg-homics-success-500 rounded-2xl px-5 py-[clamp(1.2rem,2vw,2rem)] min-w-[254px]">
          <p className="flex-1 text-sm text-white font-normal overflow-auto">
            <span className="text-white text-sm font-semibold">
              Torem ipsum
            </span>{" "}
            dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
            elit sed risus.
          </p>
          <SecondaryButton
            className="text-black mx-auto"
            type="button"
            title="Button"
            bg="white"
            w={150}
          />
        </article>
      </main>
    </LandingPageLayout>
  );
};
