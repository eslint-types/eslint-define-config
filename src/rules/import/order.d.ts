import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface OrderOption {
  groups?: any[];
  pathGroupsExcludedImportTypes?: any[];
  distinctGroup?: boolean;
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
  }[];
  'newlines-between'?:
    | 'ignore'
    | 'always'
    | 'always-and-inside-groups'
    | 'never';
  alphabetize?: {
    caseInsensitive?: boolean;
    order?: 'ignore' | 'asc' | 'desc';
    orderImportKind?: 'ignore' | 'asc' | 'desc';
  };
  warnOnUnassignedImports?: boolean;
}

/**
 * Options.
 */
export type OrderOptions = [OrderOption?];

/**
 * Enforce a convention in module import order.
 *
 * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/order.md)
 */
export type OrderRuleConfig = RuleConfig<OrderOptions>;

/**
 * Enforce a convention in module import order.
 *
 * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/order.md)
 */
export interface OrderRule {
  /**
   * Enforce a convention in module import order.
   *
   * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/order.md)
   */
  'import/order': OrderRuleConfig;
}
