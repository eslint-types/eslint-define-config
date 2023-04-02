import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDuplicateTypeConstituentsOption {
  ignoreIntersections?: boolean;
  ignoreUnions?: boolean;
}

/**
 * Options.
 */
export type NoDuplicateTypeConstituentsOptions = [
  NoDuplicateTypeConstituentsOption?,
];

/**
 * Disallow duplicate constituents of union or intersection types.
 *
 * @see [no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)
 */
export type NoDuplicateTypeConstituentsRuleConfig =
  RuleConfig<NoDuplicateTypeConstituentsOptions>;

/**
 * Disallow duplicate constituents of union or intersection types.
 *
 * @see [no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)
 */
export interface NoDuplicateTypeConstituentsRule {
  /**
   * Disallow duplicate constituents of union or intersection types.
   *
   * @see [no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)
   */
  '@typescript-eslint/no-duplicate-type-constituents': NoDuplicateTypeConstituentsRuleConfig;
}
