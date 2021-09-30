import type { RuleConfig } from '../rule-config';

/**
 * disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
 */
export type NoDeprecatedHtmlElementIsRuleConfig = RuleConfig<[]>;

/**
 * disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
 */
export interface NoDeprecatedHtmlElementIsRule {
  /**
   * disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
   */
  'vue/no-deprecated-html-element-is': NoDeprecatedHtmlElementIsRuleConfig;
}
