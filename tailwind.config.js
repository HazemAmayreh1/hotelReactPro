/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#4F4F4F',  
        'custom-purple': '#9B51E0', 
      }
    },
  },
  plugins: [],
}

