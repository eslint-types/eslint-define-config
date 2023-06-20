import type { RuleConfig } from '../rule-config';

/**
 * Require `var` declarations be placed at the top of their containing scope.
 *
 * @see [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)
 */
export type VarsOnTopRuleConfig = RuleConfig<[]>;

/**
 * Require `var` declarations be placed at the top of their containing scope.
 *
 * @see [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)
 */
export interface VarsOnTopRule {
  /**
   * Require `var` declarations be placed at the top of their containing scope.
   *
   * @see [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)
   */
  'vars-on-top': VarsOnTopRuleConfig;
}
