import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoElseReturnOption {
  allowElseIf?: boolean;
}

/**
 * Options.
 */
export type NoElseReturnOptions = [NoElseReturnOption?];

/**
 * Disallow `else` blocks after `return` statements in `if` statements.
 *
 * @see [no-else-return](https://eslint.org/docs/latest/rules/no-else-return)
 */
export type NoElseReturnRuleConfig = RuleConfig<NoElseReturnOptions>;

/**
 * Disallow `else` blocks after `return` statements in `if` statements.
 *
 * @see [no-else-return](https://eslint.org/docs/latest/rules/no-else-return)
 */
export interface NoElseReturnRule {
  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   *
   * @see [no-else-return](https://eslint.org/docs/latest/rules/no-else-return)
   */
  'no-else-return': NoElseReturnRuleConfig;
}
