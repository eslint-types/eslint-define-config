import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoMultiAssignOption {
  ignoreNonDeclaration?: boolean;
}

/**
 * Options.
 */
export type NoMultiAssignOptions = [NoMultiAssignOption?];

/**
 * Disallow use of chained assignment expressions.
 *
 * @see [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)
 */
export type NoMultiAssignRuleConfig = RuleConfig<NoMultiAssignOptions>;

/**
 * Disallow use of chained assignment expressions.
 *
 * @see [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)
 */
export interface NoMultiAssignRule {
  /**
   * Disallow use of chained assignment expressions.
   *
   * @see [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)
   */
  'no-multi-assign': NoMultiAssignRuleConfig;
}
