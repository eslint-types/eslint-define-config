import type { RuleConfig } from '../rule-config';

/**
 * Prefer `each` rather than manual loops.
 *
 * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
 */
export type PreferEachRuleConfig = RuleConfig<[]>;

/**
 * Prefer `each` rather than manual loops.
 *
 * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
 */
export interface PreferEachRule {
  /**
   * Prefer `each` rather than manual loops.
   *
   * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
   */
  'vitest/prefer-each': PreferEachRuleConfig;
}
