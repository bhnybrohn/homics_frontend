import React from "react";
import { Avatar, Button, clsx } from "@mantine/core";
import Link from "next/link";
import { LandingPageLayout } from "@/layout";
import { PrimarButton } from "@/shared";
import { MobileNav } from "@/mobile-nav";
import Image from "next/image";
import { color, motion } from "framer-motion";
import { useRouter } from "next/router";

const data = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Community", link: "/community" },
  { name: "Contact us", link: "/contact-us" },
];

export const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <main className="bg-[#fff] py-8">
      <motion.section
        className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <figure className="w-[clamp(6rem,10vw,10rem)] h-[clamp(2rem,2.5vw,2.5rem)]">
          <Image
            className="!w-full !h-full"
            src="/navbar/logo.png"
            height={200}
            width={200}
            priority
            alt=""
          />
        </figure>

        <ul className="flex items-center gap-4 max-[550px]:hidden">
          {data.map(({ name, link }, idx) => (
            <Link
              key={idx}
              href={link}
              className={clsx(
                pathname === link
                  ? "text-homics-success-500"
                  : "text-homics-success-400",
                "text-base font-normal hover:text-homics-success-500"
              )}
            >
              {name}
            </Link>
          ))}
        </ul>
        <div className="max-[550px]:hidden">
          {/* <PrimarButton title="Button" type="button" /> */}
        </div>
        <div className="hidden max-[550px]:block">
          <MobileNav />
        </div>
      </motion.section>
    </main>
  );
};
