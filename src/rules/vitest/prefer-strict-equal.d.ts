import type { RuleConfig } from '../rule-config';

/**
 * Prefer strict equal over equal.
 *
 * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
 */
export type PreferStrictEqualRuleConfig = RuleConfig<[]>;

/**
 * Prefer strict equal over equal.
 *
 * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
 */
export interface PreferStrictEqualRule {
  /**
   * Prefer strict equal over equal.
   *
   * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
   */
  'vitest/prefer-strict-equal': PreferStrictEqualRuleConfig;
}
