import type { RuleConfig } from '../rule-config';

/**
 * Prefer `.find(…)` over the first element from `.filter(…)`.
 *
 * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v43.0.2/docs/rules/prefer-array-find.md)
 */
export type PreferArrayFindRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.find(…)` over the first element from `.filter(…)`.
 *
 * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v43.0.2/docs/rules/prefer-array-find.md)
 */
export interface PreferArrayFindRule {
  /**
   * Prefer `.find(…)` over the first element from `.filter(…)`.
   *
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v43.0.2/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': PreferArrayFindRuleConfig;
}
