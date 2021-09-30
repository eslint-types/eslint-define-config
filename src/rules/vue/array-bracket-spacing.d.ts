import type { RuleConfig } from '../rule-config';

/**
 * Enforce consistent spacing inside array brackets
 *
 * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
 */
export type ArrayBracketSpacingRuleConfig = RuleConfig<[]>;

/**
 * Enforce consistent spacing inside array brackets
 *
 * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
 */
export interface ArrayBracketSpacingRule {
  /**
   * Enforce consistent spacing inside array brackets
   *
   * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
   */
  'vue/array-bracket-spacing': ArrayBracketSpacingRuleConfig;
}
