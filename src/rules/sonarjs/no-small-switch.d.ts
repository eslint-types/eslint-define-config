import type { RuleConfig } from '../rule-config';

/**
 * "switch" statements should have at least 3 "case" clauses.
 *
 * @see [no-small-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md)
 */
export type NoSmallSwitchRuleConfig = RuleConfig<[]>;

/**
 * "switch" statements should have at least 3 "case" clauses.
 *
 * @see [no-small-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md)
 */
export interface NoSmallSwitchRule {
  /**
   * "switch" statements should have at least 3 "case" clauses.
   *
   * @see [no-small-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md)
   */
  'sonarjs/no-small-switch': NoSmallSwitchRuleConfig;
}
