import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)
 */
export type NoDeprecatedDollarScopedslotsApiRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+).
 *
 * @see [no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)
 */
export interface NoDeprecatedDollarScopedslotsApiRule {
  /**
   * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)
   */
  'vue/no-deprecated-dollar-scopedslots-api': NoDeprecatedDollarScopedslotsApiRuleConfig;
}
