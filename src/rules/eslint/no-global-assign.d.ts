import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoGlobalAssignOption {
  exceptions?: string[];
}

/**
 * Options.
 */
export type NoGlobalAssignOptions = [NoGlobalAssignOption?];

/**
 * Disallow assignments to native objects or read-only global variables.
 *
 * @see [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)
 */
export type NoGlobalAssignRuleConfig = RuleConfig<NoGlobalAssignOptions>;

/**
 * Disallow assignments to native objects or read-only global variables.
 *
 * @see [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)
 */
export interface NoGlobalAssignRule {
  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * @see [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)
   */
  'no-global-assign': NoGlobalAssignRuleConfig;
}
