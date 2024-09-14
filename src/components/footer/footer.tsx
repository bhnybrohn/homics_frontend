import { PrimarButton } from "@/shared";
import { TextInput, rem } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const data = [
  {
    title: "Home",
    // children: ["Collaborate with us"],
    link: "/",
  },
  {
    title: "About Us",
    // children: ["Collaborate with us"],
    link: "/about-us",
  },
  {
    title: "Our Team",
    // children: ["Collaborate with us"],
    link: "/our-team",
  },
  {
    title: "Contact Us",
    children: ["FAQs"],
    link: "/contact-us",
  },
];

export const Footer = () => {
  return (
    <main className="bg-homics-dark-500 p-[clamp(1rem,2vw,2rem)]">
      <section className="max-w-[1440px] mx-auto flex flex-col gap-4">
        <article className="flex items-center max-custom-851:flex-col gap-[clamp(1.2rem,2vw,2rem)] justify-between py-8 border-b border-[#ccc]">
          <figure className="w-[70%] flex items-center justify-between max-custom-851:w-full max-custom-851:items-start max-custom-505::flex-col max-custom-505:gap-3">
            {data.map(({ title, children, link }, idx) => (
              <Link href={link} key={idx} className="flex flex-col gap-1">
                <h3 className="text-base text-white font-normal hover:text-homics-success-400">
                  {title}
                </h3>
                {/* {children.map((item, index) => (
                  <p className="text-sm font-normal text-white" key={index}>
                    {item}
                  </p>
                ))} */}
              </Link>
            ))}
          </figure>
          <div className="flex-1 flex flex-col gap-2 items-end justify-end max-custom-851:w-full max-custom-851:items-start">
            <p className="text-[1.125rem] text-white font-medium">
              Subscribe to our newsletter
            </p>
            <div className="flex items-center gap-2">
              <TextInput
                placeholder="Email address"
                styles={{
                  input: {
                    paddingLeft: rem(14),
                    height: "fit-content",
                    lineHeight: "normal",
                    border: `${rem(1)} solid #4D4B4B`,
                    background: "white",
                    borderRadius: rem(8),
                    paddingBlock: rem(12),
                    "&::placeholder": {
                      color: "#4D4B4B",
                      fontWeight: 400,
                      fontSize: rem(14),
                      lineHeight: "22.4px",
                    },
                  },
                  label: {
                    color: "#4D4B4B",
                    fontWeight: 500,
                    fontSize: 14,
                    lineHeight: "22.4px",
                  },
                }}
              />
              <PrimarButton w={80} type="button">
                <ArrowRight size={20} />
              </PrimarButton>
            </div>
          </div>
        </article>
        <article className="flex items-center gap-8 max-custom-505:flex-col max-custom-505:items-start">
          <div className="flex-1">
            <figure className="w-[clamp(6rem,10vw,10rem)] h-[clamp(2rem,2.5vw,2.5rem)]">
              <Image
                className="!w-full !h-full"
                src="/navbar/logo.png"
                height={100}
                width={100}
                priority
                alt=""
              />
            </figure>
          </div>
          <div className="flex flex-col gap-5 flex-1  max-custom-435:w-full">
            <section className=" flex items-start border-b border-[#ccc] pb-4 gap-8 max-custom-435:flex-col ">
              <div className="flex flex-col gap-1">
                <h3 className="teext-base font-medium text-white">Address</h3>
                <p className="text-sm font-normal text-white">
                  39A health road off palms Lekki Lagos State
                </p>
                <div className="flex items-center gap-2 pt-2">
                  <FaLinkedin size={18} color="#fff" />
                  <FaSquareFacebook size={18} color="#fff" />
                  <FaInstagram size={18} color="#fff" />
                  <FaTwitter size={18} color="#fff" />
                  <FaYoutube size={18} color="#fff" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="teext-base font-medium text-white">
                  Phone number:
                </h3>
                <p className="text-sm font-normal text-white">
                  09077654677, 090876544678
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="teext-base font-medium text-white">Email</h3>
                <p className="text-sm font-normal text-white">
                  info@homicsinternational.com
                </p>
              </div>
            </section>
            <div className="flex items-center justify-between gap-5 max-custom-435:flex-col max-custom-435:items-start">
              <p className="text-sm font-normal text-white">
                Privacy Policy / Terms of Use / Cookie Policy
              </p>
              <p className="text-sm font-normal text-white">
                ©2023 Homics. All rights reserved.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};
