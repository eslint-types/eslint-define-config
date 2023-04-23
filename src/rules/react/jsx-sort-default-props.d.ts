import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxSortDefaultPropsOption {
  ignoreCase?: boolean;
}

/**
 * Options.
 */
export type JsxSortDefaultPropsOptions = [JsxSortDefaultPropsOption?];

/**
 * Enforce defaultProps declarations alphabetical sorting.
 *
 * @deprecated
 *
 * @see [jsx-sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)
 */
export type JsxSortDefaultPropsRuleConfig =
  RuleConfig<JsxSortDefaultPropsOptions>;

/**
 * Enforce defaultProps declarations alphabetical sorting.
 *
 * @deprecated
 *
 * @see [jsx-sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)
 */
export interface JsxSortDefaultPropsRule {
  /**
   * Enforce defaultProps declarations alphabetical sorting.
   *
   * @deprecated
   *
   * @see [jsx-sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)
   */
  'react/jsx-sort-default-props': JsxSortDefaultPropsRuleConfig;
}
