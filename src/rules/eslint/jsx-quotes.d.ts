import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxQuotesOption = 'prefer-single' | 'prefer-double';

/**
 * Options.
 */
export type JsxQuotesOptions = [JsxQuotesOption?];

/**
 * Enforce the consistent use of either double or single quotes in JSX attributes.
 *
 * @see [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
 */
export type JsxQuotesRuleConfig = RuleConfig<JsxQuotesOptions>;

/**
 * Enforce the consistent use of either double or single quotes in JSX attributes.
 *
 * @see [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
 */
export interface JsxQuotesRule {
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes.
   *
   * @see [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
   */
  'jsx-quotes': JsxQuotesRuleConfig;
}
