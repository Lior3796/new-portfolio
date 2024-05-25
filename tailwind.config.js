/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx,js}",
  ],
  theme: {
    extend: {
      colors:{
        'right-gradient':"#f8fafc",
        'left-gradient':"#e2e8f0"
      }
    },
  },
  plugins: [],
}

