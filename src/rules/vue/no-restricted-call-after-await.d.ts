import type { RuleConfig } from '../rule-config';

/**
 * Disallow asynchronously called restricted methods
 *
 * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
 */
export type NoRestrictedCallAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow asynchronously called restricted methods
 *
 * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
 */
export interface NoRestrictedCallAfterAwaitRule {
  /**
   * Disallow asynchronously called restricted methods
   *
   * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
   */
  'vue/no-restricted-call-after-await': NoRestrictedCallAfterAwaitRuleConfig;
}
