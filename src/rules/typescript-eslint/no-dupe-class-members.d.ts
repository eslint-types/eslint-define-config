import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow duplicate class members.
 *
 * @see [no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)
 */
export type NoDupeClassMembersRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate class members.
 *
 * @see [no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)
 */
export interface NoDupeClassMembersRule {
  /**
   * Disallow duplicate class members.
   *
   * @see [no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)
   */
  '@typescript-eslint/no-dupe-class-members': NoDupeClassMembersRuleConfig;
}
