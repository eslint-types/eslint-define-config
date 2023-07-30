import type { RuleConfig } from '../rule-config';

/**
 * Prefer `.flatMap(…)` over `.map(…).flat()`.
 *
 * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat-map.md)
 */
export type PreferArrayFlatMapRuleConfig = RuleConfig<[]>;

/**
 * Prefer `.flatMap(…)` over `.map(…).flat()`.
 *
 * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat-map.md)
 */
export interface PreferArrayFlatMapRule {
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   *
   * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat-map.md)
   */
  'unicorn/prefer-array-flat-map': PreferArrayFlatMapRuleConfig;
}
