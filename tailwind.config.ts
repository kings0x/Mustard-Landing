import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FCD34D",
        "primary-dark": "#FBBF24",
        "primary-darker": "#F59E0B",
      },
      fontFamily: {
        sans: ["Sora", "Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
