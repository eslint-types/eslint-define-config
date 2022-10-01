import type { RuleConfig } from '../rule-config';

/**
 * Loops with at most one iteration should be refactored.
 *
 * @see [no-one-iteration-loop](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md)
 */
export type NoOneIterationLoopRuleConfig = RuleConfig<[]>;

/**
 * Loops with at most one iteration should be refactored.
 *
 * @see [no-one-iteration-loop](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md)
 */
export interface NoOneIterationLoopRule {
  /**
   * Loops with at most one iteration should be refactored.
   *
   * @see [no-one-iteration-loop](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md)
   */
  'sonarjs/no-one-iteration-loop': NoOneIterationLoopRuleConfig;
}
