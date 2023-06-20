import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnreachableLoopOption {
  ignore?: (
    | 'WhileStatement'
    | 'DoWhileStatement'
    | 'ForStatement'
    | 'ForInStatement'
    | 'ForOfStatement'
  )[];
}

/**
 * Options.
 */
export type NoUnreachableLoopOptions = [NoUnreachableLoopOption?];

/**
 * Disallow loops with a body that allows only one iteration.
 *
 * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
 */
export type NoUnreachableLoopRuleConfig = RuleConfig<NoUnreachableLoopOptions>;

/**
 * Disallow loops with a body that allows only one iteration.
 *
 * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
 */
export interface NoUnreachableLoopRule {
  /**
   * Disallow loops with a body that allows only one iteration.
   *
   * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
   */
  'no-unreachable-loop': NoUnreachableLoopRuleConfig;
}
