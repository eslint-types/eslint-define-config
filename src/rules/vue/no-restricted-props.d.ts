import type { RuleConfig } from '../rule-config';

/**
 * Disallow specific props
 *
 * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
 */
export type NoRestrictedPropsRuleConfig = RuleConfig<[]>;

/**
 * Disallow specific props
 *
 * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
 */
export interface NoRestrictedPropsRule {
  /**
   * Disallow specific props
   *
   * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
   */
  'vue/no-restricted-props': NoRestrictedPropsRuleConfig;
}
