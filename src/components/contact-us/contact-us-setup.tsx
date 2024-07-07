import { MainLayout } from "@/layout";
import { PrimarButton, SecondaryButton } from "@/shared";
import { Divider, TextInput, Textarea, rem } from "@mantine/core";
import React from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const data = [
  {
    name: "Email@gmail.com",
    icon: <RxEnvelopeClosed size={18} color="white" />,
  },
  {
    name: "09087572878,08076468647",
    icon: <FaPhoneAlt size={18} color="white" />,
  },
  {
    name: "NO 6 dopemu drive ,along mullholand road lagos ",
    icon: <FaLocationDot size={18} color="white" />,
  },
];

export const ContactUsSetup = () => {
  const inputSyles = {
    input: {
      height: "fit-content",
      paddingBlock: 15,
      borderRadius: 8,
      background: "#ebebeb",

      border: "none",
      "&::placeholder": {
        color: "#A6A9B9",
        fontWeight: 400,
        fontSize: rem(14),
        lineHeight: "22.4px",
      },
    },
  };

  return (
    <MainLayout>
      <main className="flex flex-col h-full gap-8">
        <section className="px-[clamp(1rem,4.2vw,4.2rem)] py-[clamp(4rem,6vw,6rem)] bg-[#29BF12] rounded-b-3xl">
          <div className="flex items-center justify-between max-w-[1440px] mx-auto max-custom-851:flex-col gap-[4vw]">
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-[1.25rem] font-semibold text-white">
                Contact us
              </h3>
              <p className="text-white text-sm font-medium max-w-[37rem]">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent llis diam sit amet lacinia. Aliquam in elementum
                tellus.
              </p>
            </div>
            <div className="bg-white rounded-xl p-[clamp(1.2rem,2vw,2rem)] flex flex-col gap-4 w-full flex-1">
              <TextInput styles={inputSyles} placeholder="Name" />
              <TextInput styles={inputSyles} placeholder="Email address" />
              <Textarea
                styles={inputSyles}
                minRows={6}
                autosize
                placeholder="Message"
              />
              <div className="flex items-end justify-end">
                <SecondaryButton type="button" title="Submit" bg="#29BF12" />
              </div>
            </div>
          </div>
        </section>
        <figure className="py-[clamp(3rem,5vw,5rem)] px-[clamp(1rem,3vw,3rem)] ">
          <div className="max-w-[1440px] mx-auto">
            <article className="bg-homics-dark-500 p-[clamp(1rem,2vw,2rem)] rounded-lg flex items-center gap-4 justify-between w-[80%] mx-auto max-custom-580:flex-col max-custom-580:w-full box-shadow">
              <ul className="flex flex-col gap-8">
                <h3 className="text-base text-white font-medium">Info</h3>
                {data.map(({ name, icon }, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {icon}
                    <p className="text-white text-sm font-normal">{name}</p>
                  </li>
                ))}
              </ul>
              <Divider
                className="max-custom-580:hidden"
                orientation="vertical"
                color="#535353"
              />
              <div className="flex flex-col justify-between gap-6 h-full">
                {/* <button
                  type="button"
                  className="text-base text-homics-dark-500 bg-white py-1 px-2.5 w-fit flex self-end"
                >
                  Get in touch
                </button> */}
                <p className="text-white text-base max-w-[30rem] flex self-start">
                  Feel free to contact us at anytime we will get back to you as
                  soon as possible.
                </p>
              </div>
            </article>
          </div>
        </figure>
      </main>
    </MainLayout>
  );
};
