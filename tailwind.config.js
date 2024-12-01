/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  important: true,
  theme: {
    extend: {},
    colors: {
      red: "#DB4444",
      lightRed: "#FFF6F4",
      bgRed: "#FFEDE1",
      lightGray: "#F5F5F5",
      borderColor: "#dedede",
      yellow: "#FFAD33",
      green: "#00FF66",
    },
    fontFamily: {
      inter: "Inter",
    },
  },
  plugins: [],
};
