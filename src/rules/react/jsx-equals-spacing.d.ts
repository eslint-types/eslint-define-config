import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxEqualsSpacingOption = 'always' | 'never';

/**
 * Options.
 */
export type JsxEqualsSpacingOptions = [JsxEqualsSpacingOption?];

/**
 * Enforce or disallow spaces around equal signs in JSX attributes.
 *
 * @see [jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)
 */
export type JsxEqualsSpacingRuleConfig = RuleConfig<JsxEqualsSpacingOptions>;

/**
 * Enforce or disallow spaces around equal signs in JSX attributes.
 *
 * @see [jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)
 */
export interface JsxEqualsSpacingRule {
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes.
   *
   * @see [jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)
   */
  'react/jsx-equals-spacing': JsxEqualsSpacingRuleConfig;
}
