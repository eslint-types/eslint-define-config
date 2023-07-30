import type { RuleConfig } from '../rule-config';

/**
 * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
 *
 * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-some.md)
 */
export type PreferArraySomeRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
 *
 * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-some.md)
 */
export interface PreferArraySomeRule {
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast}(…)`.
   *
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': PreferArraySomeRuleConfig;
}
