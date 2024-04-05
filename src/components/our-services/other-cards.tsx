import clsx from "clsx";
import { ArrowRight } from "iconsax-react";
import Link from "next/link";
import React from "react";

export const OtherCards = ({
  number,
  title,
  text,
  bg,
}: {
  number: string;
  title: string;
  text: string;
  bg: string;
}) => {
  return (
    <figure
      className={clsx(
        "p-[clamp(1.5rem,2.5vw,2.5rem)] flex flex-col gap-4 rounded-xl "
      )}
      style={{
        background: bg,
      }}
    >
      <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] text-white font-semibold">
        {number}
      </h3>
      <div className="flex flex-col gap-2">
        <h4 className="text-[clamp(1.2rem,2vw,2rem)] text-white font-semibold">
          {title}
        </h4>
        <p className="text-sm font-normal text-white max-w-[300px]">{text}</p>
      </div>
      <div className="flex items-center gap-3">
        <Link href="" className="text-sm font-normal text-white">
          learn more
        </Link>
        <ArrowRight size={18} className="rotate-[90]" color="white" />
      </div>
    </figure>
  );
};
