import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoSameLineConditionalOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoSameLineConditionalOptions = [NoSameLineConditionalOption?];

/**
 * Conditionals should start on new lines.
 *
 * @see [no-same-line-conditional](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md)
 */
export type NoSameLineConditionalRuleConfig =
  RuleConfig<NoSameLineConditionalOptions>;

/**
 * Conditionals should start on new lines.
 *
 * @see [no-same-line-conditional](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md)
 */
export interface NoSameLineConditionalRule {
  /**
   * Conditionals should start on new lines.
   *
   * @see [no-same-line-conditional](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md)
   */
  'sonarjs/no-same-line-conditional': NoSameLineConditionalRuleConfig;
}
