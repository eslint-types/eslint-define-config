import type { RuleConfig } from '../rule-config';

/**
 * Disallow expressions where the operation doesn't affect the value.
 *
 * @see [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
 */
export type NoConstantBinaryExpressionRuleConfig = RuleConfig<[]>;

/**
 * Disallow expressions where the operation doesn't affect the value.
 *
 * @see [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
 */
export interface NoConstantBinaryExpressionRule {
  /**
   * Disallow expressions where the operation doesn't affect the value.
   *
   * @see [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
   */
  'no-constant-binary-expression': NoConstantBinaryExpressionRuleConfig;
}
