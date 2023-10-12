/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Bebas Neue', 'cursive'],
        'vibes': ['Great Vibes', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'forum': ['Forum', 'cursive'],

      },
      colors: {
        'coffee':'#3e2b26',
        'myRed-orange': '#fc3c04',
        // 'myOrange': '#fba406',
        'myAlmost-sky':'#649cfb',
        'myBlue':'#1c5198',
        'myYellow':'#f8bf1d',
        'myOrange':'#ea903f',
        'mySky':'#1e8ccc',
        'tertiary': '#e7b622'
      }
    },
  },
  plugins: [],

}

