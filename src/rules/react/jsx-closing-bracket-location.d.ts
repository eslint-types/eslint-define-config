import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxClosingBracketLocationOption =
  | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
  | {
      location?:
        | 'after-props'
        | 'props-aligned'
        | 'tag-aligned'
        | 'line-aligned';
    }
  | {
      nonEmpty?:
        | 'after-props'
        | 'props-aligned'
        | 'tag-aligned'
        | 'line-aligned'
        | false;
      selfClosing?:
        | 'after-props'
        | 'props-aligned'
        | 'tag-aligned'
        | 'line-aligned'
        | false;
    };

/**
 * Options.
 */
export type JsxClosingBracketLocationOptions = [
  JsxClosingBracketLocationOption?,
];

/**
 * Enforce closing bracket location in JSX.
 *
 * @see [jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)
 */
export type JsxClosingBracketLocationRuleConfig =
  RuleConfig<JsxClosingBracketLocationOptions>;

/**
 * Enforce closing bracket location in JSX.
 *
 * @see [jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)
 */
export interface JsxClosingBracketLocationRule {
  /**
   * Enforce closing bracket location in JSX.
   *
   * @see [jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)
   */
  'react/jsx-closing-bracket-location': JsxClosingBracketLocationRuleConfig;
}
