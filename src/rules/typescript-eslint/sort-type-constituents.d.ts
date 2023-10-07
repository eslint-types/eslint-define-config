import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortTypeConstituentsOption {
  /**
   * Whether to check intersection types.
   */
  checkIntersections?: boolean;
  /**
   * Whether to check union types.
   */
  checkUnions?: boolean;
  /**
   * Ordering of the groups.
   */
  groupOrder?: (
    | 'conditional'
    | 'function'
    | 'import'
    | 'intersection'
    | 'keyword'
    | 'nullish'
    | 'literal'
    | 'named'
    | 'object'
    | 'operator'
    | 'tuple'
    | 'union'
  )[];
}

/**
 * Options.
 */
export type SortTypeConstituentsOptions = [SortTypeConstituentsOption?];

/**
 * Enforce constituents of a type union/intersection to be sorted alphabetically.
 *
 * @see [sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents)
 */
export type SortTypeConstituentsRuleConfig =
  RuleConfig<SortTypeConstituentsOptions>;

/**
 * Enforce constituents of a type union/intersection to be sorted alphabetically.
 *
 * @see [sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents)
 */
export interface SortTypeConstituentsRule {
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically.
   *
   * @see [sort-type-constituents](https://typescript-eslint.io/rules/sort-type-constituents)
   */
  '@typescript-eslint/sort-type-constituents': SortTypeConstituentsRuleConfig;
}
