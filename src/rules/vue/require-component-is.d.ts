import type { RuleConfig } from '../rule-config';

/**
 * require `v-bind:is` of `<component>` elements
 *
 * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
 */
export type RequireComponentIsRuleConfig = RuleConfig<[]>;

/**
 * require `v-bind:is` of `<component>` elements
 *
 * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
 */
export interface RequireComponentIsRule {
  /**
   * require `v-bind:is` of `<component>` elements
   *
   * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
   */
  'vue/require-component-is': RequireComponentIsRuleConfig;
}
