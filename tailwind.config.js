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
        miniHeadBlue: '#1967D2',
        dimGray:"#696969",
        themeBlue:"#1967D2",
        themeHoverBlue:"#1451a4",
        primaryBlue:" #6EC1E4",
        paleCyanBlue:"#8ed1fc",
        softSkyBlue:"#EFF3FC",
        fontBlue:"#1c69d2",
        darkGray:"#77838F",
        socialMediaColor:"#bc91e8"
        
      },
    },
  },
  plugins: [],
}