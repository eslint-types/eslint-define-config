import type { RuleConfig } from '../rule-config';

/**
 * Disallows member access on any typed variables.
 *
 * @see [no-unsafe-member-access](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md)
 */
export type NoUnsafeMemberAccessRuleConfig = RuleConfig<[]>;

/**
 * Disallows member access on any typed variables.
 *
 * @see [no-unsafe-member-access](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md)
 */
export interface NoUnsafeMemberAccessRule {
  /**
   * Disallows member access on any typed variables.
   *
   * @see [no-unsafe-member-access](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md)
   */
  '@typescript-eslint/no-unsafe-member-access': NoUnsafeMemberAccessRuleConfig;
}
