import type { RuleConfig } from '../rule-config';

/**
 * disallow asynchronously registered lifecycle hooks
 *
 * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
 */
export type NoLifecycleAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 * disallow asynchronously registered lifecycle hooks
 *
 * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
 */
export interface NoLifecycleAfterAwaitRule {
  /**
   * disallow asynchronously registered lifecycle hooks
   *
   * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
   */
  'vue/no-lifecycle-after-await': NoLifecycleAfterAwaitRuleConfig;
}
