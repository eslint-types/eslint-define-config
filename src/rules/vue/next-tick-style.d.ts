import type { RuleConfig } from '../rule-config';

/**
 * enforce Promise or callback style in `nextTick`
 *
 * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
 */
export type NextTickStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce Promise or callback style in `nextTick`
 *
 * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
 */
export interface NextTickStyleRule {
  /**
   * enforce Promise or callback style in `nextTick`
   *
   * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
   */
  'vue/next-tick-style': NextTickStyleRuleConfig;
}
