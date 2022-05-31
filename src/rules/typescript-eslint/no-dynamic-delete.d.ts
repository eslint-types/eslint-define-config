import type { RuleConfig } from '../rule-config';

/**
 * Disallow using the `delete` operator on computed key expressions.
 *
 * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
 */
export type NoDynamicDeleteRuleConfig = RuleConfig<[]>;

/**
 * Disallow using the `delete` operator on computed key expressions.
 *
 * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
 */
export interface NoDynamicDeleteRule {
  /**
   * Disallow using the `delete` operator on computed key expressions.
   *
   * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
   */
  '@typescript-eslint/no-dynamic-delete': NoDynamicDeleteRuleConfig;
}
