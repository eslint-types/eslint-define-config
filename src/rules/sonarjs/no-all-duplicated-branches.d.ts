import type { RuleConfig } from '../rule-config';

/**
 * All branches in a conditional structure should not have exactly the same implementation.
 *
 * @see [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
 */
export type NoAllDuplicatedBranchesRuleConfig = RuleConfig<[]>;

/**
 * All branches in a conditional structure should not have exactly the same implementation.
 *
 * @see [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
 */
export interface NoAllDuplicatedBranchesRule {
  /**
   * All branches in a conditional structure should not have exactly the same implementation.
   *
   * @see [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
   */
  'sonarjs/no-all-duplicated-branches': NoAllDuplicatedBranchesRuleConfig;
}
