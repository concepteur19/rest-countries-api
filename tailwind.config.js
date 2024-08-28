// const { text } = require('stream/consumers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textLight: 'hsl(0, 0%, 100%)',
        textDark: 'hsl(200, 15%, 8%)',
        backgroundDark: 'hsl(207, 26%, 17%)',
        backgroundLight: 'hsl(0, 0%, 98%)',
        elementDark: 'hsl(209, 23%, 22%)',
        elementLight: 'hsl(0, 0%, 100%)',
        inputColor: 'hsl(0, 0%, 52%)'
      },
      // fontFamily: {
      //   sans: ['Nunito Sans', "sans-serif"],
      // },
    },
  },
  plugins: [],
};
