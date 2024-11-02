/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif']
    },
    screens: {
      sm: { 'max': '480px' },
      md: { 'min': '481px', 'max': '768px' },
      lg: { 'min': '769px' }
    },
    colors: {},
    extend: {},
  },
  plugins: [],
}