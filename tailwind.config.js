/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,jsx}",
    "./components/**/*.{html, js,jsx}",
  ],
  theme: {
    screens: {
      xs: "393px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "AmsterdamOne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("tailwindcss/typography"),
    require("tailwindcss/forms"),
    require("tailwindcss/line-clamp"),
    require("tailwindcss/aspect-ratio"),
  ],
};
