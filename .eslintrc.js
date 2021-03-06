module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'airbnb',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'eslint-config-prettier',
    ],
    plugins: ['jsx-a11y', 'prettier'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    },
  };