/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Red for highlights
        secondary: '#FFFFFF', // White for text and accents
        background: '#000000', // Black for the main background
      },
    },
  },
  plugins: [],
};
