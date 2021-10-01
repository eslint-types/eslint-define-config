import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused refs.
 *
 * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
 */
export type NoUnusedRefsRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused refs.
 *
 * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
 */
export interface NoUnusedRefsRule {
  /**
   * Disallow unused refs.
   *
   * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
   */
  'vue/no-unused-refs': NoUnusedRefsRuleConfig;
}
