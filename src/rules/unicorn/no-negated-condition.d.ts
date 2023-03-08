import type { RuleConfig } from '../rule-config';

/**
 * Disallow negated conditions.
 *
 * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-negated-condition.md)
 */
export type NoNegatedConditionRuleConfig = RuleConfig<[]>;

/**
 * Disallow negated conditions.
 *
 * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-negated-condition.md)
 */
export interface NoNegatedConditionRule {
  /**
   * Disallow negated conditions.
   *
   * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-negated-condition.md)
   */
  'unicorn/no-negated-condition': NoNegatedConditionRuleConfig;
}
