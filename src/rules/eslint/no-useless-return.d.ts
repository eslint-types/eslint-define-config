import type { RuleConfig } from '../rule-config';

/**
 * Disallow redundant return statements.
 *
 * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
 */
export type NoUselessReturnRuleConfig = RuleConfig<[]>;

/**
 * Disallow redundant return statements.
 *
 * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
 */
export interface NoUselessReturnRule {
  /**
   * Disallow redundant return statements.
   *
   * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
   */
  'no-useless-return': NoUselessReturnRuleConfig;
}
