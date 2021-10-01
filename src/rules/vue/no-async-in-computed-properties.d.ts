import type { RuleConfig } from '../rule-config';

/**
 * Disallow asynchronous actions in computed properties.
 *
 * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
 */
export type NoAsyncInComputedPropertiesRuleConfig = RuleConfig<[]>;

/**
 * Disallow asynchronous actions in computed properties.
 *
 * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
 */
export interface NoAsyncInComputedPropertiesRule {
  /**
   * Disallow asynchronous actions in computed properties.
   *
   * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
   */
  'vue/no-async-in-computed-properties': NoAsyncInComputedPropertiesRuleConfig;
}
