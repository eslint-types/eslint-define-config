import type { RuleConfig } from '../rule-config';

/**
 * require a name property in Vue components
 *
 * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
 */
export type RequireNamePropertyRuleConfig = RuleConfig<[]>;

/**
 * require a name property in Vue components
 *
 * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
 */
export interface RequireNamePropertyRule {
  /**
   * require a name property in Vue components
   *
   * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
   */
  'vue/require-name-property': RequireNamePropertyRuleConfig;
}
