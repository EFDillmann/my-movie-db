/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'hero' : 'url(../../assets/images/bg-hero.jpg)',
        'star' : 'url(../../assets/svg/star-icon.svg)',
        'info' : 'url(../../assets/svg/info-icon.svg)',
        'play' : 'url(../../assets/svg/play-icon.svg)',
        'arrow' : 'url(../../assets/svg/left-arrow.svg)'
      },
      backgroundColor : theme => ({
        ...theme('colors'),
        'myDark' : '#03020A',
        'myRed' : '#E13C2F',
        'myGrey' : '#333333'
      }),
      textColor : {
        'myRed' : '#E13C2F'
      },
      fontFamily : {
        Ubuntu : ['Ubuntu', 'sans-serif'],
        Bebas : ['Bebas Neue', 'sans-serif']
      },
      screens : {
        '480px' : '480px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

