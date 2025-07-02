module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'fsd-import', 'prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
          'info',
          'dir',
          'time',
          'timeEnd',
          'trace',
          'assert',
        ],
      },
    ],

    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true, allowExportNames: ['useFilters'] },
    ],
    'fsd-import/fsd-relative-path': [
      'error',
      {
        alias: '@',
      },
    ],
    'fsd-import/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'fsd-import/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
      },
    ],
    'no-nested-ternary': 'error',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['config/**', 'json-server/**', 'vite.config.ts', 'scripts/**'],
      rules: {
        'fsd-import/fsd-relative-path': 'off',
        'fsd-import/public-api-imports': 'off',
        'fsd-import/layer-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
