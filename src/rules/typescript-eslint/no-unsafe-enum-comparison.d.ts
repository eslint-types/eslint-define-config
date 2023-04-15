import type { RuleConfig } from '../rule-config';

/**
 * Disallow comparing an enum value with a non-enum value.
 *
 * @see [no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)
 */
export type NoUnsafeEnumComparisonRuleConfig = RuleConfig<[]>;

/**
 * Disallow comparing an enum value with a non-enum value.
 *
 * @see [no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)
 */
export interface NoUnsafeEnumComparisonRule {
  /**
   * Disallow comparing an enum value with a non-enum value.
   *
   * @see [no-unsafe-enum-comparison](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)
   */
  '@typescript-eslint/no-unsafe-enum-comparison': NoUnsafeEnumComparisonRuleConfig;
}
