import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireThrowsOption = {
  contexts?: any[];
  exemptedBy?: any[];
};

/**
 * Options.
 */
export type RequireThrowsOptions = [RequireThrowsOption?];

/**
 *
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export type RequireThrowsRuleConfig = RuleConfig<RequireThrowsOptions>;

/**
 *
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export interface RequireThrowsRule {
  /**
   *
   *
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  'jsdoc/require-throws': RequireThrowsRuleConfig;
}
