import type { RuleConfig } from '../rule-config';

/**
 * Disallow specific attribute
 *
 * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
 */
export type NoRestrictedStaticAttributeRuleConfig = RuleConfig<[]>;

/**
 * Disallow specific attribute
 *
 * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
 */
export interface NoRestrictedStaticAttributeRule {
  /**
   * Disallow specific attribute
   *
   * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
   */
  'vue/no-restricted-static-attribute': NoRestrictedStaticAttributeRuleConfig;
}
