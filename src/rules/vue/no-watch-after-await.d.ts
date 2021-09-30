import type { RuleConfig } from '../rule-config';

/**
 * disallow asynchronously registered `watch`
 *
 * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
 */
export type NoWatchAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 * disallow asynchronously registered `watch`
 *
 * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
 */
export interface NoWatchAfterAwaitRule {
  /**
   * disallow asynchronously registered `watch`
   *
   * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
   */
  'vue/no-watch-after-await': NoWatchAfterAwaitRuleConfig;
}
