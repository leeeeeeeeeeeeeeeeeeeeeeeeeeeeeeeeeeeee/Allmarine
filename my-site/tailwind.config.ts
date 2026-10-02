import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marine: {
          DEFAULT: "#056074",
          main: "#056074",
          dark: "#030211",
          heading: "#056074",
          light: "#056074",
          accent: "#056074",
        },
        surface: {
          gray: "#FFFFFF",
          light: "#FFFFFF",
          dark: "#030211",
        },
        body: {
          dark: "#282626",
          muted: "#282626",
          light: "#282626",
        },
        brand: {
          teal: "#056074",
          dark: "#030211",
          charcoal: "#282626",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        condensed: ["var(--font-roboto-condensed)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

