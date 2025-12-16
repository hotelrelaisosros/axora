/** @type {import('tailwindcss').Config} */
const relumeTailwind = require("@relume_io/relume-tailwind");

module.exports = {
  presets: [relumeTailwind],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@relume_io/relume-ui/**/*.{js,jsx,ts,tsx}",
  ],
}

