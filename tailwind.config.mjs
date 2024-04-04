import defaultTheme from "tailwindcss/defaultTheme";
import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    darkMode: "media",
    extend: {
      colors: {
        primary: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
      },
    },
    fontFamily: {
      body: ["Open Sans"],
      sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [animations, require("flowbite/plugin")],
};
