import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireThrowsOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  exemptedBy?: string[];
}

/**
 * Options.
 */
export type RequireThrowsOptions = [RequireThrowsOption?];

/**
 * Requires that throw statements are documented.
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws)
 */
export type RequireThrowsRuleConfig = RuleConfig<RequireThrowsOptions>;

/**
 * Requires that throw statements are documented.
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws)
 */
export interface RequireThrowsRule {
  /**
   * Requires that throw statements are documented.
   *
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-throws)
   */
  'jsdoc/require-throws': RequireThrowsRuleConfig;
}
