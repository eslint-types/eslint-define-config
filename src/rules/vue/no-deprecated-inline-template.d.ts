import type { RuleConfig } from '../rule-config';

/**
 * disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
 */
export type NoDeprecatedInlineTemplateRuleConfig = RuleConfig<[]>;

/**
 * disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
 *
 * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
 */
export interface NoDeprecatedInlineTemplateRule {
  /**
   * disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
   *
   * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
   */
  'vue/no-deprecated-inline-template': NoDeprecatedInlineTemplateRuleConfig;
}
