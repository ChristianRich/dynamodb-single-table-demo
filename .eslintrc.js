module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  extends: [
    'prettier',
    'plugin:mocha/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  plugins: ['prettier', 'prefer-arrow', '@typescript-eslint', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-require-imports': ['warn'],
    'no-console': ['warn'],
    'require-await': ['error'],
    'prettier/prettier': ['error'],
    'mocha/no-mocha-arrows': ['warn'],
    'mocha/no-async-describe': ['warn'],
    'mocha/no-identical-title': ['warn'],
    'mocha/no-setup-in-describe': ['warn'],
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    'import/newline-after-import': ['error', { count: 1 }],
  },
  overrides: [
    {
      files: ['*.spec.ts'],
      rules: {
        'prefer-arrow/prefer-arrow-functions': 0,
        'prefer-arrow-callback': 0,
        'func-style': 0,
      },
    },
  ],
};
