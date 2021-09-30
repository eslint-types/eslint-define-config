import type { RuleConfig } from '../rule-config';

/**
 * enforce properties of `$slots` to be used as a function
 *
 * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
 */
export type RequireSlotsAsFunctionsRuleConfig = RuleConfig<[]>;

/**
 * enforce properties of `$slots` to be used as a function
 *
 * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
 */
export interface RequireSlotsAsFunctionsRule {
  /**
   * enforce properties of `$slots` to be used as a function
   *
   * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
   */
  'vue/require-slots-as-functions': RequireSlotsAsFunctionsRuleConfig;
}
