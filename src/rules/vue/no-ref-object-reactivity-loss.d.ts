import type { RuleConfig } from '../rule-config';

/**
 * Disallow usages of ref objects that can lead to loss of reactivity.
 *
 * @see [no-ref-object-reactivity-loss](https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html)
 */
export type NoRefObjectReactivityLossRuleConfig = RuleConfig<[]>;

/**
 * Disallow usages of ref objects that can lead to loss of reactivity.
 *
 * @see [no-ref-object-reactivity-loss](https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html)
 */
export interface NoRefObjectReactivityLossRule {
  /**
   * Disallow usages of ref objects that can lead to loss of reactivity.
   *
   * @see [no-ref-object-reactivity-loss](https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html)
   */
  'vue/no-ref-object-reactivity-loss': NoRefObjectReactivityLossRuleConfig;
}
