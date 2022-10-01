import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoDuplicatedBranchesOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoDuplicatedBranchesOptions = [NoDuplicatedBranchesOption?];

/**
 * Two branches in a conditional structure should not have exactly the same implementation.
 *
 * @see [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
 */
export type NoDuplicatedBranchesRuleConfig =
  RuleConfig<NoDuplicatedBranchesOptions>;

/**
 * Two branches in a conditional structure should not have exactly the same implementation.
 *
 * @see [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
 */
export interface NoDuplicatedBranchesRule {
  /**
   * Two branches in a conditional structure should not have exactly the same implementation.
   *
   * @see [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
   */
  'sonarjs/no-duplicated-branches': NoDuplicatedBranchesRuleConfig;
}
