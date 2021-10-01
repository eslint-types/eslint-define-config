import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NamePropertyCasingOption = 'PascalCase' | 'kebab-case';

/**
 * Options.
 */
export type NamePropertyCasingOptions = [NamePropertyCasingOption?];

/**
 * Enforce specific casing for the name property in Vue components.
 *
 * @deprecated
 *
 * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
 */
export type NamePropertyCasingRuleConfig = RuleConfig<NamePropertyCasingOptions>;

/**
 * Enforce specific casing for the name property in Vue components.
 *
 * @deprecated
 *
 * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
 */
export interface NamePropertyCasingRule {
  /**
   * Enforce specific casing for the name property in Vue components.
   *
   * @deprecated
   *
   * @see [name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)
   */
  'vue/name-property-casing': NamePropertyCasingRuleConfig;
}
