module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    jquery: true
  },
  globals: {
    "ga": true,
    "rome": true
  },
  rules: {
  }
};
