/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      'sans': ["'Ubuntu', sans-serif"],
    },
    fontSize: {
      sx: '10px',
      sm: '14px',
      md: '16px',
      lg: '32px',
      xl: '40px',
      '2xl': '48px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      dark: '#121214',
      primary: '#6A5ACD',
      secondary: '#23CAD4',
      tertiary: '#F86A04'
    },
    extend: {},
  },
  plugins: [],
}
