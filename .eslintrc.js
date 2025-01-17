module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': [0],
    'func-names': [0],
    semi: [2, 'never'],
    'no-extra-semi': [2],
    'no-else-return': [0],
    'space-infix-ops': [0],
    'react/prefer-es6-class': [0],
    'react/prefer-stateless-function': [0],
    'react/jsx-filename-extension': [0],
    'no-underscore-dangle': ['error', { allow: ['_config'] }],
    'global-require': [0],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
}
