import type { RuleConfig } from '../rule-config';

/**
 * Return values from functions without side effects should not be ignored.
 *
 * @see [no-ignored-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md)
 */
export type NoIgnoredReturnRuleConfig = RuleConfig<[]>;

/**
 * Return values from functions without side effects should not be ignored.
 *
 * @see [no-ignored-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md)
 */
export interface NoIgnoredReturnRule {
  /**
   * Return values from functions without side effects should not be ignored.
   *
   * @see [no-ignored-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md)
   */
  'sonarjs/no-ignored-return': NoIgnoredReturnRuleConfig;
}
