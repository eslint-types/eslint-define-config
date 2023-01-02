import type { RuleConfig } from '../rule-config';

/**
 * Non-existent operators "=+", "=-" and "=!" should not be used.
 *
 * @see [non-existent-operator](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/non-existent-operator.md)
 */
export type NonExistentOperatorRuleConfig = RuleConfig<[]>;

/**
 * Non-existent operators "=+", "=-" and "=!" should not be used.
 *
 * @see [non-existent-operator](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/non-existent-operator.md)
 */
export interface NonExistentOperatorRule {
  /**
   * Non-existent operators "=+", "=-" and "=!" should not be used.
   *
   * @see [non-existent-operator](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/non-existent-operator.md)
   */
  'sonarjs/non-existent-operator': NonExistentOperatorRuleConfig;
}
