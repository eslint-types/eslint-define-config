import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type LinesAroundDirectiveOption =
  | ('always' | 'never')
  | {
      before?: 'always' | 'never';
      after?: 'always' | 'never';
    };

/**
 * Options.
 */
export type LinesAroundDirectiveOptions = [LinesAroundDirectiveOption?];

/**
 * Require or disallow newlines around directives.
 *
 * @deprecated
 *
 * @see [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive)
 */
export type LinesAroundDirectiveRuleConfig =
  RuleConfig<LinesAroundDirectiveOptions>;

/**
 * Require or disallow newlines around directives.
 *
 * @deprecated
 *
 * @see [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive)
 */
export interface LinesAroundDirectiveRule {
  /**
   * Require or disallow newlines around directives.
   *
   * @deprecated
   *
   * @see [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive)
   */
  'lines-around-directive': LinesAroundDirectiveRuleConfig;
}
