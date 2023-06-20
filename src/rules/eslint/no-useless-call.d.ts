import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary calls to `.call()` and `.apply()`.
 *
 * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
 */
export type NoUselessCallRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary calls to `.call()` and `.apply()`.
 *
 * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
 */
export interface NoUselessCallRule {
  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   *
   * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
   */
  'no-useless-call': NoUselessCallRuleConfig;
}
