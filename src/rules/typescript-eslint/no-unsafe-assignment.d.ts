import type { RuleConfig } from '../rule-config';

/**
 * Disallow assigning a value with type `any` to variables and properties.
 *
 * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
 */
export type NoUnsafeAssignmentRuleConfig = RuleConfig<[]>;

/**
 * Disallow assigning a value with type `any` to variables and properties.
 *
 * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
 */
export interface NoUnsafeAssignmentRule {
  /**
   * Disallow assigning a value with type `any` to variables and properties.
   *
   * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
   */
  '@typescript-eslint/no-unsafe-assignment': NoUnsafeAssignmentRuleConfig;
}
