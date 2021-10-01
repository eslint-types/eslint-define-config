import type { RuleConfig } from '../rule-config';

/**
 * Require `v-bind:is` of `<component>` elements.
 *
 * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
 */
export type RequireComponentIsRuleConfig = RuleConfig<[]>;

/**
 * Require `v-bind:is` of `<component>` elements.
 *
 * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
 */
export interface RequireComponentIsRule {
  /**
   * Require `v-bind:is` of `<component>` elements.
   *
   * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
   */
  'vue/require-component-is': RequireComponentIsRuleConfig;
}
