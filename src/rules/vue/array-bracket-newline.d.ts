import type { RuleConfig } from '../rule-config';

/**
 * enforce linebreaks after opening and before closing array brackets
 *
 * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
 */
export type ArrayBracketNewlineRuleConfig = RuleConfig<[]>;

/**
 * enforce linebreaks after opening and before closing array brackets
 *
 * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
 */
export interface ArrayBracketNewlineRule {
  /**
   * enforce linebreaks after opening and before closing array brackets
   *
   * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
   */
  'vue/array-bracket-newline': ArrayBracketNewlineRuleConfig;
}
