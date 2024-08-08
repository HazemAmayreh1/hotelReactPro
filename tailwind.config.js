/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        'xs': '12px', 
      },
      lineHeight: {
        'custom': '20px',
      },
      fontWeight: {
        'bold': 700, 
      }
    },
  },
  plugins: [],
}

