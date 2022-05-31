import type { RuleConfig } from '../rule-config';

/**
 * Disallow member access on a value with type `any`.
 *
 * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
 */
export type NoUnsafeMemberAccessRuleConfig = RuleConfig<[]>;

/**
 * Disallow member access on a value with type `any`.
 *
 * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
 */
export interface NoUnsafeMemberAccessRule {
  /**
   * Disallow member access on a value with type `any`.
   *
   * @see [no-unsafe-member-access](https://typescript-eslint.io/rules/no-unsafe-member-access)
   */
  '@typescript-eslint/no-unsafe-member-access': NoUnsafeMemberAccessRuleConfig;
}
