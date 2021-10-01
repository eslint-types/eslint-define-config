import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)
 */
export type NoDeprecatedVOnNumberModifiersRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)
 */
export interface NoDeprecatedVOnNumberModifiersRule {
  /**
   * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)
   */
  'vue/no-deprecated-v-on-number-modifiers': NoDeprecatedVOnNumberModifiersRuleConfig;
}
