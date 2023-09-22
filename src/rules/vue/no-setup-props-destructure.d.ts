import type { RuleConfig } from '../rule-config';

/**
 * Disallow usages that lose the reactivity of `props` passed to `setup`.
 *
 * @deprecated
 *
 * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
 */
export type NoSetupPropsDestructureRuleConfig = RuleConfig<[]>;

/**
 * Disallow usages that lose the reactivity of `props` passed to `setup`.
 *
 * @deprecated
 *
 * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
 */
export interface NoSetupPropsDestructureRule {
  /**
   * Disallow usages that lose the reactivity of `props` passed to `setup`.
   *
   * @deprecated
   *
   * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
   */
  'vue/no-setup-props-destructure': NoSetupPropsDestructureRuleConfig;
}
