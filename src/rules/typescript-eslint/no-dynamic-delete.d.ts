import type { RuleConfig } from '../rule-config';

/**
 * Disallow the delete operator with computed key expressions.
 *
 * @see [no-dynamic-delete](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)
 */
export type NoDynamicDeleteRuleConfig = RuleConfig<[]>;

/**
 * Disallow the delete operator with computed key expressions.
 *
 * @see [no-dynamic-delete](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)
 */
export interface NoDynamicDeleteRule {
  /**
   * Disallow the delete operator with computed key expressions.
   *
   * @see [no-dynamic-delete](https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.2/packages/eslint-plugin/docs/rules/no-dynamic-delete.md)
   */
  '@typescript-eslint/no-dynamic-delete': NoDynamicDeleteRuleConfig;
}
