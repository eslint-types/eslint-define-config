import type { RuleConfig } from '../rule-config';

/**
 * enforce consistent spacing inside array brackets
 *
 * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
 */
export type ArrayBracketSpacingRuleConfig = RuleConfig<[]>;

/**
 * enforce consistent spacing inside array brackets
 *
 * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
 */
export interface ArrayBracketSpacingRule {
  /**
   * enforce consistent spacing inside array brackets
   *
   * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
   */
  'vue/array-bracket-spacing': ArrayBracketSpacingRuleConfig;
}
