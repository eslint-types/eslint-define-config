import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferArrayFlatOption {
  functions?: any[];
}

/**
 * Options.
 */
export type PreferArrayFlatOptions = [PreferArrayFlatOption?];

/**
 * Prefer `Array#flat()` over legacy techniques to flatten arrays.
 *
 * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat.md)
 */
export type PreferArrayFlatRuleConfig = RuleConfig<PreferArrayFlatOptions>;

/**
 * Prefer `Array#flat()` over legacy techniques to flatten arrays.
 *
 * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat.md)
 */
export interface PreferArrayFlatRule {
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   *
   * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat.md)
   */
  'unicorn/prefer-array-flat': PreferArrayFlatRuleConfig;
}
