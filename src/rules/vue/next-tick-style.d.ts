import type { RuleConfig } from '../rule-config';

/**
 * Enforce Promise or callback style in `nextTick`
 *
 * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
 */
export type NextTickStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce Promise or callback style in `nextTick`
 *
 * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
 */
export interface NextTickStyleRule {
  /**
   * Enforce Promise or callback style in `nextTick`
   *
   * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
   */
  'vue/next-tick-style': NextTickStyleRuleConfig;
}
