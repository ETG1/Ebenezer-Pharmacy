import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ceruleanBlue: "#268fcd",
        limeGreen: "#79b84e",
        grayText: "#888888",
        blackaccent: "#000000",
        accentWhite: "#FFFFFF",
        brightRed: "#EF3636", // warning
        neonGreen: "#41CE09", // success
        bgLight: "#F5F5F5", // background
      }, 
    },
  },
  plugins: [],
};

export default config;
