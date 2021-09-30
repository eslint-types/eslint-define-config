import type { RuleConfig } from '../rule-config';

/**
 * disallow asynchronous actions in computed properties
 *
 * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
 */
export type NoAsyncInComputedPropertiesRuleConfig = RuleConfig<[]>;

/**
 * disallow asynchronous actions in computed properties
 *
 * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
 */
export interface NoAsyncInComputedPropertiesRule {
  /**
   * disallow asynchronous actions in computed properties
   *
   * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
   */
  'vue/no-async-in-computed-properties': NoAsyncInComputedPropertiesRuleConfig;
}
