import { MainLayout } from "@/layout";
import React from "react";

const Community = () => {
  return (
    <MainLayout>
      <main className="flex flex-col h-[60vh] justify-center items-center px-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] text-homics-success-500 font-semibold p-3 bg-gray-100 rounded-lg">
            Community coming soon !
          </h3>
        </div>
      </main>
    </MainLayout>
  );
};

export default Community;
