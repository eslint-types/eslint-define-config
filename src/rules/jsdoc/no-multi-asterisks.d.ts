import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultiAsterisksOption {
  allowWhitespace?: boolean;
  preventAtEnd?: boolean;
  preventAtMiddleLines?: boolean;
}

/**
 * Options.
 */
export type NoMultiAsterisksOptions = [NoMultiAsterisksOption?];

/**
 *
 * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header)
 */
export type NoMultiAsterisksRuleConfig = RuleConfig<NoMultiAsterisksOptions>;

/**
 *
 * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header)
 */
export interface NoMultiAsterisksRule {
  /**
   *
   * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header)
   */
  'jsdoc/no-multi-asterisks': NoMultiAsterisksRuleConfig;
}
