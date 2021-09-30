import type { RuleConfig } from '../rule-config';

/**
 * enforce specific casing for the Prop name in Vue components
 *
 * @see [prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)
 */
export type PropNameCasingRuleConfig = RuleConfig<[]>;

/**
 * enforce specific casing for the Prop name in Vue components
 *
 * @see [prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)
 */
export interface PropNameCasingRule {
  /**
   * enforce specific casing for the Prop name in Vue components
   *
   * @see [prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)
   */
  'vue/prop-name-casing': PropNameCasingRuleConfig;
}
