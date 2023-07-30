import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxFirstPropNewLineOption =
  | 'always'
  | 'never'
  | 'multiline'
  | 'multiline-multiprop'
  | 'multiprop';

/**
 * Options.
 */
export type JsxFirstPropNewLineOptions = [JsxFirstPropNewLineOption?];

/**
 * Enforce proper position of the first property in JSX.
 *
 * @see [jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)
 */
export type JsxFirstPropNewLineRuleConfig =
  RuleConfig<JsxFirstPropNewLineOptions>;

/**
 * Enforce proper position of the first property in JSX.
 *
 * @see [jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)
 */
export interface JsxFirstPropNewLineRule {
  /**
   * Enforce proper position of the first property in JSX.
   *
   * @see [jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)
   */
  'react/jsx-first-prop-new-line': JsxFirstPropNewLineRuleConfig;
}
