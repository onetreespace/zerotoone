module.exports = {
  extends: ['next/core-web-vitals', '../../.eslintrc.js'],
  rules: {
    'no-use-before-define': 'off',
    'import/no-default-export': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
};
