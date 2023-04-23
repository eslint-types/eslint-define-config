import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortDefaultPropsOption {
  ignoreCase?: boolean;
}

/**
 * Options.
 */
export type SortDefaultPropsOptions = [SortDefaultPropsOption?];

/**
 * Enforce defaultProps declarations alphabetical sorting.
 *
 * @see [sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md)
 */
export type SortDefaultPropsRuleConfig = RuleConfig<SortDefaultPropsOptions>;

/**
 * Enforce defaultProps declarations alphabetical sorting.
 *
 * @see [sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md)
 */
export interface SortDefaultPropsRule {
  /**
   * Enforce defaultProps declarations alphabetical sorting.
   *
   * @see [sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md)
   */
  'react/sort-default-props': SortDefaultPropsRuleConfig;
}
