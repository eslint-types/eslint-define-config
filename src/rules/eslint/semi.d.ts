import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SemiOption =
  | []
  | ['never']
  | [
      'never',
      {
        /**
         * - `'any'` - Ignores semicolons (or lacking semicolon) at the end of statements if the next line starts with `[`, `(`, `/`, `+`, or `-`.
         * - `'always'` - Requires semicolons at the end of statements if the next line starts with `[`, `(`, `/`, `+`, or `-`.
         * - `'never'` - Disallows semicolons as the end of statements if it doesn't make ASI hazard even if the next line starts with `[`, `(`, `/`, `+`, or `-`.
         */
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      }
    ]
  | []
  | ['always']
  | [
      'always',
      {
        /**
         * Ignores the last semicolon in a block in which its braces (and therefore the content of the block) are in the same line.
         */
        omitLastInOneLineBlock?: boolean;
      }
    ];

/**
 * Options.
 */
export type SemiOptions = [SemiOption?];

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://eslint.org/docs/rules/semi)
 */
export type SemiRuleConfig = RuleConfig<SemiOptions>;

/**
 * Require or disallow semicolons instead of ASI.
 *
 * @see [semi](https://eslint.org/docs/rules/semi)
 */
export interface SemiRule {
  /**
   * Require or disallow semicolons instead of ASI.
   *
   * @see [semi](https://eslint.org/docs/rules/semi)
   */
  semi: SemiRuleConfig;
}
