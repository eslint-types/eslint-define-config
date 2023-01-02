import type { RuleConfig } from '../rule-config';

/**
 * Boolean literals should not be redundant.
 *
 * @see [no-redundant-boolean](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md)
 */
export type NoRedundantBooleanRuleConfig = RuleConfig<[]>;

/**
 * Boolean literals should not be redundant.
 *
 * @see [no-redundant-boolean](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md)
 */
export interface NoRedundantBooleanRule {
  /**
   * Boolean literals should not be redundant.
   *
   * @see [no-redundant-boolean](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md)
   */
  'sonarjs/no-redundant-boolean': NoRedundantBooleanRuleConfig;
}
