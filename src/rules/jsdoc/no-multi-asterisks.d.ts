import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultiAsterisksOption {
  allowWhitespace?: boolean;
  preventAtEnd?: boolean;
  preventAtMiddleLines?: boolean;
  [k: string]: any;
}

/**
 * Options.
 */
export type NoMultiAsterisksOptions = [NoMultiAsterisksOption?];

/**
 *
 * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-multi-asterisks)
 */
export type NoMultiAsterisksRuleConfig = RuleConfig<NoMultiAsterisksOptions>;

/**
 *
 * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-multi-asterisks)
 */
export interface NoMultiAsterisksRule {
  /**
   *
   * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-multi-asterisks)
   */
  'jsdoc/no-multi-asterisks': NoMultiAsterisksRuleConfig;
}
