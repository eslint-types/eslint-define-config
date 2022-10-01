import type { RuleConfig } from '../rule-config';

/**
 * "switch" statements should not be nested.
 *
 * @see [no-nested-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-switch.md)
 */
export type NoNestedSwitchRuleConfig = RuleConfig<[]>;

/**
 * "switch" statements should not be nested.
 *
 * @see [no-nested-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-switch.md)
 */
export interface NoNestedSwitchRule {
  /**
   * "switch" statements should not be nested.
   *
   * @see [no-nested-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-switch.md)
   */
  'sonarjs/no-nested-switch': NoNestedSwitchRuleConfig;
}
