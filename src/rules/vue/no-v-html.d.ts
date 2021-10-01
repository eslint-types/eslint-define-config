import type { RuleConfig } from '../rule-config';

/**
 * Disallow use of v-html to prevent XSS attack.
 *
 * @see [no-v-html](https://eslint.vuejs.org/rules/no-v-html.html)
 */
export type NoVHtmlRuleConfig = RuleConfig<[]>;

/**
 * Disallow use of v-html to prevent XSS attack.
 *
 * @see [no-v-html](https://eslint.vuejs.org/rules/no-v-html.html)
 */
export interface NoVHtmlRule {
  /**
   * Disallow use of v-html to prevent XSS attack.
   *
   * @see [no-v-html](https://eslint.vuejs.org/rules/no-v-html.html)
   */
  'vue/no-v-html': NoVHtmlRuleConfig;
}
