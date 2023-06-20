import type { RuleConfig } from '../rule-config';

/**
 * Disallow nested ternary expressions.
 *
 * @see [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
 */
export type NoNestedTernaryRuleConfig = RuleConfig<[]>;

/**
 * Disallow nested ternary expressions.
 *
 * @see [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
 */
export interface NoNestedTernaryRule {
  /**
   * Disallow nested ternary expressions.
   *
   * @see [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
   */
  'no-nested-ternary': NoNestedTernaryRuleConfig;
}
