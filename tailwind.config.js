/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xll: ['26px', '36px'],
      xll: ['36px', '56px'],

    },
    extend: {
      textUnderlineOffset: {
        3: '3px',
      }
    },
  },
  plugins: [],
}
