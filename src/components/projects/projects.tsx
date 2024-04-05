import React from "react";

export const Projects = () => {
  return (
    <main className="bg-black py-[clamp(1.5rem,2vw,2rem)] ">
      <section className="grid grid-cols-3 w-[60%] mx-auto">
        {Array(3)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <h3 className="text-white font-medium text-[clamp(1.5rem,2vw,2rem)] text-center">
                44
              </h3>
              <p className="text-[clamp(1rem,1.5vw,1.5rem)] text-white font-normal leading-3 text-center">
                Projects
              </p>
            </div>
          ))}
      </section>
    </main>
  );
};
