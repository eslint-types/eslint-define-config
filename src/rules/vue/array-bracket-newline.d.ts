import type { RuleConfig } from '../rule-config';

/**
 * Enforce linebreaks after opening and before closing array brackets
 *
 * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
 */
export type ArrayBracketNewlineRuleConfig = RuleConfig<[]>;

/**
 * Enforce linebreaks after opening and before closing array brackets
 *
 * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
 */
export interface ArrayBracketNewlineRule {
  /**
   * Enforce linebreaks after opening and before closing array brackets
   *
   * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
   */
  'vue/array-bracket-newline': ArrayBracketNewlineRuleConfig;
}
