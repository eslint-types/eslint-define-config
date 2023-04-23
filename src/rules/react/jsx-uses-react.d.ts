import type { RuleConfig } from '../rule-config';

/**
 * Disallow React to be incorrectly marked as unused.
 *
 * @see [jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)
 */
export type JsxUsesReactRuleConfig = RuleConfig<[]>;

/**
 * Disallow React to be incorrectly marked as unused.
 *
 * @see [jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)
 */
export interface JsxUsesReactRule {
  /**
   * Disallow React to be incorrectly marked as unused.
   *
   * @see [jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)
   */
  'react/jsx-uses-react': JsxUsesReactRuleConfig;
}
