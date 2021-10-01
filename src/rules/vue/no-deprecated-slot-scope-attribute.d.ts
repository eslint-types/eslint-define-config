import type { RuleConfig } from '../rule-config';

/**
 * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+).
 *
 * @see [no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)
 */
export type NoDeprecatedSlotScopeAttributeRuleConfig = RuleConfig<[]>;

/**
 * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+).
 *
 * @see [no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)
 */
export interface NoDeprecatedSlotScopeAttributeRule {
  /**
   * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+).
   *
   * @see [no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)
   */
  'vue/no-deprecated-slot-scope-attribute': NoDeprecatedSlotScopeAttributeRuleConfig;
}
