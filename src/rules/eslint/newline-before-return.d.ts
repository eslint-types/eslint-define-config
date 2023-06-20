import type { RuleConfig } from '../rule-config';

/**
 * Require an empty line before `return` statements.
 *
 * @deprecated
 *
 * @see [newline-before-return](https://eslint.org/docs/latest/rules/newline-before-return)
 */
export type NewlineBeforeReturnRuleConfig = RuleConfig<[]>;

/**
 * Require an empty line before `return` statements.
 *
 * @deprecated
 *
 * @see [newline-before-return](https://eslint.org/docs/latest/rules/newline-before-return)
 */
export interface NewlineBeforeReturnRule {
  /**
   * Require an empty line before `return` statements.
   *
   * @deprecated
   *
   * @see [newline-before-return](https://eslint.org/docs/latest/rules/newline-before-return)
   */
  'newline-before-return': NewlineBeforeReturnRuleConfig;
}
