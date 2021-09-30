import type { RuleConfig } from '../rule-config';

/**
 * enforce valid `nextTick` function calls
 *
 * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
 */
export type ValidNextTickRuleConfig = RuleConfig<[]>;

/**
 * enforce valid `nextTick` function calls
 *
 * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
 */
export interface ValidNextTickRule {
  /**
   * enforce valid `nextTick` function calls
   *
   * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
   */
  'vue/valid-next-tick': ValidNextTickRuleConfig;
}
