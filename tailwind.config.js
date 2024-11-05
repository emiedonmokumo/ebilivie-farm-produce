/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      spartan: ['League Spartan', 'sans-serif'],
    },
    screens: {
      sm: { max: '480px' },
      md: { min: '481px', max: '768px' },
      lg: { min: '769px' },
    },
    // Remove the colors key completely to use default colors
    extend: {
      width: {
        'modal-sm': '90%', // Add 90% width for small screens
      },
    },
  },
  plugins: [],
}
