import type { RuleConfig } from '../rule-config';

/**
 * Disallow function declarations that contain unsafe references inside loop statements.
 *
 * @see [no-loop-func](https://typescript-eslint.io/rules/no-loop-func)
 */
export type NoLoopFuncRuleConfig = RuleConfig<[]>;

/**
 * Disallow function declarations that contain unsafe references inside loop statements.
 *
 * @see [no-loop-func](https://typescript-eslint.io/rules/no-loop-func)
 */
export interface NoLoopFuncRule {
  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * @see [no-loop-func](https://typescript-eslint.io/rules/no-loop-func)
   */
  '@typescript-eslint/no-loop-func': NoLoopFuncRuleConfig;
}
