/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'green': 'hsla(160, 100%, 37%, 1)',
      'gray': 'rgba(235, 235, 235, 0.64)',
      'black': '#181818',
      'black-soft': '#222222'
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif']
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}

