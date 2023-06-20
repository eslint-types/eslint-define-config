import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface OperatorLinebreakConfig {
  overrides?: {
    [k: string]: 'after' | 'before' | 'none' | 'ignore';
  };
}

/**
 * Option.
 */
export type OperatorLinebreakOption = 'after' | 'before' | 'none' | null;

/**
 * Options.
 */
export type OperatorLinebreakOptions = [
  OperatorLinebreakOption?,
  OperatorLinebreakConfig?,
];

/**
 * Enforce consistent linebreak style for operators.
 *
 * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
 */
export type OperatorLinebreakRuleConfig = RuleConfig<OperatorLinebreakOptions>;

/**
 * Enforce consistent linebreak style for operators.
 *
 * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
 */
export interface OperatorLinebreakRule {
  /**
   * Enforce consistent linebreak style for operators.
   *
   * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
   */
  'operator-linebreak': OperatorLinebreakRuleConfig;
}
