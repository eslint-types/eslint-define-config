import type { RuleConfig } from '../rule-config';

/**
 * Enforce `v-on` directive style
 *
 * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
 */
export type VOnStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce `v-on` directive style
 *
 * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
 */
export interface VOnStyleRule {
  /**
   * Enforce `v-on` directive style
   *
   * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
   */
  'vue/v-on-style': VOnStyleRuleConfig;
}
