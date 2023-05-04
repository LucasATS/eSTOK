/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d9488",
        secondary: "#504E4E",
        default: "#9ca3af",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};
