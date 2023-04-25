import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortPropTypesOption {
  requiredFirst?: boolean;
  callbacksLast?: boolean;
  ignoreCase?: boolean;
  noSortAlphabetically?: boolean;
  sortShapeProp?: boolean;
}

/**
 * Options.
 */
export type SortPropTypesOptions = [SortPropTypesOption?];

/**
 * Enforce propTypes declarations alphabetical sorting.
 *
 * @see [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)
 */
export type SortPropTypesRuleConfig = RuleConfig<SortPropTypesOptions>;

/**
 * Enforce propTypes declarations alphabetical sorting.
 *
 * @see [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)
 */
export interface SortPropTypesRule {
  /**
   * Enforce propTypes declarations alphabetical sorting.
   *
   * @see [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)
   */
  'react/sort-prop-types': SortPropTypesRuleConfig;
}
