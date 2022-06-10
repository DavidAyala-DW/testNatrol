/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#202e68"
      }
    },
    screens: {
      'sm': {'min': '640px'},
      'md': {'min': '767px'},
      'lg': {'min': '1023px'},
      'xl': {'min': '1279px'},
      '2xl': {'min': '1535px'},        
    }
  },
  plugins: [],
}
