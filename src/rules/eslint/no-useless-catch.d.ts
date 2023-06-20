import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary `catch` clauses.
 *
 * @see [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)
 */
export type NoUselessCatchRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary `catch` clauses.
 *
 * @see [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)
 */
export interface NoUselessCatchRule {
  /**
   * Disallow unnecessary `catch` clauses.
   *
   * @see [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)
   */
  'no-useless-catch': NoUselessCatchRuleConfig;
}
