import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector"],
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: {
            100: "#242424",
          },
          light: {
            100: "#f0f0ff",
          },
        },
        highlight: {
          dark: {
            100: "#00ba9b",
            200: "#aeba00",
            300: "#c5f5fa",
          },
          light: {
            100: "#c2fff4",
            200: "#f0f0ff",
            300: "#f6fac5",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
