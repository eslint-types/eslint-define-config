import type { RuleConfig } from '../rule-config';

/**
 * Boolean checks should not be inverted.
 *
 * @see [no-inverted-boolean-check](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md)
 */
export type NoInvertedBooleanCheckRuleConfig = RuleConfig<[]>;

/**
 * Boolean checks should not be inverted.
 *
 * @see [no-inverted-boolean-check](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md)
 */
export interface NoInvertedBooleanCheckRule {
  /**
   * Boolean checks should not be inverted.
   *
   * @see [no-inverted-boolean-check](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md)
   */
  'sonarjs/no-inverted-boolean-check': NoInvertedBooleanCheckRuleConfig;
}
