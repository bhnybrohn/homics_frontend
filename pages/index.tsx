import { LandingPage } from "@/landing-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <LandingPage />
    </main>
  );
}
