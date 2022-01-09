import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireReturnsCheckOption {
  exemptAsync?: boolean;
  exemptGenerators?: boolean;
  reportMissingReturnForUndefinedTypes?: boolean;
}

/**
 * Options.
 */
export type RequireReturnsCheckOptions = [RequireReturnsCheckOption?];

/**
 * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
 *
 * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
 */
export type RequireReturnsCheckRuleConfig =
  RuleConfig<RequireReturnsCheckOptions>;

/**
 * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
 *
 * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
 */
export interface RequireReturnsCheckRule {
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
   *
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
   */
  'jsdoc/require-returns-check': RequireReturnsCheckRuleConfig;
}
