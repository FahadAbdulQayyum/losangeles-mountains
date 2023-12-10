/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      // sans: ['Oswald', 'sans-serif'],
      // sans: ['Bebas Neue', 'sans-serif'],
      // sans: ['Anton', 'sans-serif'],
      'anton': ['Anton', 'sans-serif'],
    },
    screens: {
      'xxs': '350px', // Set 'xs' to 400px
      'xs': '400px', // Set 'xs' to 400px
      'sm': '500px', // Set 'sm' to 500px
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

