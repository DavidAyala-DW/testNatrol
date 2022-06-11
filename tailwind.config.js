/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#001C71"
      },
      backgroundImage: {
        "hero": "linear-gradient(0deg, rgba(255, 255, 255, 0.83) 0%, rgba(255, 255, 255, 0.83) 56.23%, rgba(255, 255, 255, 0) 145.89%)"
      }
    },
    screens: {
      "xs": {'min': '480px'},
      'sm': {'min': '640px'},
      'md': {'min': '767px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1279px'},
      "1.5xl": {'min': '1330px'},
      '2xl': {'min': '1535px'},        
    }
  },
  plugins: [],
}
