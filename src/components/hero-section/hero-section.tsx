import { LandingPageLayout } from "@/layout";
import { SecondaryButton } from "@/shared";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <LandingPageLayout>
      <main className="bg-homics-success-500 px-[clamp(2.5rem,5.2vw,5.2rem)] py-[clamp(2rem,6vw,6rem)] rounded-3xl flex items-center gap-6 max-[768px]:flex-col-reverse">
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold max-w-[30.7rem] text-[clamp(1.5rem,2.5vw,2.5rem)]">
            Premiun partner for agricultural sourcing.
          </h3>
          <p className="text-sm text-white max-w-[31rem] ">
            We specialise in connecting you with the finest agricultural
            products sourced directly from trusted farmers and producers around
            the country.
          </p>
          <div>
            <SecondaryButton w={150} type="button" title="Button" bg="#000" />
          </div>
        </div>
        <figure className="w-[clamp(18rem,44.6vw,44.6rem)] h-[clamp(18rem,28.75vw,28.75rem)]">
          <Image
            className="!w-full !h-full"
            src="/hero-section/proceeds.svg"
            height={100}
            width={100}
            alt=""
            priority={true}
          />
        </figure>
      </main>
    </LandingPageLayout>
  );
};
