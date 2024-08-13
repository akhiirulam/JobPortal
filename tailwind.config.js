/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors: {
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

