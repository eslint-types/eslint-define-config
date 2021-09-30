import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type RequireThrowsOption = {
  /**
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  contexts?: any;

  /**
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  exemptedBy?: any;
};

/**
 * Options.
 */
export type RequireThrowsOptions = [RequireThrowsOption?];

/**
 * undefined
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export type RequireThrowsRuleConfig = RuleConfig<RequireThrowsOptions>;

/**
 * undefined
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
 */
export interface RequireThrowsRule {
  /**
   * undefined
   *
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns)
   */
  'jsdoc/require-throws': RequireThrowsRuleConfig;
}
