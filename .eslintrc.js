module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  ecmaFeatures: {
    classes: true,
    jsx: true
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'comma-dangle': 0,
    'object-curly-newline': 0,
    'guard-for-in': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'no-nested-ternary': 0,
    'no-restricted-syntax': 0,
    'react/button-has-type': 0,
    'react/jsx-filename-extension': 0,
    'react/no-find-dom-node': 0,
    'react/prop-types': 0
  },
  globals: {
    document: true,
    window: true,
    isNaN: true,
    navigator: true,
    CustomEvent: true
  }
};
