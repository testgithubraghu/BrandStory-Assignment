//  Must be at the very top
const generateResponsiveScale = (minPx: number, maxPx: number) => {
  return `calc(${minPx}px + (${maxPx} - ${minPx}) * ((100vw - 300px) / (1920 - 300)))`;
};

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
    background: "#ffffff",
    foreground: "#111111", // Or whatever text color you prefer
  },
     fontFamily: {
        'hk-grotesk': ['HK Grotesk', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      screens: {
        px: { max: "639px" },
        xs: "320px",
        xsx: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxxl: "1279px",
        "2xl": "1536px",
        "3xl": "1745px",
        "4xl": "1920px",
        "5xl": "2133px",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontSize: Object.fromEntries(
        Array.from({ length: 96 }, (_, i) => {
          const px = i + 5;
          const scaled = (px * 0.68).toFixed(2);
          return [
            `${px}px`,
            `calc(${scaled}px + (${px} - ${scaled}) * ((100vw - 300px) / (1920 - 300)))`,
          ];
        })
      ),
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;