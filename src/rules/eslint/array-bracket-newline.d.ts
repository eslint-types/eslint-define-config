import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ArrayBracketNewlineOption =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

/**
 * Options.
 */
export type ArrayBracketNewlineOptions = [ArrayBracketNewlineOption?];

/**
 * Enforce linebreaks after opening and before closing array brackets.
 *
 * @see [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
 */
export type ArrayBracketNewlineRuleConfig =
  RuleConfig<ArrayBracketNewlineOptions>;

/**
 * Enforce linebreaks after opening and before closing array brackets.
 *
 * @see [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
 */
export interface ArrayBracketNewlineRule {
  /**
   * Enforce linebreaks after opening and before closing array brackets.
   *
   * @see [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
   */
  'array-bracket-newline': ArrayBracketNewlineRuleConfig;
}
