/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'light-blue': '#3991AC',
      'middle-blue': '#395CAC',
      'dark-blue' : '#3D39AC',
      'dark-purple': '#6039AC',
      'purple': '#7E39AC',

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
