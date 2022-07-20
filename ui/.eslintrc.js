module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  //'plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['**/tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // GOOD
    semi: ['error', 'always'],
    'jsx-a11y/anchor-is-valid': 'off', // allow as needed
    'react/no-danger': 'off', // for the sanitizeHTML
    '@typescript-eslint/no-non-null-assertion': 'off', // allow using the postfix operator
    'react/jsx-filename-extension':  'off', // [1, { "allow": "as-needed" }],
    //'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
    // IN PROGRESS
    /*'@typescript-eslint/explicit-module-boundary-types': [2,{
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
    }]*/
    'import/no-unresolved': 'off',  // fixes the widespread import issue
    'import/extensions': 'off', // fixes the widespread requirement for extensionss
    'react/jsx-no-bind': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

// eslint-disable-next-line
