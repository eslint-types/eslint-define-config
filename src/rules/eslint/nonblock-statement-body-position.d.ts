import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface NonblockStatementBodyPositionConfig {
  overrides?: {
    if?: 'beside' | 'below' | 'any';
    else?: 'beside' | 'below' | 'any';
    while?: 'beside' | 'below' | 'any';
    do?: 'beside' | 'below' | 'any';
    for?: 'beside' | 'below' | 'any';
  };
}

/**
 * Option.
 */
export type NonblockStatementBodyPositionOption = 'beside' | 'below' | 'any';

/**
 * Options.
 */
export type NonblockStatementBodyPositionOptions = [
  NonblockStatementBodyPositionOption?,
  NonblockStatementBodyPositionConfig?,
];

/**
 * Enforce the location of single-line statements.
 *
 * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
 */
export type NonblockStatementBodyPositionRuleConfig =
  RuleConfig<NonblockStatementBodyPositionOptions>;

/**
 * Enforce the location of single-line statements.
 *
 * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
 */
export interface NonblockStatementBodyPositionRule {
  /**
   * Enforce the location of single-line statements.
   *
   * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
   */
  'nonblock-statement-body-position': NonblockStatementBodyPositionRuleConfig;
}
