import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface JsxSortPropsOption {
  callbacksLast?: boolean;
  shorthandFirst?: boolean;
  shorthandLast?: boolean;
  multiline?: 'ignore' | 'first' | 'last';
  ignoreCase?: boolean;
  noSortAlphabetically?: boolean;
  reservedFirst?: any[] | boolean;
  locale?: string;
}

/**
 * Options.
 */
export type JsxSortPropsOptions = [JsxSortPropsOption?];

/**
 * Enforce props alphabetical sorting.
 *
 * @see [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)
 */
export type JsxSortPropsRuleConfig = RuleConfig<JsxSortPropsOptions>;

/**
 * Enforce props alphabetical sorting.
 *
 * @see [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)
 */
export interface JsxSortPropsRule {
  /**
   * Enforce props alphabetical sorting.
   *
   * @see [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)
   */
  'react/jsx-sort-props': JsxSortPropsRuleConfig;
}
