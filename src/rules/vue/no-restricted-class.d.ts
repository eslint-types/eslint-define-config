import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedClassOption = string[];

/**
 * Options.
 */
export type NoRestrictedClassOptions = NoRestrictedClassOption;

/**
 * Disallow specific classes in Vue components.
 *
 * @see [no-restricted-class](https://eslint.vuejs.org/rules/no-restricted-class.html)
 */
export type NoRestrictedClassRuleConfig = RuleConfig<NoRestrictedClassOptions>;

/**
 * Disallow specific classes in Vue components.
 *
 * @see [no-restricted-class](https://eslint.vuejs.org/rules/no-restricted-class.html)
 */
export interface NoRestrictedClassRule {
  /**
   * Disallow specific classes in Vue components.
   *
   * @see [no-restricted-class](https://eslint.vuejs.org/rules/no-restricted-class.html)
   */
  'vue/no-restricted-class': NoRestrictedClassRuleConfig;
}
