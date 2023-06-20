import type { RuleConfig } from '../rule-config';

/**
 * Disallow `with` statements.
 *
 * @see [no-with](https://eslint.org/docs/latest/rules/no-with)
 */
export type NoWithRuleConfig = RuleConfig<[]>;

/**
 * Disallow `with` statements.
 *
 * @see [no-with](https://eslint.org/docs/latest/rules/no-with)
 */
export interface NoWithRule {
  /**
   * Disallow `with` statements.
   *
   * @see [no-with](https://eslint.org/docs/latest/rules/no-with)
   */
  'no-with': NoWithRuleConfig;
}
