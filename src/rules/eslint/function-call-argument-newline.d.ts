import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type FunctionCallArgumentNewlineOption =
  | 'always'
  | 'never'
  | 'consistent';

/**
 * Options.
 */
export type FunctionCallArgumentNewlineOptions = [
  FunctionCallArgumentNewlineOption?,
];

/**
 * Enforce line breaks between arguments of a function call.
 *
 * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
 */
export type FunctionCallArgumentNewlineRuleConfig =
  RuleConfig<FunctionCallArgumentNewlineOptions>;

/**
 * Enforce line breaks between arguments of a function call.
 *
 * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
 */
export interface FunctionCallArgumentNewlineRule {
  /**
   * Enforce line breaks between arguments of a function call.
   *
   * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
   */
  'function-call-argument-newline': FunctionCallArgumentNewlineRuleConfig;
}
