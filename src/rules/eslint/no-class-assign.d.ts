import type { RuleConfig } from '../rule-config';

/**
 * Disallow reassigning class members.
 *
 * @see [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)
 */
export type NoClassAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow reassigning class members.
 *
 * @see [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)
 */
export interface NoClassAssignRule {
  /**
   * Disallow reassigning class members.
   *
   * @see [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)
   */
  'no-class-assign': NoClassAssignRuleConfig;
}
