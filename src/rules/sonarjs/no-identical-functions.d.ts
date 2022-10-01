import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export type NoIdenticalFunctionsConfig = 'sonar-runtime';

/**
 * Option.
 */
export type NoIdenticalFunctionsOption = number;

/**
 * Options.
 */
export type NoIdenticalFunctionsOptions = [
  NoIdenticalFunctionsOption?,
  NoIdenticalFunctionsConfig?,
];

/**
 * Functions should not have identical implementations.
 *
 * @see [no-identical-functions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md)
 */
export type NoIdenticalFunctionsRuleConfig =
  RuleConfig<NoIdenticalFunctionsOptions>;

/**
 * Functions should not have identical implementations.
 *
 * @see [no-identical-functions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md)
 */
export interface NoIdenticalFunctionsRule {
  /**
   * Functions should not have identical implementations.
   *
   * @see [no-identical-functions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md)
   */
  'sonarjs/no-identical-functions': NoIdenticalFunctionsRuleConfig;
}
