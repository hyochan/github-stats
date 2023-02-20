const plugin = require('tailwindcss/plugin');
const flatten = require('flatten-tailwindcss-theme');

const autofill = plugin(({addVariant, e}) => {
  addVariant('autofill', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      const newClass = e(`autofill${separator}${className}`);

      return [
        `.${newClass}:-webkit-autofill`,
        `.${newClass}:-webkit-autofill:hover`,
        `.${newClass}:-webkit-autofill:focus`,
      ].join(',');
    });
  });
});

const textFill = plugin(
  ({addUtilities, variants, theme, e}) => {
    const colors = flatten(theme('colors'));
    const utils = Object.entries(colors).reduce(
      (res, [key, value]) =>
        Object.assign(res, {
          [`.${e(`text-fill-${key}`)}`]: {
            '-webkit-text-fill-color': value,
          },
        }),
      {},
    );
    addUtilities(utils, variants('textFill'));
  },
  {variants: {textFill: []}},
);

const shadowFill = plugin(
  ({addUtilities, variants, theme, e}) => {
    const colors = flatten(theme('colors'));
    const utils = Object.entries(colors).reduce(
      (res, [key, value]) =>
        Object.assign(res, {
          [`.${e(`shadow-fill-${key}`)}`]: {
            '--tw-shadow': `0 0 0 9999px ${value} inset`,
            boxShadow:
              'var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)',
          },
        }),
      {},
    );
    addUtilities(utils, variants('shadowFill'));
  },
  {variants: {shadowFill: []}},
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray1: '#EDEDED',
      gray2: '#CCCCCC',
      gray3: '#BEBEBE',
      gray4: '#909090',
      gray5: '#787878',
      gray6: '#4D4D4D',
      gray7: '#474747',
      gray8: '#282828',
      gray9: '#1E1E1E',
      black: '#000000',
      red1: '#FF2C2C',
      red2: '#DA0000',
      dark: '#182128',
      primary: {
        DEFAULT: '#47498A',
        dark: '#585DFA',
      },
      secondary: {
        DEFAULT: '#9E45B3',
        dark: '#C93AEB',
      },
      accept: {
        DEFAULT: '#6BF3C5',
        dark: '#6BF3C5',
      },
      info: {
        DEFAULT: '#307EF1',
        dark: '#2998FF',
      },
      success: {
        DEFAULT: '#0FC70C',
        dark: '#2FFA86',
      },
      warning: {
        DEFAULT: '#EBBD1A',
        dark: '#F4CC3E',
      },
      danger: {
        DEFAULT: '#F84444',
        dark: '#FF3C3C',
      },
      border: {
        DEFAULT: '#C2C8D0',
        dark: '#333333',
      },
      paper: {
        DEFAULT: 'rgb(243, 245, 253)',
        dark: 'rgb(28, 38, 54)',
      },
      accent: {
        DEFAULT: '#B446BF',
        dark: '#8A96DC',
      },
      link: {
        DEFAULT: '#1C89B6',
        dark: '#E0E0E0',
      },
      'btn-primary': {
        DEFAULT: '#47498A',
        dark: '#585DFA',
      },
      'btn-primary-text': {
        Default: '#FFFFFF',
        dark: '#000000',
      },
    },
    fontWeight: {
      light: '300',
      regular: '400',
      semibold: '600',
      bold: '700',
    },
    fontSize: {
      h1: '26px',
      h2: '22px',
      h3: '18px',
      h4: '16px',
      body1: '18px',
      body2: '16px',
      body3: '14px',
      body4: '12px',
    },
    extend: {
      lineHeight: {
        'h1-1.2': '40px',
        'h1-1.5': '48px',
        'h2-1.2': '30px',
        'h2-1.5': '36px',
        'h3-1.2': '25px',
        'h3-1.5': '30px',
        'h4-1.2': '20px',
        'h4-1.5': '24px',
        'h5-1.2': '18px',
        'h5-1.5': '21px',
        'h6-1.2': '15px',
        'h6-1.5': '18px',
      },
      opacity: {
        30: '.3',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), autofill, textFill, shadowFill],
  variants: {
    extend: {
      borderColor: ['autofill', 'dark'],
      textColor: ['autofill', 'dark'],
      backgroundColor: ['autofill', 'dark'],
    },
  },
};
