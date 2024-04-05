import React, { ReactNode } from "react";

export const LandingPageLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <main
      className="bg-white p-[clamp(1.2rem,2vw,2rem)] max-w-[1440px] mx-auto w-full
    "
    >
      {children}
    </main>
  );
};
