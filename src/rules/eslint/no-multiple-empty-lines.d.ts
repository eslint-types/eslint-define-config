import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultipleEmptyLinesOption {
  max: number;
  maxEOF?: number;
  maxBOF?: number;
}

/**
 * Options.
 */
export type NoMultipleEmptyLinesOptions = [NoMultipleEmptyLinesOption?];

/**
 * Disallow multiple empty lines.
 *
 * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
 */
export type NoMultipleEmptyLinesRuleConfig =
  RuleConfig<NoMultipleEmptyLinesOptions>;

/**
 * Disallow multiple empty lines.
 *
 * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
 */
export interface NoMultipleEmptyLinesRule {
  /**
   * Disallow multiple empty lines.
   *
   * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
   */
  'no-multiple-empty-lines': NoMultipleEmptyLinesRuleConfig;
}
