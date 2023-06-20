import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoCondAssignOption = 'except-parens' | 'always';

/**
 * Options.
 */
export type NoCondAssignOptions = [NoCondAssignOption?];

/**
 * Disallow assignment operators in conditional expressions.
 *
 * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
 */
export type NoCondAssignRuleConfig = RuleConfig<NoCondAssignOptions>;

/**
 * Disallow assignment operators in conditional expressions.
 *
 * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
 */
export interface NoCondAssignRule {
  /**
   * Disallow assignment operators in conditional expressions.
   *
   * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
   */
  'no-cond-assign': NoCondAssignRuleConfig;
}
