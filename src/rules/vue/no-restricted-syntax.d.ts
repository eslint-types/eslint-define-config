import type { RuleConfig } from '../rule-config';

/**
 * Disallow specified syntax
 *
 * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
 */
export type NoRestrictedSyntaxRuleConfig = RuleConfig<[]>;

/**
 * Disallow specified syntax
 *
 * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
 */
export interface NoRestrictedSyntaxRule {
  /**
   * Disallow specified syntax
   *
   * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
   */
  'vue/no-restricted-syntax': NoRestrictedSyntaxRuleConfig;
}
