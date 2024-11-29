/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      red: "#DB4444",
      lightRed: "#FFF6F4",
      bgRed: "#FFEDE1",
    },
    fontFamily: {
      inter: "Inter",
    },
    backgroundImage: {
      login: "url('../public/assets/images/login-bg.png')",
    },
    backgroundSize: {
      "50%": "50%",
    },
  },
  plugins: [],
};
