/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#001C71",
        "contact_us": "#0066CC"
      },
      backgroundImage: {
        "hero": "linear-gradient(0deg, rgba(255, 255, 255, 0.83) 0%, rgba(255, 255, 255, 0.83) 56.23%, rgba(255, 255, 255, 0) 145.89%)",
        "banner_text": "linear-gradient(179.81deg, #19213A 31.55%, #001C71 99.83%)"
      },
      fontFamily:{
        "starduster": ["Starduster Title Italic"]
      },
      boxShadow:{
        "introduction": "0px 2px 6px rgba(151, 172, 198, 0.25)"
      }
    },
    screens: {
      "2xs": {'min': '420px'},
      "xs": {'min': '480px'},
      'sm': {'min': '640px'},
      'md': {'min': '767px'},
      'md2': {'min': '980px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1279px'},
      "1.5xl": {'min': '1330px'},
      '2xl': {'min': '1535px'},        
      '3xl': {'min': '1720px'},        
    }
  },
  plugins: [],
}
