import type { RuleConfig } from '../rule-config';

/**
 * Always Config.
 */
export interface SemiAlwaysConfig {
  /**
   * Ignores the last semicolon in a block in which its braces (and therefore the content of the block) are in the same line.
   */
  omitLastInOneLineBlock?: boolean;
}

/**
 * Always Options.
 */
export type SemiAlwaysOptions = ['always', SemiAlwaysConfig?];

/**
 * Never Config.
 */
export interface SemiNeverConfig {
  /**
   * - `'any'` - Ignores semicolons (or lacking semicolon) at the end of statements if the next line starts with `[`, `(`, `/`, `+`, or `-`.
   * - `'always'` - Requires semicolons at the end of statements if the next line starts with `[`, `(`, `/`, `+`, or `-`.
   * - `'never'` - Disallows semicolons as the end of statements if it doesn't make ASI hazard even if the next line starts with `[`, `(`, `/`, `+`, or `-`.
   */
  beforeStatementContinuationChars?: 'any' | 'always' | 'never';
}

/**
 * Never Options.
 */
export type SemiNeverOptions = ['never', SemiNeverConfig?];

/**
 * Options.
 */
export type SemiOptions = SemiAlwaysOptions | SemiNeverOptions;

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
