import type { RuleConfig } from '../rule-config';

/**
 * Require a name property in Vue components.
 *
 * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
 */
export type RequireNamePropertyRuleConfig = RuleConfig<[]>;

/**
 * Require a name property in Vue components.
 *
 * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
 */
export interface RequireNamePropertyRule {
  /**
   * Require a name property in Vue components.
   *
   * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
   */
  'vue/require-name-property': RequireNamePropertyRuleConfig;
}
