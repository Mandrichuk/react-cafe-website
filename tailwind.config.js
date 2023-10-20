/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green": "#05442e",
        "custom-light-cream": "#C3C3C3",
      },
    },
  },
  plugins: [],
};
