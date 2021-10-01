import type { RuleConfig } from '../rule-config';

/**
 * Require `v-bind:key` with `v-for` directives.
 *
 * @see [require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html)
 */
export type RequireVForKeyRuleConfig = RuleConfig<[]>;

/**
 * Require `v-bind:key` with `v-for` directives.
 *
 * @see [require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html)
 */
export interface RequireVForKeyRule {
  /**
   * Require `v-bind:key` with `v-for` directives.
   *
   * @see [require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html)
   */
  'vue/require-v-for-key': RequireVForKeyRuleConfig;
}
