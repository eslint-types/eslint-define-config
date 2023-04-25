import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface JsxIndentConfig {
  checkAttributes?: boolean;
  indentLogicalExpressions?: boolean;
}

/**
 * Option.
 */
export type JsxIndentOption = 'tab' | number;

/**
 * Options.
 */
export type JsxIndentOptions = [JsxIndentOption?, JsxIndentConfig?];

/**
 * Enforce JSX indentation.
 *
 * @see [jsx-indent](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)
 */
export type JsxIndentRuleConfig = RuleConfig<JsxIndentOptions>;

/**
 * Enforce JSX indentation.
 *
 * @see [jsx-indent](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)
 */
export interface JsxIndentRule {
  /**
   * Enforce JSX indentation.
   *
   * @see [jsx-indent](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)
   */
  'react/jsx-indent': JsxIndentRuleConfig;
}
