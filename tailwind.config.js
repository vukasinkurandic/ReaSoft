/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Main color palette - easily customizable
          primary: '#D6A99D',     // Warm brown-pink
          secondary: '#FBF3D5',   // Light cream
          accent: '#D6DAC8',      // Sage green  
          highlight: '#9CAFAA',   // Teal-green
          
          // Darker variants for contrast
          'primary-dark': '#c4927e',
          'secondary-dark': '#f5edc4', 
          'accent-dark': '#c8ccb3',
          'highlight-dark': '#8a9b96',
        }
      },
    },
  },
  plugins: [],
}