import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type KeySpacingOption = any;

/**
 * Options.
 */
export type KeySpacingOptions = [KeySpacingOption?];

/**
 * Enforce consistent spacing between keys and values in object literal properties
 *
 * @see [key-spacing](https://eslint.vuejs.org/rules/key-spacing.html)
 */
export type KeySpacingRuleConfig = RuleConfig<KeySpacingOptions>;

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
