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
export type SortTypeUnionIntersectionMembersOptions = [SortTypeUnionIntersectionMembersOption?];

/**
 * Enforces that members of a type union/intersection are sorted alphabetically.
 *
 * @see [sort-type-union-intersection-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md)
 */
export type SortTypeUnionIntersectionMembersRuleConfig = RuleConfig<SortTypeUnionIntersectionMembersOptions>;

/**
 * Enforces that members of a type union/intersection are sorted alphabetically.
 *
 * @see [sort-type-union-intersection-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md)
 */
export interface SortTypeUnionIntersectionMembersRule {
  /**
   * Enforces that members of a type union/intersection are sorted alphabetically.
   *
   * @see [sort-type-union-intersection-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md)
   */
  '@typescript-eslint/sort-type-union-intersection-members': SortTypeUnionIntersectionMembersRuleConfig;
}
