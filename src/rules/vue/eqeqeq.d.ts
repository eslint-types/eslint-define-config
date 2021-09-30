import type { RuleConfig } from '../rule-config';

/**
 * require the use of `===` and `!==`
 *
 * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
 */
export type EqeqeqRuleConfig = RuleConfig<[]>;

/**
 * require the use of `===` and `!==`
 *
 * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
 */
export interface EqeqeqRule {
  /**
   * require the use of `===` and `!==`
   *
   * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
   */
  'vue/eqeqeq': EqeqeqRuleConfig;
}
