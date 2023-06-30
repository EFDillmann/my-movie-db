/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor : theme => ({
        ...theme('colors'),
        'myDark' : '#03020A',
      }),
      textColor : {
        'myRed' : '#E13C2F'
      },
      fontFamily : {
        Ubuntu : ['Ubuntu', 'sans-serif'],
        Bebas : ['Bebas Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}

