import type { RuleConfig } from '../rule-config';

/**
 * Disallows assigning any to variables and properties.
 *
 * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
 */
export type NoUnsafeAssignmentRuleConfig = RuleConfig<[]>;

/**
 * Disallows assigning any to variables and properties.
 *
 * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
 */
export interface NoUnsafeAssignmentRule {
  /**
   * Disallows assigning any to variables and properties.
   *
   * @see [no-unsafe-assignment](https://typescript-eslint.io/rules/no-unsafe-assignment)
   */
  '@typescript-eslint/no-unsafe-assignment': NoUnsafeAssignmentRuleConfig;
}
