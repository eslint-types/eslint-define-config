import type { RuleConfig } from '../rule-config';

/**
 * Suggest using the built-in quality matchers.
 *
 * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
 */
export type PreferEqualityMatcherRuleConfig = RuleConfig<[]>;

/**
 * Suggest using the built-in quality matchers.
 *
 * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
 */
export interface PreferEqualityMatcherRule {
  /**
   * Suggest using the built-in quality matchers.
   *
   * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
   */
  'vitest/prefer-equality-matcher': PreferEqualityMatcherRuleConfig;
}
