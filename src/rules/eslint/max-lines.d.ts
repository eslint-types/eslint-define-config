import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxLinesOption =
  | number
  | {
      /**
       * Enforces a maximum number of lines in a file.
       *
       * @default 300
       *
       * @see [max](https://eslint.org/docs/rules/max-lines#code)
       */
      max?: number;
      /**
       * Ignore lines containing just comments.
       *
       * @default true
       *
       * @see [skipComments](https://eslint.org/docs/rules/max-lines#skipcomments)
       */
      skipComments?: boolean;
      /**
       * Ignore lines made up purely of whitespace.
       *
       * @default true
       *
       * @see [skipBlankLines](https://eslint.org/docs/rules/max-lines#skipblanklines)
       */
      skipBlankLines?: boolean;
    };

/**
 * Options.
 */
export type MaxLinesOptions = [MaxLinesOption?];

/**
 * Enforce a maximum number of lines per file.
 *
 * @see [max-lines](https://eslint.org/docs/rules/max-lines)
 */
export type MaxLinesRuleConfig = RuleConfig<MaxLinesOptions>;

/**
 * Enforce a maximum number of lines per file.
 *
 * @see [max-lines](https://eslint.org/docs/rules/max-lines)
 */
export interface MaxLinesRule {
  /**
   * Enforce a maximum number of lines per file.
   *
   * @see [max-lines](https://eslint.org/docs/rules/max-lines)
   */
  'max-lines': MaxLinesRuleConfig;
}
