module.exports = {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true
    },
  },
  rules:  {
    'react/prop-types': 0,
    'no-var-requires': 0,
    '@typescript-eslint/no-var-requires': 0
  },
  settings:  {
    react:  {
      version: 'detect'
    }
  },
};
