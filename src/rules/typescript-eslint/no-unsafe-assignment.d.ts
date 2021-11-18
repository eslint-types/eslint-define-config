import type { RuleConfig } from '../rule-config';

/**
 * Disallows assigning any to variables and properties.
 *
 * @see [no-unsafe-assignment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)
 */
export type NoUnsafeAssignmentRuleConfig = RuleConfig<[]>;

/**
 * Disallows assigning any to variables and properties.
 *
 * @see [no-unsafe-assignment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)
 */
export interface NoUnsafeAssignmentRule {
  /**
   * Disallows assigning any to variables and properties.
   *
   * @see [no-unsafe-assignment](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md)
   */
  '@typescript-eslint/no-unsafe-assignment': NoUnsafeAssignmentRuleConfig;
}
