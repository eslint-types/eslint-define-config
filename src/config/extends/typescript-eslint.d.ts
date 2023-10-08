/**
 * Typescript eslint extends.
 *
 * @see [Typescript eslint extends](https://typescript-eslint.io/linting/configs#recommended-configurations)
 */
export type TypescriptEslintExtends =
  | 'plugin:@typescript-eslint/all'
  | 'plugin:@typescript-eslint/base'
  | 'plugin:@typescript-eslint/disable-type-checked'
  | 'plugin:@typescript-eslint/eslint-recommended'
  | 'plugin:@typescript-eslint/recommended-requiring-type-checking' // this requiring-type-checking is deprecated and only for @typescript-eslint/eslint-plugin@v5
  | 'plugin:@typescript-eslint/recommended-type-checked'
  | 'plugin:@typescript-eslint/recommended'
  | 'plugin:@typescript-eslint/strict-type-checked'
  | 'plugin:@typescript-eslint/strict'
  | 'plugin:@typescript-eslint/stylistic-type-checked'
  | 'plugin:@typescript-eslint/stylistic';
