import type { RuleConfig } from '../rule-config';

/**
 * Disallow reassigning `function` declarations.
 *
 * @see [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)
 */
export type NoFuncAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow reassigning `function` declarations.
 *
 * @see [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)
 */
export interface NoFuncAssignRule {
  /**
   * Disallow reassigning `function` declarations.
   *
   * @see [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)
   */
  'no-func-assign': NoFuncAssignRuleConfig;
}
