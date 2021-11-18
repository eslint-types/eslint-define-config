import type { RuleConfig } from '../rule-config';

/**
 * Disallow function declarations that contain unsafe references inside loop statements.
 *
 * @see [no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-loop-func.md)
 */
export type NoLoopFuncRuleConfig = RuleConfig<[]>;

/**
 * Disallow function declarations that contain unsafe references inside loop statements.
 *
 * @see [no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-loop-func.md)
 */
export interface NoLoopFuncRule {
  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * @see [no-loop-func](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-loop-func.md)
   */
  '@typescript-eslint/no-loop-func': NoLoopFuncRuleConfig;
}
