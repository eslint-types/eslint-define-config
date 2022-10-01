import type { RuleConfig } from '../rule-config';

/**
 * Local variables should not be declared and then immediately returned or thrown.
 *
 * @see [prefer-immediate-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md)
 */
export type PreferImmediateReturnRuleConfig = RuleConfig<[]>;

/**
 * Local variables should not be declared and then immediately returned or thrown.
 *
 * @see [prefer-immediate-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md)
 */
export interface PreferImmediateReturnRule {
  /**
   * Local variables should not be declared and then immediately returned or thrown.
   *
   * @see [prefer-immediate-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md)
   */
  'sonarjs/prefer-immediate-return': PreferImmediateReturnRuleConfig;
}
