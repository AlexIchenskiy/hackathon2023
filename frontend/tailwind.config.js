/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {

      //user colors
      'white' : '#fff',
      'gray' : '#7f7f7f',
      'black' : '#000',
      'pink' : '#f9abe7',
      'light-purple' : '#e1a9f6',
      'dark-purple' : '#9e3ffd',
      'violet' : '#d1bbf9',
      'blue' : '#c6c7ff',
      'cyan' : '#b5e5ff',

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
