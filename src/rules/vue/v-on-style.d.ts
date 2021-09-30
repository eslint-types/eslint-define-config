import type { RuleConfig } from '../rule-config';

/**
 * enforce `v-on` directive style
 *
 * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
 */
export type VOnStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce `v-on` directive style
 *
 * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
 */
export interface VOnStyleRule {
  /**
   * enforce `v-on` directive style
   *
   * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
   */
  'vue/v-on-style': VOnStyleRuleConfig;
}
