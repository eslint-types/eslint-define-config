import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMissingSyntaxOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
        message?: string;
        minimum?: number;
      }
  )[];
}

/**
 * Options.
 */
export type NoMissingSyntaxOptions = [NoMissingSyntaxOption?];

/**
 * Reports when certain comment structures are always expected.
 *
 * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-missing-syntax)
 */
export type NoMissingSyntaxRuleConfig = RuleConfig<NoMissingSyntaxOptions>;

/**
 * Reports when certain comment structures are always expected.
 *
 * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-missing-syntax)
 */
export interface NoMissingSyntaxRule {
  /**
   * Reports when certain comment structures are always expected.
   *
   * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-missing-syntax)
   */
  'jsdoc/no-missing-syntax': NoMissingSyntaxRuleConfig;
}
