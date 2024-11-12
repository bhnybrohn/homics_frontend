import { LandingPage } from "@/landing-page";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <div className="text-center">
          {/* Logo animation */}
          <div className="animate-bounce mb-4">
            <Image
              className="!w-full !h-full"
              src="/navbar/logo.png"
              height={600}
              width={600}
              priority
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <LandingPage />
    </main>
  );
}
