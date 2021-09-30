import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ObjectCurlySpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type ObjectCurlySpacingOptions = [ObjectCurlySpacingOption?];

/**
 * Enforce consistent spacing inside braces
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export type ObjectCurlySpacingRuleConfig = RuleConfig<ObjectCurlySpacingOptions>;

/**
 * Enforce consistent spacing inside braces
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export interface ObjectCurlySpacingRule {
  /**
   * Enforce consistent spacing inside braces
   *
   * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
   */
  'vue/object-curly-spacing': ObjectCurlySpacingRuleConfig;
}
