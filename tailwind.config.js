/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primery: "#FF7010",
        black: "#191919",
        txtGrey: "#A5A5A5",
        lineGray: "#F0F0F0",
        bgGrey: "#F9F9F9",
        red: "#E23535",
        lightPrimery: "#FFEEE2",
        green: "#24D17E",
      },
      boxShadow: {
        gtr: "10px 35px 60px 15px #000000",
      },
    },
  },
  plugins: [],
};
