/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['"Comfortaa"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primary: "#F9A779",
      secondary: "#FFEED0",
      brown: "#3E282F",
      peach: "#FF786C",
      pink: "#FFA3A3",
      yellow: "#EFCA6B",
      green: "#04732A",
      grey: "#F5F5F5",
      white: "#FFF",
      black: "#000",
    },
  },
  plugins: [],
};
