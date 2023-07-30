import type { RuleConfig } from '../rule-config';

/**
 * Disallow using `v-else-if`/`v-else` on the same element as `v-for`.
 *
 * @see [no-use-v-else-with-v-for](https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html)
 */
export type NoUseVElseWithVForRuleConfig = RuleConfig<[]>;

/**
 * Disallow using `v-else-if`/`v-else` on the same element as `v-for`.
 *
 * @see [no-use-v-else-with-v-for](https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html)
 */
export interface NoUseVElseWithVForRule {
  /**
   * Disallow using `v-else-if`/`v-else` on the same element as `v-for`.
   *
   * @see [no-use-v-else-with-v-for](https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html)
   */
  'vue/no-use-v-else-with-v-for': NoUseVElseWithVForRuleConfig;
}
