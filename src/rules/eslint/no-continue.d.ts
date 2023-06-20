import type { RuleConfig } from '../rule-config';

/**
 * Disallow `continue` statements.
 *
 * @see [no-continue](https://eslint.org/docs/latest/rules/no-continue)
 */
export type NoContinueRuleConfig = RuleConfig<[]>;

/**
 * Disallow `continue` statements.
 *
 * @see [no-continue](https://eslint.org/docs/latest/rules/no-continue)
 */
export interface NoContinueRule {
  /**
   * Disallow `continue` statements.
   *
   * @see [no-continue](https://eslint.org/docs/latest/rules/no-continue)
   */
  'no-continue': NoContinueRuleConfig;
}
