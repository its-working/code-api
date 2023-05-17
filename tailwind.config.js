module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
 }