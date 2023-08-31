import type { RuleConfig } from '../rule-config.d.ts';

/**
 * Disallow reassigning exceptions in `catch` clauses.
 *
 * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
 */
export type NoExAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow reassigning exceptions in `catch` clauses.
 *
 * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
 */
export interface NoExAssignRule {
  /**
   * Disallow reassigning exceptions in `catch` clauses.
   *
   * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
   */
  'no-ex-assign': NoExAssignRuleConfig;
}
