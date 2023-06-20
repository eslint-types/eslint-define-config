import type { RuleConfig } from '../rule-config';

/**
 * Config.
 */
export interface MaxStatementsConfig {
  ignoreTopLevelFunctions?: boolean;
}

/**
 * Option.
 */
export type MaxStatementsOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

/**
 * Options.
 */
export type MaxStatementsOptions = [MaxStatementsOption?, MaxStatementsConfig?];

/**
 * Enforce a maximum number of statements allowed in function blocks.
 *
 * @see [max-statements](https://eslint.org/docs/latest/rules/max-statements)
 */
export type MaxStatementsRuleConfig = RuleConfig<MaxStatementsOptions>;

/**
 * Enforce a maximum number of statements allowed in function blocks.
 *
 * @see [max-statements](https://eslint.org/docs/latest/rules/max-statements)
 */
export interface MaxStatementsRule {
  /**
   * Enforce a maximum number of statements allowed in function blocks.
   *
   * @see [max-statements](https://eslint.org/docs/latest/rules/max-statements)
   */
  'max-statements': MaxStatementsRuleConfig;
}
