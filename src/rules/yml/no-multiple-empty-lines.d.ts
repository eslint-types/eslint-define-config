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
 * @see [no-multiple-empty-lines](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html)
 */
export type NoMultipleEmptyLinesRuleConfig =
  RuleConfig<NoMultipleEmptyLinesOptions>;

/**
 * Disallow multiple empty lines.
 *
 * @see [no-multiple-empty-lines](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html)
 */
export interface NoMultipleEmptyLinesRule {
  /**
   * Disallow multiple empty lines.
   *
   * @see [no-multiple-empty-lines](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html)
   */
  'yml/no-multiple-empty-lines': NoMultipleEmptyLinesRuleConfig;
}
