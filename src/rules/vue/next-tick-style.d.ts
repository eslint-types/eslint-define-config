import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NextTickStyleOption = 'promise' | 'callback';

/**
 * Options.
 */
export type NextTickStyleOptions = [NextTickStyleOption?];

/**
 * Enforce Promise or callback style in `nextTick`.
 *
 * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
 */
export type NextTickStyleRuleConfig = RuleConfig<NextTickStyleOptions>;

/**
 * Enforce Promise or callback style in `nextTick`.
 *
 * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
 */
export interface NextTickStyleRule {
  /**
   * Enforce Promise or callback style in `nextTick`.
   *
   * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
   */
  'vue/next-tick-style': NextTickStyleRuleConfig;
}
