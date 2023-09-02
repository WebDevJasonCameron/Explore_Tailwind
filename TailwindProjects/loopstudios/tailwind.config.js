/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
      screen: {
          sm: '480',
          md: '768',
          lg: '976',
          xl: '1440',
      },
    extend: {
          fontFamily: {
              sans: ['Josefin Sans', 'sans-serif'],
              alata: ['Alata'],
          }
    },
  },
  plugins: [],
}

