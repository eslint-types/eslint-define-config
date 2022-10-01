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
 * Enforce line breaks after opening and before closing array brackets.
 *
 * @see [array-bracket-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html)
 */
export type ArrayBracketNewlineRuleConfig =
  RuleConfig<ArrayBracketNewlineOptions>;

/**
 * Enforce line breaks after opening and before closing array brackets.
 *
 * @see [array-bracket-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html)
 */
export interface ArrayBracketNewlineRule {
  /**
   * Enforce line breaks after opening and before closing array brackets.
   *
   * @see [array-bracket-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html)
   */
  'jsonc/array-bracket-newline': ArrayBracketNewlineRuleConfig;
}
