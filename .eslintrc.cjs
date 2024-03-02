module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        types: 'always',
      },
    ],
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
  ignorePatterns: ["dist/"],
}
