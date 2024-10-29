/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#F8F8F8",
        customBlack: "#090F30",
        customRed: "#FF2A00",
        customLightGreen: "#81B47E",
        customDarkGreen: "#346332",
      },
      fontFamily: {
        mont: ["mont", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
