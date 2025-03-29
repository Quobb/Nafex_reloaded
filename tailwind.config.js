/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burntOrange: '#CC5500',
        burtBlue: '#003B5C',
      },
    },
  },
  plugins: [],
}

