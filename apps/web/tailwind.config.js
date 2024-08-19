/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
          "bg1" : "url('/bg2.png')"
      },

      colors: {
        primary:"#142746",
        third:"#b990d0",
        secondary:"#f1ecf2"

      }
    },
  },
  plugins: [
    require('daisyui')
  ],
};
