import type { RuleConfig } from '../rule-config';

/**
 * disallow specific attribute
 *
 * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
 */
export type NoRestrictedStaticAttributeRuleConfig = RuleConfig<[]>;

/**
 * disallow specific attribute
 *
 * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
 */
export interface NoRestrictedStaticAttributeRule {
  /**
   * disallow specific attribute
   *
   * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
   */
  'vue/no-restricted-static-attribute': NoRestrictedStaticAttributeRuleConfig;
}
