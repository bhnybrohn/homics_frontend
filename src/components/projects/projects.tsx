import { useCounterAction } from "@/hooks/use-counter-action";
import { useCounter } from "@mantine/hooks";
import React, { useEffect, useMemo, useState } from "react";

const data = [
  {
    number: 44,
    type: "Projects",
  },
  {
    number: 20,
    type: "Partners",
  },
  {
    number: 80,
    type: "Value Chain",
  },
];
export const Projects = () => {
  const [count, setCount] = useState<number>(0);

  // const counterAction = (cap: number) => {
  //   useEffect(() => {
  //     const newInterval = setInterval(() => {
  //       setCount((prev) => {
  //         console.log(prev);
  //         if (prev === cap) {
  //           return cap;
  //         } else return prev + 1;
  //       });
  //     }, 100);
  //     return () => clearInterval(newInterval);
  //   }, []);

  //   return count;
  // };

  return (
    <main className="bg-[#1F1F1F] py-[clamp(1.5rem,2vw,2rem)] ">
      <section className="grid grid-cols-3 w-[60%] mx-auto">
        {data.map((_, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <h3 className="text-white font-medium text-[clamp(1.5rem,2vw,2rem)] text-center">
              {_.number}
              {/* {counterAction(100)} */}
            </h3>
            <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-white font-normal leading-3 text-center">
              {_.type}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};
