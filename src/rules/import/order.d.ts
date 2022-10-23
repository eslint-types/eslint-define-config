import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface OrderOption {
  groups?: any[];
  pathGroupsExcludedImportTypes?: any[];
  pathGroups?: {
    pattern: string;
    patternOptions?: {
      [k: string]: any;
    };
    group:
      | 'builtin'
      | 'external'
      | 'internal'
      | 'unknown'
      | 'parent'
      | 'sibling'
      | 'index'
      | 'object'
      | 'type';
    position?: 'after' | 'before';
    [k: string]: any;
  }[];
  'newlines-between'?:
    | 'ignore'
    | 'always'
    | 'always-and-inside-groups'
    | 'never';
  alphabetize?: {
    caseInsensitive?: boolean;
    order?: 'ignore' | 'asc' | 'desc';
  };
  warnOnUnassignedImports?: boolean;
}

/**
 * Options.
 */
export type OrderOptions = [OrderOption?];

/**
 *
 * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md)
 */
export type OrderRuleConfig = RuleConfig<OrderOptions>;

/**
 *
 * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md)
 */
export interface OrderRule {
  /**
   *
   * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md)
   */
  'import/order': OrderRuleConfig;
}
