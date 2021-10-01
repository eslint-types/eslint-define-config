import type { RuleConfig } from '../rule-config';

/**
 * Disallow asynchronously registered lifecycle hooks.
 *
 * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
 */
export type NoLifecycleAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow asynchronously registered lifecycle hooks.
 *
 * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
 */
export interface NoLifecycleAfterAwaitRule {
  /**
   * Disallow asynchronously registered lifecycle hooks.
   *
   * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
   */
  'vue/no-lifecycle-after-await': NoLifecycleAfterAwaitRuleConfig;
}
