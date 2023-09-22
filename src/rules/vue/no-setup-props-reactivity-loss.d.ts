import type { RuleConfig } from '../rule-config';

/**
 * Disallow usages that lose the reactivity of `props` passed to `setup`.
 *
 * @see [no-setup-props-reactivity-loss](https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html)
 */
export type NoSetupPropsReactivityLossRuleConfig = RuleConfig<[]>;

/**
 * Disallow usages that lose the reactivity of `props` passed to `setup`.
 *
 * @see [no-setup-props-reactivity-loss](https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html)
 */
export interface NoSetupPropsReactivityLossRule {
  /**
   * Disallow usages that lose the reactivity of `props` passed to `setup`.
   *
   * @see [no-setup-props-reactivity-loss](https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html)
   */
  'vue/no-setup-props-reactivity-loss': NoSetupPropsReactivityLossRuleConfig;
}
