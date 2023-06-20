import type { RuleConfig } from '../rule-config';

/**
 * Disallow reassigning `const` variables.
 *
 * @see [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)
 */
export type NoConstAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow reassigning `const` variables.
 *
 * @see [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)
 */
export interface NoConstAssignRule {
  /**
   * Disallow reassigning `const` variables.
   *
   * @see [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)
   */
  'no-const-assign': NoConstAssignRuleConfig;
}
