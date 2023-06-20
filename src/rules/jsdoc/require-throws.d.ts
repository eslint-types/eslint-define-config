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
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header)
 */
export type RequireThrowsRuleConfig = RuleConfig<RequireThrowsOptions>;

/**
 * Requires that throw statements are documented.
 *
 * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header)
 */
export interface RequireThrowsRule {
  /**
   * Requires that throw statements are documented.
   *
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header)
   */
  'jsdoc/require-throws': RequireThrowsRuleConfig;
}
