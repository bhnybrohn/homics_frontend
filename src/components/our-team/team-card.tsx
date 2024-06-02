import React from "react";

export const TeamCard = () => {
  return (
    <main className="flex flex-col gap-3">
      <figure className="min-h-[19.5rem] min-w-[19.5rem] bg-gray-500 rounded-2xl" />
      <div className="flex flex-col">
        <p className="text-base font-semibold text-black">Mr David</p>
        <p className="text-sm font-medium text-black">Founder/CEO</p>
      </div>
    </main>
  );
};
