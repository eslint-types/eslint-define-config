import type { RuleConfig } from '../rule-config';

/**
 * Disallow asynchronously registered `watch`.
 *
 * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
 */
export type NoWatchAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow asynchronously registered `watch`.
 *
 * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
 */
export interface NoWatchAfterAwaitRule {
  /**
   * Disallow asynchronously registered `watch`.
   *
   * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
   */
  'vue/no-watch-after-await': NoWatchAfterAwaitRuleConfig;
}
