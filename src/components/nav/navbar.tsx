import React from "react";
import { Avatar, Button } from "@mantine/core";
import Link from "next/link";
import { LandingPageLayout } from "@/layout";
import { PrimarButton } from "@/shared";
import { MobileNav } from "@/mobile-nav";
import Image from "next/image";

const data = [
  { name: "Home", link: "" },
  { name: "About us", link: "" },
  { name: "Community", link: "" },
  { name: "Contact us", link: "" },
];

export const Navbar = () => {
  return (
    <LandingPageLayout>
      <main className="flex items-center justify-between w-full">
        <figure className="w-[clamp(4rem,5.1vw,5.1rem)] h-[clamp(4rem,5.1vw,5.1rem)]">
          <Image
            className="!w-full !h-full"
            src="/navbar/logo.svg"
            height={100}
            width={100}
            priority
            alt=""
          />
        </figure>

        <ul className="flex items-center gap-4 max-[550px]:hidden">
          {data.map(({ name, link }, idx) => (
            <Link
              key={idx}
              href={link}
              className="text-base font-normal hover:text-homics-success-500"
            >
              {name}
            </Link>
          ))}
        </ul>
        <div className="max-[550px]:hidden">
          <PrimarButton title="Button" type="button" />
        </div>
        <div className="hidden max-[550px]:block">
          <MobileNav />
        </div>
      </main>
    </LandingPageLayout>
  );
};
