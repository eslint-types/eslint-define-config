import type { RuleConfig } from '../rule-config';

/**
 * enforce props default values to be valid
 *
 * @see [require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)
 */
export type RequireValidDefaultPropRuleConfig = RuleConfig<[]>;

/**
 * enforce props default values to be valid
 *
 * @see [require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)
 */
export interface RequireValidDefaultPropRule {
  /**
   * enforce props default values to be valid
   *
   * @see [require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)
   */
  'vue/require-valid-default-prop': RequireValidDefaultPropRuleConfig;
}
