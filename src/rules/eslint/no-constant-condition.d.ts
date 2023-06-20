import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoConstantConditionOption {
  checkLoops?: boolean;
}

/**
 * Options.
 */
export type NoConstantConditionOptions = [NoConstantConditionOption?];

/**
 * Disallow constant expressions in conditions.
 *
 * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
 */
export type NoConstantConditionRuleConfig =
  RuleConfig<NoConstantConditionOptions>;

/**
 * Disallow constant expressions in conditions.
 *
 * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
 */
export interface NoConstantConditionRule {
  /**
   * Disallow constant expressions in conditions.
   *
   * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
   */
  'no-constant-condition': NoConstantConditionRuleConfig;
}
