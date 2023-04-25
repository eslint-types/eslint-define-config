import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type JsxIndentPropsOption =
  | ('tab' | 'first')
  | number
  | {
      indentMode?: ('tab' | 'first') | number;
      ignoreTernaryOperator?: boolean;
      [k: string]: any;
    };

/**
 * Options.
 */
export type JsxIndentPropsOptions = [JsxIndentPropsOption?];

/**
 * Enforce props indentation in JSX.
 *
 * @see [jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)
 */
export type JsxIndentPropsRuleConfig = RuleConfig<JsxIndentPropsOptions>;

/**
 * Enforce props indentation in JSX.
 *
 * @see [jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)
 */
export interface JsxIndentPropsRule {
  /**
   * Enforce props indentation in JSX.
   *
   * @see [jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)
   */
  'react/jsx-indent-props': JsxIndentPropsRuleConfig;
}
