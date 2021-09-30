import type { RuleConfig } from '../rule-config';

/**
 * Enforce specific casing for the name property in Vue components
 *
 * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
 */
export type NamePropertyCasingRuleConfig = RuleConfig<[]>;

/**
 * Enforce specific casing for the name property in Vue components
 *
 * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
 */
export interface NamePropertyCasingRule {
  /**
   * Enforce specific casing for the name property in Vue components
   *
   * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
   */
  'vue/name-property-casing': NamePropertyCasingRuleConfig;
}
