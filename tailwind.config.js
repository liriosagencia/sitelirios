/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lirios-dark': '#0f0f13',
        'lirios-purple': '#8b5cf6',
        'lirios-pink': '#ec4899',
        'lirios-glow': 'rgba(139, 92, 246, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Importe Inter no index.css
      },
      boxShadow: {
        'neon': '0 0 20px rgba(139, 92, 246, 0.6)',
        'neon-pink': '0 0 20px rgba(236, 72, 153, 0.6)',
      }
    },
  },
  plugins: [],
}