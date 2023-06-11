import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortJsxPropsOption {
  type?: 'alphabetical' | 'natural' | 'line-length';
  order?: 'asc' | 'desc';
  'always-on-top'?: any[];
  'ignore-case'?: boolean;
  shorthand?: 'first' | 'last' | 'ignore';
  callback?: 'first' | 'last' | 'ignore';
  multiline?: 'first' | 'last' | 'ignore';
}

/**
 * Options.
 */
export type SortJsxPropsOptions = [SortJsxPropsOption?];

/**
 * Enforce sorted JSX props.
 *
 * @see [sort-jsx-props](https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props)
 */
export type SortJsxPropsRuleConfig = RuleConfig<SortJsxPropsOptions>;

/**
 * Enforce sorted JSX props.
 *
 * @see [sort-jsx-props](https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props)
 */
export interface SortJsxPropsRule {
  /**
   * Enforce sorted JSX props.
   *
   * @see [sort-jsx-props](https://eslint-plugin-perfectionist.azat.io/rules/sort-jsx-props)
   */
  'perfectionist/sort-jsx-props': SortJsxPropsRuleConfig;
}
