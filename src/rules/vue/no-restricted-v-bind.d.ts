import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedVBindOption = any[];

/**
 * Options.
 */
export type NoRestrictedVBindOptions = [NoRestrictedVBindOption?];

/**
 * Disallow specific argument in `v-bind`
 *
 * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
 */
export type NoRestrictedVBindRuleConfig = RuleConfig<NoRestrictedVBindOptions>;

/**
 * Disallow specific argument in `v-bind`
 *
 * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
 */
export interface NoRestrictedVBindRule {
  /**
   * Disallow specific argument in `v-bind`
   *
   * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
   */
  'vue/no-restricted-v-bind': NoRestrictedVBindRuleConfig;
}
