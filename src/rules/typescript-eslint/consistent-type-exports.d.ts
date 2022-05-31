import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentTypeExportsOption {
  fixMixedExportsWithInlineTypeSpecifier?: boolean;
}

/**
 * Options.
 */
export type ConsistentTypeExportsOptions = [ConsistentTypeExportsOption?];

/**
 * Enforce consistent usage of type exports.
 *
 * @see [consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)
 */
export type ConsistentTypeExportsRuleConfig =
  RuleConfig<ConsistentTypeExportsOptions>;

/**
 * Enforce consistent usage of type exports.
 *
 * @see [consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)
 */
export interface ConsistentTypeExportsRule {
  /**
   * Enforce consistent usage of type exports.
   *
   * @see [consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)
   */
  '@typescript-eslint/consistent-type-exports': ConsistentTypeExportsRuleConfig;
}
