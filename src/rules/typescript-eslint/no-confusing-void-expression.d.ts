import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConfusingVoidExpressionOption {
  ignoreArrowShorthand?: boolean;
  ignoreVoidOperator?: boolean;
}

/**
 * Options.
 */
export type NoConfusingVoidExpressionOptions = [
  NoConfusingVoidExpressionOption?,
];

/**
 * Require expressions of type void to appear in statement position.
 *
 * @see [no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)
 */
export type NoConfusingVoidExpressionRuleConfig =
  RuleConfig<NoConfusingVoidExpressionOptions>;

/**
 * Require expressions of type void to appear in statement position.
 *
 * @see [no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)
 */
export interface NoConfusingVoidExpressionRule {
  /**
   * Require expressions of type void to appear in statement position.
   *
   * @see [no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)
   */
  '@typescript-eslint/no-confusing-void-expression': NoConfusingVoidExpressionRuleConfig;
}
