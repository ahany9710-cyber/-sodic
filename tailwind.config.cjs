/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Inter', 'Cairo', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
      },
      letterSpacing: {
        'heading': '0.02em',
      },
      colors: {
        modon: {
          sand: '#D2CAB7',
          sandLight: '#E8E2D6',
          bg: '#F9F9F9',
          black: '#1A1A1A',
        },
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '7rem',
      },
      borderRadius: {
        button: '0.25rem',
      },
    },
  },
  plugins: [],
}
