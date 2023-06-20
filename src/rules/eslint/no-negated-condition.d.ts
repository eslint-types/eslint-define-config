import type { RuleConfig } from '../rule-config';

/**
 * Disallow negated conditions.
 *
 * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
 */
export type NoNegatedConditionRuleConfig = RuleConfig<[]>;

/**
 * Disallow negated conditions.
 *
 * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
 */
export interface NoNegatedConditionRule {
  /**
   * Disallow negated conditions.
   *
   * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
   */
  'no-negated-condition': NoNegatedConditionRuleConfig;
}
