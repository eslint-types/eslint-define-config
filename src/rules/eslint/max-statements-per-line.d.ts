import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxStatementsPerLineOption {
  max?: number;
}

/**
 * Options.
 */
export type MaxStatementsPerLineOptions = [MaxStatementsPerLineOption?];

/**
 * Enforce a maximum number of statements allowed per line.
 *
 * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
 */
export type MaxStatementsPerLineRuleConfig =
  RuleConfig<MaxStatementsPerLineOptions>;

/**
 * Enforce a maximum number of statements allowed per line.
 *
 * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
 */
export interface MaxStatementsPerLineRule {
  /**
   * Enforce a maximum number of statements allowed per line.
   *
   * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
   */
  'max-statements-per-line': MaxStatementsPerLineRuleConfig;
}
