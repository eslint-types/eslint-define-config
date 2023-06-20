import type { RuleConfig } from '../rule-config';

/**
 * Disallow `new` operators outside of assignments or comparisons.
 *
 * @see [no-new](https://eslint.org/docs/latest/rules/no-new)
 */
export type NoNewRuleConfig = RuleConfig<[]>;

/**
 * Disallow `new` operators outside of assignments or comparisons.
 *
 * @see [no-new](https://eslint.org/docs/latest/rules/no-new)
 */
export interface NoNewRule {
  /**
   * Disallow `new` operators outside of assignments or comparisons.
   *
   * @see [no-new](https://eslint.org/docs/latest/rules/no-new)
   */
  'no-new': NoNewRuleConfig;
}
