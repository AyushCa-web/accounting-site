/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",       // covers pages + components
    "./pages/**/*.{js,jsx,ts,tsx}",     // if you don’t use /src
    "./components/**/*.{js,jsx,ts,tsx}" // if you don’t use /src/components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
