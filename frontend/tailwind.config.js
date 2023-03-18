/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {

      //user colors
      'gray': '#DDDEF8',
      'light-pink': '#E19DD4',
      'cyan': '#3991AC',
      'light-blue': '#6F8ECC',
      'blue': '#395CAC',
      'dark-blue' : '#3D39AC',
      'light-purple': '#A280FC',
      'purple': '#7E39AC',
      'dark-purple': '#6039AC',

      //admin colors
      


    },
    fontFamily: {
      monospace: ['Roboto Mono', 'IBM Plex Mono'],
      sans: ['Poppins'],

    },

    extend: {
      spacing: {
        '8xl' : '96rem',
        '9xl' : '128rem'
      },
      borderRadius: {
        '4xl' : '2rem',
      }

    },
  },
  plugins: [],
};
