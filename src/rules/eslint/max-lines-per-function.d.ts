import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxLinesPerFunctionOption =
  | {
      max?: number;
      skipComments?: boolean;
      skipBlankLines?: boolean;
      IIFEs?: boolean;
    }
  | number;

/**
 * Options.
 */
export type MaxLinesPerFunctionOptions = [MaxLinesPerFunctionOption?];

/**
 * Enforce a maximum number of lines of code in a function.
 *
 * @see [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
 */
export type MaxLinesPerFunctionRuleConfig =
  RuleConfig<MaxLinesPerFunctionOptions>;

/**
 * Enforce a maximum number of lines of code in a function.
 *
 * @see [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
 */
export interface MaxLinesPerFunctionRule {
  /**
   * Enforce a maximum number of lines of code in a function.
   *
   * @see [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
   */
  'max-lines-per-function': MaxLinesPerFunctionRuleConfig;
}
