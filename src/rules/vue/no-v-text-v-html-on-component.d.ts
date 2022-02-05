import type { RuleConfig } from '../rule-config';

/**
 * Disallow v-text / v-html on component.
 *
 * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
 */
export type NoVTextVHtmlOnComponentRuleConfig = RuleConfig<[]>;

/**
 * Disallow v-text / v-html on component.
 *
 * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
 */
export interface NoVTextVHtmlOnComponentRule {
  /**
   * Disallow v-text / v-html on component.
   *
   * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
   */
  'vue/no-v-text-v-html-on-component': NoVTextVHtmlOnComponentRuleConfig;
}
