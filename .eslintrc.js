module.exports = {
  extends: ['next/core-web-vitals', '@dooboo/eslint-config-react'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'max-len': ['error', {code: 200}],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
