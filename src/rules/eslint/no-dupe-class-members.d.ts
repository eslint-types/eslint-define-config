import type { RuleConfig } from '../rule-config';

/**
 * Disallow duplicate class members.
 *
 * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
 */
export type NoDupeClassMembersRuleConfig = RuleConfig<[]>;

/**
 * Disallow duplicate class members.
 *
 * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
 */
export interface NoDupeClassMembersRule {
  /**
   * Disallow duplicate class members.
   *
   * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
   */
  'no-dupe-class-members': NoDupeClassMembersRuleConfig;
}
