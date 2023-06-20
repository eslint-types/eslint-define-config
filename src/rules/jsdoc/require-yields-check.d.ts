import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireYieldsCheckOption {
  checkGeneratorsOnly?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  exemptedBy?: string[];
  next?: boolean;
}

/**
 * Options.
 */
export type RequireYieldsCheckOptions = [RequireYieldsCheckOption?];

/**
 * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
 *
 * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header)
 */
export type RequireYieldsCheckRuleConfig =
  RuleConfig<RequireYieldsCheckOptions>;

/**
 * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
 *
 * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header)
 */
export interface RequireYieldsCheckRule {
  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   *
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header)
   */
  'jsdoc/require-yields-check': RequireYieldsCheckRuleConfig;
}
