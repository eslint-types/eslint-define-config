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
export type NoConfusingVoidExpressionOptions = [NoConfusingVoidExpressionOption?];

/**
 * Requires expressions of type void to appear in statement position.
 *
 * @see [no-confusing-void-expression](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)
 */
export type NoConfusingVoidExpressionRuleConfig = RuleConfig<NoConfusingVoidExpressionOptions>;

/**
 * Requires expressions of type void to appear in statement position.
 *
 * @see [no-confusing-void-expression](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)
 */
export interface NoConfusingVoidExpressionRule {
  /**
   * Requires expressions of type void to appear in statement position.
   *
   * @see [no-confusing-void-expression](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md)
   */
  '@typescript-eslint/no-confusing-void-expression': NoConfusingVoidExpressionRuleConfig;
}
