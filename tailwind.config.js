/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  safelist: [
    {
      pattern: /^text-/
    },
    {
      pattern: /^translate-/
    },
    {
      pattern: /^bg-/
    },
  ],
  theme: {
    fontFamily: {
      'sans': ["'Ubuntu', sans-serif"],
    },
    fontSize: {
      xs: '10px',
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
      tertiary: '#F86A04',
      placeholder: '#1D1B1B',
      danger: '#C03131',

      green: {
        '900': '#164E18',
        '600': '#427043',
        '400': '#C6EDC8'
      },

      gray: {
        '400': '#373636'
      }

    },
    extend: {},
    keyframes: {
      shimmer: {
        '100%' : {transform: 'translateX(100%)'}
      },
      overlay: {
        '0%' : {transform: 'translateX(-100%)'}
      },
      appear: {
        '0%' : {transform: 'translateY(-10%)'}
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(3deg)' },
        '75%': { transform: 'rotate(-3deg)' },
      },
      heartWiggle: {
        '0%, 100%': { transform: 'rotate(0deg)' },
        '25%': { transform: 'rotate(8deg)' },
        '75%': { transform: 'rotate(-8deg)' },
      }
    },
    animation: {
      wiggle: 'wiggle 300ms 2 linear',
      heartWiggle: 'heartWiggle 150ms 2 linear',
      overlay: 'overlay 5s 1 linear',
    }
  },
}
