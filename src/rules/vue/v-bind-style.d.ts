import type { RuleConfig } from '../rule-config';

/**
 * Enforce `v-bind` directive style
 *
 * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
 */
export type VBindStyleRuleConfig = RuleConfig<[]>;

/**
 * Enforce `v-bind` directive style
 *
 * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
 */
export interface VBindStyleRule {
  /**
   * Enforce `v-bind` directive style
   *
   * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
   */
  'vue/v-bind-style': VBindStyleRuleConfig;
}
