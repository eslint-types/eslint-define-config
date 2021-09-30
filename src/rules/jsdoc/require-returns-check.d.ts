import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireReturnsCheckOption = {
  /**
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
   */
  exemptAsync?: boolean;

  /**
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
   */
  exemptGenerators?: boolean;

  /**
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
   */
  reportMissingReturnForUndefinedTypes?: boolean;
};

/**
 * Options.
 */
export type RequireReturnsCheckOptions = [RequireReturnsCheckOption?];

/**
 * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
 *
 * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check)
 */
export type RequireReturnsCheckRuleConfig = RuleConfig<RequireReturnsCheckOptions>;

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
