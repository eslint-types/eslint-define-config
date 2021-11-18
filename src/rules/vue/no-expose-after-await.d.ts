import type { RuleConfig } from '../rule-config';

/**
 * Disallow asynchronously registered `expose`.
 *
 * @see [no-expose-after-await](https://eslint.vuejs.org/rules/no-expose-after-await.html)
 */
export type NoExposeAfterAwaitRuleConfig = RuleConfig<[]>;

/**
 * Disallow asynchronously registered `expose`.
 *
 * @see [no-expose-after-await](https://eslint.vuejs.org/rules/no-expose-after-await.html)
 */
export interface NoExposeAfterAwaitRule {
  /**
   * Disallow asynchronously registered `expose`.
   *
   * @see [no-expose-after-await](https://eslint.vuejs.org/rules/no-expose-after-await.html)
   */
  'vue/no-expose-after-await': NoExposeAfterAwaitRuleConfig;
}
