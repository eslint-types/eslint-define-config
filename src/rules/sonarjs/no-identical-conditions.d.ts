import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoIdenticalConditionsOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoIdenticalConditionsOptions = [NoIdenticalConditionsOption?];

/**
 * Related "if-else-if" and "switch-case" statements should not have the same condition.
 *
 * @see [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
 */
export type NoIdenticalConditionsRuleConfig =
  RuleConfig<NoIdenticalConditionsOptions>;

/**
 * Related "if-else-if" and "switch-case" statements should not have the same condition.
 *
 * @see [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
 */
export interface NoIdenticalConditionsRule {
  /**
   * Related "if-else-if" and "switch-case" statements should not have the same condition.
   *
   * @see [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
   */
  'sonarjs/no-identical-conditions': NoIdenticalConditionsRuleConfig;
}
