import type { RuleConfig } from '../rule-config';

/**
 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
 *
 * @see [jsx-child-element-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)
 */
export type JsxChildElementSpacingRuleConfig = RuleConfig<[]>;

/**
 * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
 *
 * @see [jsx-child-element-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)
 */
export interface JsxChildElementSpacingRule {
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * @see [jsx-child-element-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)
   */
  'react/jsx-child-element-spacing': JsxChildElementSpacingRuleConfig;
}
