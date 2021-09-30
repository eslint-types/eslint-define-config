import type { RuleConfig } from '../rule-config';

/**
 * disallow specified syntax
 *
 * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
 */
export type NoRestrictedSyntaxRuleConfig = RuleConfig<[]>;

/**
 * disallow specified syntax
 *
 * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
 */
export interface NoRestrictedSyntaxRule {
  /**
   * disallow specified syntax
   *
   * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
   */
  'vue/no-restricted-syntax': NoRestrictedSyntaxRuleConfig;
}
