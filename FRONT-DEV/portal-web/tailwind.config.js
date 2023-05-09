/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3E3E3E',
        secondary: '#F1F1F1',
        default: '#D9D9D9',
        error: '#f87171'
      }
    }
  },
  plugins: []
};
