import type { RuleConfig } from '../rule-config';

/**
 * Disallow ternary operators.
 *
 * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
 */
export type NoTernaryRuleConfig = RuleConfig<[]>;

/**
 * Disallow ternary operators.
 *
 * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
 */
export interface NoTernaryRule {
  /**
   * Disallow ternary operators.
   *
   * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
   */
  'no-ternary': NoTernaryRuleConfig;
}
