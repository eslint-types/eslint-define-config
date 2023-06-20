import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FunctionParenNewlineOption =
  | ('always' | 'never' | 'consistent' | 'multiline' | 'multiline-arguments')
  | {
      minItems?: number;
    };

/**
 * Options.
 */
export type FunctionParenNewlineOptions = [FunctionParenNewlineOption?];

/**
 * Enforce consistent line breaks inside function parentheses.
 *
 * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
 */
export type FunctionParenNewlineRuleConfig =
  RuleConfig<FunctionParenNewlineOptions>;

/**
 * Enforce consistent line breaks inside function parentheses.
 *
 * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
 */
export interface FunctionParenNewlineRule {
  /**
   * Enforce consistent line breaks inside function parentheses.
   *
   * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
   */
  'function-paren-newline': FunctionParenNewlineRuleConfig;
}
