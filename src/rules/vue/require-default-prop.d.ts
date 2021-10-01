import type { RuleConfig } from '../rule-config';

/**
 * Require default value for props.
 *
 * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
 */
export type RequireDefaultPropRuleConfig = RuleConfig<[]>;

/**
 * Require default value for props.
 *
 * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
 */
export interface RequireDefaultPropRule {
  /**
   * Require default value for props.
   *
   * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
   */
  'vue/require-default-prop': RequireDefaultPropRuleConfig;
}
