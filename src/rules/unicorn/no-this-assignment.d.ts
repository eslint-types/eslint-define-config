import type { RuleConfig } from '../rule-config';

/**
 * Disallow assigning `this` to a variable.
 *
 * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-this-assignment.md)
 */
export type NoThisAssignmentRuleConfig = RuleConfig<[]>;

/**
 * Disallow assigning `this` to a variable.
 *
 * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-this-assignment.md)
 */
export interface NoThisAssignmentRule {
  /**
   * Disallow assigning `this` to a variable.
   *
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': NoThisAssignmentRuleConfig;
}
