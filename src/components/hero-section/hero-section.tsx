import { LandingPageLayout } from "@/layout";
import { SecondaryButton } from "@/shared";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <LandingPageLayout>
      <main
        className="h-[clamp(24rem,43vw,43rem)] px-[clamp(2rem,4.2vw,4.2rem)] py-[clamp(2rem,6vw,6rem)] rounded-3xl flex items-end"
        style={{
          background: "url(/hero-section/happy-farmer.JPG)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: " center",
        }}
      >
        <div className="flex flex-col gap-4 bg-[#000]/60 rounded-2xl px-4 py-6">
          <h3 className="text-white font-semibold max-w-[30.7rem] text-[clamp(1.5rem,2.5vw,2.5rem)]">
            Premiun partner for agricultural sourcing.
          </h3>
          <p className="text-sm text-white max-w-[25rem] ">
            We specialise in connecting you with the finest agricultural
            products sourced directly from trusted farmers and producers around
            the country.
          </p>
          <div>
            <SecondaryButton
              w={150}
              type="button"
              title="Button"
              bg="#fff"
              className="text-black"
            />
          </div>
        </div>
        {/* <figure className="w-[clamp(18rem,44.6vw,44.6rem)] h-[clamp(18rem,28.75vw,28.75rem)]">
          <Image
            className="!w-full !h-full"
            src="/hero-section/proceeds.svg"
            height={100}
            width={100}
            alt=""
            priority={true}
          />
        </figure> */}
      </main>
    </LandingPageLayout>
  );
};
