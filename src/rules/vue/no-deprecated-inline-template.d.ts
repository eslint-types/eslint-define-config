import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
 */
export type NoDeprecatedInlineTemplateRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
 */
export interface NoDeprecatedInlineTemplateRule {
  /**
   * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
   */
  'vue/no-deprecated-inline-template': NoDeprecatedInlineTemplateRuleConfig;
}
