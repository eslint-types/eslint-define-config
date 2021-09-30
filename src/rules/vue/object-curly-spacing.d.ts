import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent spacing inside braces
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export type ObjectCurlySpacingRuleConfig = RuleConfig<[]>;

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
