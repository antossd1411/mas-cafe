module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        'deco': '50%'
      },
    	colors: {
    		'orange-1': '#eab777',
        'orange-2': '#ff7301'
    	},
      keyframes: {
        enter: {
          '100%': {transform: 'translate(0, 0)'}
        },
        fadeIn: {
          '100%': {opacity: '1'}
        }
      },
      animation: {
        'enter': 'enter 1s ease-in-out forwards',
        'fadeIn': 'fadeIn 1s ease-in-out forwards'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
