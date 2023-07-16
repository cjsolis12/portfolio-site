/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'dark-blue': '#1A294A',
      'light-blue': '#5DC9E9',
      'aqua': '#25f9c769',
      'aqua2': '#D6FEF2',
      'grey': '#EC6943',
      'purple': '#6271DD',
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
 
    extend: {},
  },
  plugins: [],
}

