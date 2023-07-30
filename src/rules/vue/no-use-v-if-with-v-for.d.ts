import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUseVIfWithVForOption {
  allowUsingIterationVar?: boolean;
}

/**
 * Options.
 */
export type NoUseVIfWithVForOptions = [NoUseVIfWithVForOption?];

/**
 * Disallow using `v-if` on the same element as `v-for`.
 *
 * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
 */
export type NoUseVIfWithVForRuleConfig = RuleConfig<NoUseVIfWithVForOptions>;

/**
 * Disallow using `v-if` on the same element as `v-for`.
 *
 * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
 */
export interface NoUseVIfWithVForRule {
  /**
   * Disallow using `v-if` on the same element as `v-for`.
   *
   * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
   */
  'vue/no-use-v-if-with-v-for': NoUseVIfWithVForRuleConfig;
}
