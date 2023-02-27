/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'grey-bg': '#F5F5F8',
        'borderLine': 'rgba(35, 44, 94, 0.13)',
        'mainText': '#222222',
        'formBorder': 'rgba(35, 44, 94, 0.21)',
        'loginInputBorder': '#232C5E',
        'lightGreyText': '#5E5E5E',
        'timeColor': '#969696',
      },
      boxShadow: {
        'shadow-grey': '0px 6px 25px rgba(19, 35, 68, 0.1)',
      },
    },
  },
  plugins: [],
};
