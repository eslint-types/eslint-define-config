import type { RuleConfig } from '../rule-config';

/**
 * Disallow nested ternary expressions.
 *
 * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-nested-ternary.md)
 */
export type NoNestedTernaryRuleConfig = RuleConfig<[]>;

/**
 * Disallow nested ternary expressions.
 *
 * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-nested-ternary.md)
 */
export interface NoNestedTernaryRule {
  /**
   * Disallow nested ternary expressions.
   *
   * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/no-nested-ternary.md)
   */
  'unicorn/no-nested-ternary': NoNestedTernaryRuleConfig;
}
