import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `alert`, `confirm`, and `prompt`.
 *
 * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
 */
export type NoAlertRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `alert`, `confirm`, and `prompt`.
 *
 * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
 */
export interface NoAlertRule {
  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   *
   * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
   */
  'no-alert': NoAlertRuleConfig;
}
