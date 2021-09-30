import type { RuleConfig } from '../rule-config';

/**
 * enforce specific casing for the name property in Vue components
 *
 * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
 */
export type NamePropertyCasingRuleConfig = RuleConfig<[]>;

/**
 * enforce specific casing for the name property in Vue components
 *
 * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
 */
export interface NamePropertyCasingRule {
  /**
   * enforce specific casing for the name property in Vue components
   *
   * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
   */
  'vue/name-property-casing': NamePropertyCasingRuleConfig;
}
