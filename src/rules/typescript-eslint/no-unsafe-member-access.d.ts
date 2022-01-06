import type { RuleConfig } from '../rule-config';

/**
 * Disallows member access on any typed variables.
 *
 * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
 */
export type NoUnsafeMemberAccessRuleConfig = RuleConfig<[]>;

/**
 * Disallows member access on any typed variables.
 *
 * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
 */
export interface NoUnsafeMemberAccessRule {
  /**
   * Disallows member access on any typed variables.
   *
   * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
   */
  '@typescript-eslint/no-unsafe-member-access': NoUnsafeMemberAccessRuleConfig;
}
