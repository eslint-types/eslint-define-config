import type { RuleConfig } from '../rule-config';

/**
 * disallow unused refs
 *
 * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
 */
export type NoUnusedRefsRuleConfig = RuleConfig<[]>;

/**
 * disallow unused refs
 *
 * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
 */
export interface NoUnusedRefsRule {
  /**
   * disallow unused refs
   *
   * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
   */
  'vue/no-unused-refs': NoUnusedRefsRuleConfig;
}
