import type { RuleConfig } from '../rule-config';

/**
 * enforce `v-bind` directive style
 *
 * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
 */
export type VBindStyleRuleConfig = RuleConfig<[]>;

/**
 * enforce `v-bind` directive style
 *
 * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
 */
export interface VBindStyleRule {
  /**
   * enforce `v-bind` directive style
   *
   * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
   */
  'vue/v-bind-style': VBindStyleRuleConfig;
}
