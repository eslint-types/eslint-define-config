import type { RuleConfig } from '../rule-config';

/**
 * disallow specific component option
 *
 * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
 */
export type NoRestrictedComponentOptionsRuleConfig = RuleConfig<[]>;

/**
 * disallow specific component option
 *
 * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
 */
export interface NoRestrictedComponentOptionsRule {
  /**
   * disallow specific component option
   *
   * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
   */
  'vue/no-restricted-component-options': NoRestrictedComponentOptionsRuleConfig;
}
