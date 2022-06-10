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
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '640px'},
    }
  },
  plugins: [],
}
