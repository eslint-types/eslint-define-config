import type { RuleConfig } from '../rule-config';

/**
 * Object literal syntax should be used.
 *
 * @see [prefer-object-literal](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md)
 */
export type PreferObjectLiteralRuleConfig = RuleConfig<[]>;

/**
 * Object literal syntax should be used.
 *
 * @see [prefer-object-literal](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md)
 */
export interface PreferObjectLiteralRule {
  /**
   * Object literal syntax should be used.
   *
   * @see [prefer-object-literal](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md)
   */
  'sonarjs/prefer-object-literal': PreferObjectLiteralRuleConfig;
}
