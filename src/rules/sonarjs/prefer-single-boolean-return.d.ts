import type { RuleConfig } from '../rule-config';

/**
 * Return of boolean expressions should not be wrapped into an "if-then-else" statement.
 *
 * @see [prefer-single-boolean-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md)
 */
export type PreferSingleBooleanReturnRuleConfig = RuleConfig<[]>;

/**
 * Return of boolean expressions should not be wrapped into an "if-then-else" statement.
 *
 * @see [prefer-single-boolean-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md)
 */
export interface PreferSingleBooleanReturnRule {
  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement.
   *
   * @see [prefer-single-boolean-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md)
   */
  'sonarjs/prefer-single-boolean-return': PreferSingleBooleanReturnRuleConfig;
}
