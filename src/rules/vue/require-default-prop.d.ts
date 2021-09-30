import type { RuleConfig } from '../rule-config';

/**
 * require default value for props
 *
 * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
 */
export type RequireDefaultPropRuleConfig = RuleConfig<[]>;

/**
 * require default value for props
 *
 * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
 */
export interface RequireDefaultPropRule {
  /**
   * require default value for props
   *
   * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
   */
  'vue/require-default-prop': RequireDefaultPropRuleConfig;
}
