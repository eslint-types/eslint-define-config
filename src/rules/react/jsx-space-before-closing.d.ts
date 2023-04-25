import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxSpaceBeforeClosingOption = 'always' | 'never';

/**
 * Options.
 */
export type JsxSpaceBeforeClosingOptions = [JsxSpaceBeforeClosingOption?];

/**
 * Enforce spacing before closing bracket in JSX.
 *
 * @deprecated
 *
 * @see [jsx-space-before-closing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)
 */
export type JsxSpaceBeforeClosingRuleConfig =
  RuleConfig<JsxSpaceBeforeClosingOptions>;

/**
 * Enforce spacing before closing bracket in JSX.
 *
 * @deprecated
 *
 * @see [jsx-space-before-closing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)
 */
export interface JsxSpaceBeforeClosingRule {
  /**
   * Enforce spacing before closing bracket in JSX.
   *
   * @deprecated
   *
   * @see [jsx-space-before-closing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)
   */
  'react/jsx-space-before-closing': JsxSpaceBeforeClosingRuleConfig;
}
