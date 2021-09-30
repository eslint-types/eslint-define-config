import type { RuleConfig } from '../rule-config';

/**
 * disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
 *
 * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
 */
export type NoDeprecatedSlotAttributeRuleConfig = RuleConfig<[]>;

/**
 * disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
 *
 * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
 */
export interface NoDeprecatedSlotAttributeRule {
  /**
   * disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
   *
   * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
   */
  'vue/no-deprecated-slot-attribute': NoDeprecatedSlotAttributeRuleConfig;
}
