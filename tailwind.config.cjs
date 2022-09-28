/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFF4CF",
        secondary: "#fe985b",
        dark: "#00040f",
      },
      fontFamily: {
        Rubik: ["Rubik","Ubuntu", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "560px",
      sm: "768px",
      md: "1080px",
      lg: "1440px",
      xl: "2160px",
    },
  },
  plugins: [],
};