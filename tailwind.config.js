const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        success: colors.green,
        info: colors.cyan,
        danger: colors.red,
        warning: colors.orange,
        light: colors.white,
        dark: colors.black,
      },
      fontFamily: {
        customFont: ['"Custom Font"', 'sans-serif'],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
