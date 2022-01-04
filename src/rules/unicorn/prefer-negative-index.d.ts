import type { RuleConfig } from '../rule-config';

/**
 * Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()`, `Array#splice()` and `Array#at()`.
 *
 * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-negative-index.md)
 */
export type PreferNegativeIndexRuleConfig = RuleConfig<[]>;

/**
 * Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()`, `Array#splice()` and `Array#at()`.
 *
 * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-negative-index.md)
 */
export interface PreferNegativeIndexRule {
  /**
   * Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()`, `Array#splice()` and `Array#at()`.
   *
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': PreferNegativeIndexRuleConfig;
}
