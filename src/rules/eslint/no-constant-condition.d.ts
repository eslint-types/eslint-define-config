import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoConstantConditionOption = {
  /**
   * Setting this option to `false` allows constant expressions in loops.
   *
   * @default true
   *
   * @see [checkLoops](https://eslint.org/docs/rules/no-constant-condition#checkloops)
   */
  checkLoops?: boolean;
};

/**
 * Options.
 */
export type NoConstantConditionOptions = [NoConstantConditionOption?];

/**
 * Disallow constant expressions in conditions.
 *
 * @see [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
 */
export type NoConstantConditionRuleConfig = RuleConfig<NoConstantConditionOptions>;

/**
 * Disallow constant expressions in conditions.
 *
 * @see [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
 */
export interface NoConstantConditionRule {
  /**
   * Disallow constant expressions in conditions.
   *
   * @see [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)
   */
  'no-constant-condition': NoConstantConditionRuleConfig;
}
