import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedSyntaxOption = {
  /**
   * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax)
   */
  contexts?: any;
};

/**
 * Options.
 */
export type NoRestrictedSyntaxOptions = [NoRestrictedSyntaxOption?];

/**
 * Reports when certain comment structures are present.
 *
 * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax)
 */
export type NoRestrictedSyntaxRuleConfig = RuleConfig<NoRestrictedSyntaxOptions>;

/**
 * Reports when certain comment structures are present.
 *
 * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax)
 */
export interface NoRestrictedSyntaxRule {
  /**
   * Reports when certain comment structures are present.
   *
   * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-restricted-syntax)
   */
  'jsdoc/no-restricted-syntax': NoRestrictedSyntaxRuleConfig;
}
