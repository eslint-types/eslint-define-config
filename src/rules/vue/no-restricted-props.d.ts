import type { RuleConfig } from '../rule-config';

/**
 * disallow specific props
 *
 * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
 */
export type NoRestrictedPropsRuleConfig = RuleConfig<[]>;

/**
 * disallow specific props
 *
 * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
 */
export interface NoRestrictedPropsRule {
  /**
   * disallow specific props
   *
   * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
   */
  'vue/no-restricted-props': NoRestrictedPropsRuleConfig;
}
