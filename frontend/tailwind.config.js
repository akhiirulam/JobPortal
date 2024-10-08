/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1967D2',
        secondary: '#808080',
        ashGray: '#ECEDF2',
        link: 'rgb(25 103 210)',
        'custom-light': '#f7f9fd',
        'custom-dark': '#e4ecfa',
        'button-clr': '#1967d2',
      }
    },
  },
  plugins: [],
}