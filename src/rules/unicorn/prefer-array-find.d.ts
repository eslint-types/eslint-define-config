import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferArrayFindOption {
  checkFromLast?: boolean;
}

/**
 * Options.
 */
export type PreferArrayFindOptions = [PreferArrayFindOption?];

/**
 * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
 *
 * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-find.md)
 */
export type PreferArrayFindRuleConfig = RuleConfig<PreferArrayFindOptions>;

/**
 * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
 *
 * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-find.md)
 */
export interface PreferArrayFindRule {
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   *
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': PreferArrayFindRuleConfig;
}
