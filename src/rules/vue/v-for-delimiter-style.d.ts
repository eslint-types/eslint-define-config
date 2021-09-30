import type { RuleConfig } from '../rule-config';

/**
 * Enforce `v-for` directive's delimiter style
 *
 * @see [v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html)
 */
export type VForDelimiterStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce `v-for` directive's delimiter style
 *
 * @see [v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html)
 */
export interface VForDelimiterStyleRule {
  /**
   * Enforce `v-for` directive's delimiter style
   *
   * @see [v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html)
   */
  'vue/v-for-delimiter-style': VForDelimiterStyleRuleConfig;
}
