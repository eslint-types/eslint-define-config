import type { RuleConfig } from '../rule-config';

/**
 * Disallow members of unions and intersections that do nothing or override type information.
 *
 * @see [no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)
 */
export type NoRedundantTypeConstituentsRuleConfig = RuleConfig<[]>;

/**
 * Disallow members of unions and intersections that do nothing or override type information.
 *
 * @see [no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)
 */
export interface NoRedundantTypeConstituentsRule {
  /**
   * Disallow members of unions and intersections that do nothing or override type information.
   *
   * @see [no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)
   */
  '@typescript-eslint/no-redundant-type-constituents': NoRedundantTypeConstituentsRuleConfig;
}
