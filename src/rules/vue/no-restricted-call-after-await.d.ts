import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @minItems 0
 */
export type NoRestrictedCallAfterAwaitOption = {
  module: string;
  path?: string | string[];
  message?: string;
}[];

/**
 * Options.
 */
export type NoRestrictedCallAfterAwaitOptions =
  NoRestrictedCallAfterAwaitOption;

/**
 * Disallow asynchronously called restricted methods.
 *
 * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
 */
export type NoRestrictedCallAfterAwaitRuleConfig =
  RuleConfig<NoRestrictedCallAfterAwaitOptions>;

/**
 * Disallow asynchronously called restricted methods.
 *
 * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
 */
export interface NoRestrictedCallAfterAwaitRule {
  /**
   * Disallow asynchronously called restricted methods.
   *
   * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
   */
  'vue/no-restricted-call-after-await': NoRestrictedCallAfterAwaitRuleConfig;
}
