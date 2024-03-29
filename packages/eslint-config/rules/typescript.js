module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',

    // https://github.com/typescript-eslint/typescript-eslint/issues/1681
    // https://typescript-eslint.io/packages/parser/#project
    // Use the tsconfig.json nearest to each source file.
    project: true,
  },
  rules: {
    '@typescript-eslint/array-type': [2, { default: 'array' }],
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/brace-style': [1, 'stroustrup'],
    '@typescript-eslint/comma-dangle': 1,
    '@typescript-eslint/comma-spacing': 1,
    '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/func-call-spacing': 1,
    '@typescript-eslint/indent': 1,
    '@typescript-eslint/keyword-spacing': 1,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/method-signature-style': [2, 'property'],
    '@typescript-eslint/no-base-to-string': 2,
    '@typescript-eslint/no-duplicate-enum-values': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-import-type-side-effects': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-invalid-void-type': 2,
    '@typescript-eslint/no-mixed-enums': 2,
    '@typescript-eslint/no-namespace': 2,
    '@typescript-eslint/no-redundant-type-constituents': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-unsafe-argument': 2,
    '@typescript-eslint/no-unsafe-assignment': 2,
    '@typescript-eslint/no-unsafe-call': 2,
    '@typescript-eslint/no-unsafe-member-access': 2,
    '@typescript-eslint/no-unsafe-return': 2,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-use-before-define': [2, { functions: false }],
    '@typescript-eslint/object-curly-spacing': 1,
    '@typescript-eslint/prefer-as-const': 2,
    '@typescript-eslint/prefer-enum-initializers': 2,
    '@typescript-eslint/prefer-literal-enum-member': 2,
    '@typescript-eslint/prefer-nullish-coalescing': 2,
    '@typescript-eslint/prefer-optional-chain': 2,
    '@typescript-eslint/prefer-reduce-type-parameter': 2,
    '@typescript-eslint/prefer-ts-expect-error': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/quotes': 1,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/sort-type-constituents': 2,
    '@typescript-eslint/space-before-blocks': 1,
    '@typescript-eslint/space-infix-ops': 1,
    '@typescript-eslint/type-annotation-spacing': 1,

    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: { delimiter: 'comma', requireLast: true },
        singleline: { delimiter: 'comma', requireLast: false },
        multilineDetection: 'brackets',
      },
    ],

    '@typescript-eslint/member-ordering': [
      2,
      {
        default: ['signature', 'method', 'constructor', 'field'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 1,
        '@typescript-eslint/explicit-module-boundary-types': 2,
      },
    },
  ],
};
