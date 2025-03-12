/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   montserrat: ["Montserrat", "sans-serif"],
      //   dancing: ["Dancing Script", "cursive"],
      //   cabin: ["Cabin Sketch", "cursive"],
      //   pacifico: ["Pacifico", "cursive"],
      //   lobster: ["Lobster", "cursive"],
      //   anton: ["Anton", "sans-serif"],
      //   playfair: ["Playfair Display", "serif"],
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        dmSans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        plusJakartaSans: [
          '"Plus Jakarta Sans"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
