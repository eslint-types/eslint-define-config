import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SortTypeUnionIntersectionMembersOption {
  checkIntersections?: boolean;
  checkUnions?: boolean;
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
  [k: string]: any;
}

/**
 * Options.
 */
export type SortTypeUnionIntersectionMembersOptions = [
  SortTypeUnionIntersectionMembersOption?,
];

/**
 * Enforces that members of a type union/intersection are sorted alphabetically.
 *
 * @see [sort-type-union-intersection-members](https://typescript-eslint.io/rules/sort-type-union-intersection-members)
 */
export type SortTypeUnionIntersectionMembersRuleConfig =
  RuleConfig<SortTypeUnionIntersectionMembersOptions>;

/**
 * Enforces that members of a type union/intersection are sorted alphabetically.
 *
 * @see [sort-type-union-intersection-members](https://typescript-eslint.io/rules/sort-type-union-intersection-members)
 */
export interface SortTypeUnionIntersectionMembersRule {
  /**
   * Enforces that members of a type union/intersection are sorted alphabetically.
   *
   * @see [sort-type-union-intersection-members](https://typescript-eslint.io/rules/sort-type-union-intersection-members)
   */
  '@typescript-eslint/sort-type-union-intersection-members': SortTypeUnionIntersectionMembersRuleConfig;
}
