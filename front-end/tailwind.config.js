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
        'secondary': '#6C4E31',
        'third': "#C3B091"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/src/assets/logoDog.jpg')"
      },
      screens: {
        'xs': '400px',
        'xxs': '200px'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}