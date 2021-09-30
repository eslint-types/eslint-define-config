import type { RuleConfig } from '../rule-config';

/**
 * Require the use of `===` and `!==`
 *
 * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
 */
export type EqeqeqRuleConfig = RuleConfig<[]>;

/**
 * Require the use of `===` and `!==`
 *
 * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
 */
export interface EqeqeqRule {
  /**
   * Require the use of `===` and `!==`
   *
   * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
   */
  'vue/eqeqeq': EqeqeqRuleConfig;
}
