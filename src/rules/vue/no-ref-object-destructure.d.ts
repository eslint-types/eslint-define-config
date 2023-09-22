import type { RuleConfig } from '../rule-config';

/**
 * Disallow usages of ref objects that can lead to loss of reactivity.
 *
 * @deprecated
 *
 * @see [no-ref-object-destructure](https://eslint.vuejs.org/rules/no-ref-object-destructure.html)
 */
export type NoRefObjectDestructureRuleConfig = RuleConfig<[]>;

/**
 * Disallow usages of ref objects that can lead to loss of reactivity.
 *
 * @deprecated
 *
 * @see [no-ref-object-destructure](https://eslint.vuejs.org/rules/no-ref-object-destructure.html)
 */
export interface NoRefObjectDestructureRule {
  /**
   * Disallow usages of ref objects that can lead to loss of reactivity.
   *
   * @deprecated
   *
   * @see [no-ref-object-destructure](https://eslint.vuejs.org/rules/no-ref-object-destructure.html)
   */
  'vue/no-ref-object-destructure': NoRefObjectDestructureRuleConfig;
}
