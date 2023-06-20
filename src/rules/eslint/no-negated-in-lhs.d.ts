import type { RuleConfig } from '../rule-config';

/**
 * Disallow negating the left operand in `in` expressions.
 *
 * @deprecated
 *
 * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
 */
export type NoNegatedInLhsRuleConfig = RuleConfig<[]>;

/**
 * Disallow negating the left operand in `in` expressions.
 *
 * @deprecated
 *
 * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
 */
export interface NoNegatedInLhsRule {
  /**
   * Disallow negating the left operand in `in` expressions.
   *
   * @deprecated
   *
   * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
   */
  'no-negated-in-lhs': NoNegatedInLhsRuleConfig;
}
