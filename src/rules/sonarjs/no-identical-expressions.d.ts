import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoIdenticalExpressionsOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoIdenticalExpressionsOptions = [NoIdenticalExpressionsOption?];

/**
 * Identical expressions should not be used on both sides of a binary operator.
 *
 * @see [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)
 */
export type NoIdenticalExpressionsRuleConfig =
  RuleConfig<NoIdenticalExpressionsOptions>;

/**
 * Identical expressions should not be used on both sides of a binary operator.
 *
 * @see [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)
 */
export interface NoIdenticalExpressionsRule {
  /**
   * Identical expressions should not be used on both sides of a binary operator.
   *
   * @see [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)
   */
  'sonarjs/no-identical-expressions': NoIdenticalExpressionsRuleConfig;
}
