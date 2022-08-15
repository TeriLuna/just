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
      xs: "280px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "AmsterdamOne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
