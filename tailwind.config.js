/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class", // or meaia
  theme: {
    extend: {
      borderRadius: {
        'custom': '100% 0% 61% 1% / 71% 0% 100% 29% ',
      },

    },
  },
  plugins: [],
}

