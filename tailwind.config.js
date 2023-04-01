/** @type {import('tailwindcss').Config} */
module.exports = {
  important: false,
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
