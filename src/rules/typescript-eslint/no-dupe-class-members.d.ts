import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate class members.
 *
 * @see [no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)
 */
export type NoDupeClassMembersRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate class members.
 *
 * @see [no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)
 */
export interface NoDupeClassMembersRule {
  /**
   * Disallow duplicate class members.
   *
   * @see [no-dupe-class-members](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-dupe-class-members.md)
   */
  '@typescript-eslint/no-dupe-class-members': NoDupeClassMembersRuleConfig;
}
