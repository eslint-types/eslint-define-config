import type { RuleConfig } from '../rule-config';

/**
 * Prefer `.some(…)` over `.filter(…).length` check and `.find(…)`.
 *
 * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-array-some.md)
 */
export type PreferArraySomeRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.some(…)` over `.filter(…).length` check and `.find(…)`.
 *
 * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-array-some.md)
 */
export interface PreferArraySomeRule {
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.find(…)`.
   *
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v40.0.0/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': PreferArraySomeRuleConfig;
}
