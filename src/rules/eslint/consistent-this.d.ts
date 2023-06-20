import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentThisOption = string[];

/**
 * Options.
 */
export type ConsistentThisOptions = ConsistentThisOption;

/**
 * Enforce consistent naming when capturing the current execution context.
 *
 * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
 */
export type ConsistentThisRuleConfig = RuleConfig<ConsistentThisOptions>;

/**
 * Enforce consistent naming when capturing the current execution context.
 *
 * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
 */
export interface ConsistentThisRule {
  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
   */
  'consistent-this': ConsistentThisRuleConfig;
}
