import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoSelfAssignOption {
  props?: boolean;
}

/**
 * Options.
 */
export type NoSelfAssignOptions = [NoSelfAssignOption?];

/**
 * Disallow assignments where both sides are exactly the same.
 *
 * @see [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)
 */
export type NoSelfAssignRuleConfig = RuleConfig<NoSelfAssignOptions>;

/**
 * Disallow assignments where both sides are exactly the same.
 *
 * @see [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)
 */
export interface NoSelfAssignRule {
  /**
   * Disallow assignments where both sides are exactly the same.
   *
   * @see [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)
   */
  'no-self-assign': NoSelfAssignRuleConfig;
}
