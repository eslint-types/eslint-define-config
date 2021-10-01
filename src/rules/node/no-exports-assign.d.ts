import type { RuleConfig } from '../rule-config';

/**
 * Disallow the assignment to `exports`.
 *
 * @see [no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-exports-assign.md)
 */
export type NoExportsAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow the assignment to `exports`.
 *
 * @see [no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-exports-assign.md)
 */
export interface NoExportsAssignRule {
  /**
   * Disallow the assignment to `exports`.
   *
   * @see [no-exports-assign](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-exports-assign.md)
   */
  'node/no-exports-assign': NoExportsAssignRuleConfig;
}
