/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: {'max': '480px'},
      md: {'min': '481px', 'max': '768px'},
      lg: {'min': '769px'}
    },
    colors: {
      light: '#ffff',
      semiLight: '#f2f8f2',
      lightGray: '#c4c4c4',
      black: '#000000',
      oxfordBlue: '#263238',
      OxfordBlue2: '#231F20',
      forestGreen: '#008000',
      lightGreen: '#23B123',
      forestBrown: '#4d4646',
    },
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}

