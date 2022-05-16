import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate enum member values.
 *
 * @see [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)
 */
export type NoDuplicateEnumValuesRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate enum member values.
 *
 * @see [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)
 */
export interface NoDuplicateEnumValuesRule {
  /**
   * Disallow duplicate enum member values.
   *
   * @see [no-duplicate-enum-values](https://typescript-eslint.io/rules/no-duplicate-enum-values)
   */
  '@typescript-eslint/no-duplicate-enum-values': NoDuplicateEnumValuesRuleConfig;
}
