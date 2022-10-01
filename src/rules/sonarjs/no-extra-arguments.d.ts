import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoExtraArgumentsOption = 'sonar-runtime';

/**
 * Options.
 */
export type NoExtraArgumentsOptions = [NoExtraArgumentsOption?];

/**
 * Function calls should not pass extra arguments.
 *
 * @see [no-extra-arguments](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md)
 */
export type NoExtraArgumentsRuleConfig = RuleConfig<NoExtraArgumentsOptions>;

/**
 * Function calls should not pass extra arguments.
 *
 * @see [no-extra-arguments](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md)
 */
export interface NoExtraArgumentsRule {
  /**
   * Function calls should not pass extra arguments.
   *
   * @see [no-extra-arguments](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md)
   */
  'sonarjs/no-extra-arguments': NoExtraArgumentsRuleConfig;
}
