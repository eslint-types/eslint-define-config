import type { RuleConfig } from '../rule-config';

/**
 * "if ... else if" constructs should end with "else" clauses.
 *
 * @see [elseif-without-else](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/elseif-without-else.md)
 */
export type ElseifWithoutElseRuleConfig = RuleConfig<[]>;

/**
 * "if ... else if" constructs should end with "else" clauses.
 *
 * @see [elseif-without-else](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/elseif-without-else.md)
 */
export interface ElseifWithoutElseRule {
  /**
   * "if ... else if" constructs should end with "else" clauses.
   *
   * @see [elseif-without-else](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/elseif-without-else.md)
   */
  'sonarjs/elseif-without-else': ElseifWithoutElseRuleConfig;
}
