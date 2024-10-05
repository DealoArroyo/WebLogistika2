/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'xsm': '344px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },

      colors: {
        'bluebutton': '#3FB1C4',
        'bluecard': '#CEE0E3',
        'bluelet': '#336D75',
        'bone': '#F0F3EE',
        'greenbutton': '#87AE79',
        'greencard': '#5E7E46',
        'greenlet': '#55963F',
        'greenav': '#316470',
        'greenwhite': '#E6EBE1'
      },
    },
  },
  plugins: [require('daisyui'),],
}

