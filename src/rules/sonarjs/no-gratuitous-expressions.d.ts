import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoGratuitousExpressionsOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoGratuitousExpressionsOptions = [NoGratuitousExpressionsOption?];

/**
 * Boolean expressions should not be gratuitous.
 *
 * @see [no-gratuitous-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-gratuitous-expressions.md)
 */
export type NoGratuitousExpressionsRuleConfig =
  RuleConfig<NoGratuitousExpressionsOptions>;

/**
 * Boolean expressions should not be gratuitous.
 *
 * @see [no-gratuitous-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-gratuitous-expressions.md)
 */
export interface NoGratuitousExpressionsRule {
  /**
   * Boolean expressions should not be gratuitous.
   *
   * @see [no-gratuitous-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-gratuitous-expressions.md)
   */
  'sonarjs/no-gratuitous-expressions': NoGratuitousExpressionsRuleConfig;
}
