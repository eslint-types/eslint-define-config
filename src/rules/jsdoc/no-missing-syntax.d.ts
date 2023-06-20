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
 * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header)
 */
export type NoMissingSyntaxRuleConfig = RuleConfig<NoMissingSyntaxOptions>;

/**
 * Reports when certain comment structures are always expected.
 *
 * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header)
 */
export interface NoMissingSyntaxRule {
  /**
   * Reports when certain comment structures are always expected.
   *
   * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-missing-syntax': NoMissingSyntaxRuleConfig;
}
