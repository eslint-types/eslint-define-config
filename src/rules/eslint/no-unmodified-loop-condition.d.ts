import type { RuleConfig } from '../rule-config';

/**
 * Disallow unmodified loop conditions.
 *
 * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
 */
export type NoUnmodifiedLoopConditionRuleConfig = RuleConfig<[]>;

/**
 * Disallow unmodified loop conditions.
 *
 * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
 */
export interface NoUnmodifiedLoopConditionRule {
  /**
   * Disallow unmodified loop conditions.
   *
   * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
   */
  'no-unmodified-loop-condition': NoUnmodifiedLoopConditionRuleConfig;
}
