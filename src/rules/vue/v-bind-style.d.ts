import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type VBindStyleOption = 'shorthand' | 'longform';

/**
 * Options.
 */
export type VBindStyleOptions = [VBindStyleOption?];

/**
 * Enforce `v-bind` directive style.
 *
 * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
 */
export type VBindStyleRuleConfig = RuleConfig<VBindStyleOptions>;

/**
 * Enforce `v-bind` directive style.
 *
 * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
 */
export interface VBindStyleRule {
  /**
   * Enforce `v-bind` directive style.
   *
   * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
   */
  'vue/v-bind-style': VBindStyleRuleConfig;
}
