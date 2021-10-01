import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
 */
export type NoDeprecatedHtmlElementIsRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
 */
export interface NoDeprecatedHtmlElementIsRule {
  /**
   * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
   */
  'vue/no-deprecated-html-element-is': NoDeprecatedHtmlElementIsRuleConfig;
}
