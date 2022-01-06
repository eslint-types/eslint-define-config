import type { RuleConfig } from '../rule-config';

/**
 * Disallow the delete operator with computed key expressions.
 *
 * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
 */
export type NoDynamicDeleteRuleConfig = RuleConfig<[]>;

/**
 * Disallow the delete operator with computed key expressions.
 *
 * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
 */
export interface NoDynamicDeleteRule {
  /**
   * Disallow the delete operator with computed key expressions.
   *
   * @see [no-dynamic-delete](https://typescript-eslint.io/rules/no-dynamic-delete)
   */
  '@typescript-eslint/no-dynamic-delete': NoDynamicDeleteRuleConfig;
}
