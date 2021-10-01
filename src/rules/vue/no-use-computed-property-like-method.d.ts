import type { RuleConfig } from '../rule-config';

/**
 * Disallow use computed property like method.
 *
 * @see [no-use-computed-property-like-method](https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html)
 */
export type NoUseComputedPropertyLikeMethodRuleConfig = RuleConfig<[]>;

/**
 * Disallow use computed property like method.
 *
 * @see [no-use-computed-property-like-method](https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html)
 */
export interface NoUseComputedPropertyLikeMethodRule {
  /**
   * Disallow use computed property like method.
   *
   * @see [no-use-computed-property-like-method](https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html)
   */
  'vue/no-use-computed-property-like-method': NoUseComputedPropertyLikeMethodRuleConfig;
}
