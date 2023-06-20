import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused private class members.
 *
 * @see [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
 */
export type NoUnusedPrivateClassMembersRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused private class members.
 *
 * @see [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
 */
export interface NoUnusedPrivateClassMembersRule {
  /**
   * Disallow unused private class members.
   *
   * @see [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
   */
  'no-unused-private-class-members': NoUnusedPrivateClassMembersRuleConfig;
}
