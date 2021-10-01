import type { RuleConfig } from '../rule-config';

/**
 * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+).
 *
 * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
 */
export type NoDeprecatedSlotAttributeRuleConfig = RuleConfig<[]>;

/**
 * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+).
 *
 * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
 */
export interface NoDeprecatedSlotAttributeRule {
  /**
   * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+).
   *
   * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
   */
  'vue/no-deprecated-slot-attribute': NoDeprecatedSlotAttributeRuleConfig;
}
