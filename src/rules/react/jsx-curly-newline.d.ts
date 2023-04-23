import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxCurlyNewlineOption =
  | ('consistent' | 'never')
  | {
      singleline?: 'consistent' | 'require' | 'forbid';
      multiline?: 'consistent' | 'require' | 'forbid';
    };

/**
 * Options.
 */
export type JsxCurlyNewlineOptions = [JsxCurlyNewlineOption?];

/**
 * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
 *
 * @see [jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md)
 */
export type JsxCurlyNewlineRuleConfig = RuleConfig<JsxCurlyNewlineOptions>;

/**
 * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
 *
 * @see [jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md)
 */
export interface JsxCurlyNewlineRule {
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
   *
   * @see [jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md)
   */
  'react/jsx-curly-newline': JsxCurlyNewlineRuleConfig;
}
