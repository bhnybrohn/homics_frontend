import { Footer } from "@/footer";
import { Navbar } from "@/nav";
import React, { ReactNode } from "react";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-[100svh] flex flex-col">
      <Navbar />
      <section className="flex flex-col flex-1 overflow-auto h-full">
        <div className="flex flex-col flex-1">{children}</div>
        <Footer />
      </section>
    </main>
  );
};
