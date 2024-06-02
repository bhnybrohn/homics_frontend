import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-lg": "1020px",
        "custom-md": "685px",
      },
      colors: {
        homics: {
          success: {
            400: "#7ACF5F",
            500: "#218E11",
          },
          dark: {
            500: "#1F1F1F",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
