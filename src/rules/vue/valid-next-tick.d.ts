import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `nextTick` function calls.
 *
 * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
 */
export type ValidNextTickRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `nextTick` function calls.
 *
 * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
 */
export interface ValidNextTickRule {
  /**
   * Enforce valid `nextTick` function calls.
   *
   * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
   */
  'vue/valid-next-tick': ValidNextTickRuleConfig;
}
