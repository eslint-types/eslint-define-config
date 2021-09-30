import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent spacing inside braces
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export type ObjectCurlySpacingRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent spacing inside braces
 *
 * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
 */
export interface ObjectCurlySpacingRule {
  /**
   * enforce consistent spacing inside braces
   *
   * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
   */
  'vue/object-curly-spacing': ObjectCurlySpacingRuleConfig;
}
