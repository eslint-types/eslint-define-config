import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxLinesOption =
  | number
  | {
      max?: number;
      skipComments?: boolean;
      skipBlankLines?: boolean;
    };

/**
 * Options.
 */
export type MaxLinesOptions = [MaxLinesOption?];

/**
 * Enforce a maximum number of lines per file.
 *
 * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
 */
export type MaxLinesRuleConfig = RuleConfig<MaxLinesOptions>;

/**
 * Enforce a maximum number of lines per file.
 *
 * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
 */
export interface MaxLinesRule {
  /**
   * Enforce a maximum number of lines per file.
   *
   * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
   */
  'max-lines': MaxLinesRuleConfig;
}
