import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxSwitchCasesOption = number;

/**
 * Options.
 */
export type MaxSwitchCasesOptions = [MaxSwitchCasesOption?];

/**
 * "switch" statements should not have too many "case" clauses.
 *
 * @see [max-switch-cases](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md)
 */
export type MaxSwitchCasesRuleConfig = RuleConfig<MaxSwitchCasesOptions>;

/**
 * "switch" statements should not have too many "case" clauses.
 *
 * @see [max-switch-cases](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md)
 */
export interface MaxSwitchCasesRule {
  /**
   * "switch" statements should not have too many "case" clauses.
   *
   * @see [max-switch-cases](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md)
   */
  'sonarjs/max-switch-cases': MaxSwitchCasesRuleConfig;
}
