import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent spacing between keys and values in object literal properties
 *
 * @see [key-spacing](https://eslint.vuejs.org/rules/key-spacing.html)
 */
export type KeySpacingRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent spacing between keys and values in object literal properties
 *
 * @see [key-spacing](https://eslint.vuejs.org/rules/key-spacing.html)
 */
export interface KeySpacingRule {
  /**
   * Enforce consistent spacing between keys and values in object literal properties
   *
   * @see [key-spacing](https://eslint.vuejs.org/rules/key-spacing.html)
   */
  'vue/key-spacing': KeySpacingRuleConfig;
}
