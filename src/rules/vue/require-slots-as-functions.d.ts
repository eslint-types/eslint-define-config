import type { RuleConfig } from '../rule-config';

/**
 * Enforce properties of `$slots` to be used as a function.
 *
 * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
 */
export type RequireSlotsAsFunctionsRuleConfig = RuleConfig<[]>;

/**
 * Enforce properties of `$slots` to be used as a function.
 *
 * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
 */
export interface RequireSlotsAsFunctionsRule {
  /**
   * Enforce properties of `$slots` to be used as a function.
   *
   * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
   */
  'vue/require-slots-as-functions': RequireSlotsAsFunctionsRuleConfig;
}
