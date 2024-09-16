/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFEAC5',
        'secondary' : '#6C4E31',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },

    },
  },
  plugins: [],
}