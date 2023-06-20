import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoReturnAssignOption = 'except-parens' | 'always';

/**
 * Options.
 */
export type NoReturnAssignOptions = [NoReturnAssignOption?];

/**
 * Disallow assignment operators in `return` statements.
 *
 * @see [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)
 */
export type NoReturnAssignRuleConfig = RuleConfig<NoReturnAssignOptions>;

/**
 * Disallow assignment operators in `return` statements.
 *
 * @see [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)
 */
export interface NoReturnAssignRule {
  /**
   * Disallow assignment operators in `return` statements.
   *
   * @see [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)
   */
  'no-return-assign': NoReturnAssignRuleConfig;
}
