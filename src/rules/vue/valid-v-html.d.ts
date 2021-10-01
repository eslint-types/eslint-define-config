import type { RuleConfig } from '../rule-config';

/**
 * Enforce valid `v-html` directives.
 *
 * @see [valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)
 */
export type ValidVHtmlRuleConfig = RuleConfig<[]>;

/**
 * Enforce valid `v-html` directives.
 *
 * @see [valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)
 */
export interface ValidVHtmlRule {
  /**
   * Enforce valid `v-html` directives.
   *
   * @see [valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)
   */
  'vue/valid-v-html': ValidVHtmlRuleConfig;
}
