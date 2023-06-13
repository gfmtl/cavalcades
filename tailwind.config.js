/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '90ch'
          }
        }
      },
      colors: {
        facebook: {
          600: '#4267B2'
        }
      }
    }
  },
  safelist: [{ pattern: /(bg|text|border)-(green|facebook)-600/, variants: ['hover'] }],
  plugins: [require('@tailwindcss/typography')]
};
