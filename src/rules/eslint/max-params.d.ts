import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type MaxParamsOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

/**
 * Options.
 */
export type MaxParamsOptions = [MaxParamsOption?];

/**
 * Enforce a maximum number of parameters in function definitions.
 *
 * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
 */
export type MaxParamsRuleConfig = RuleConfig<MaxParamsOptions>;

/**
 * Enforce a maximum number of parameters in function definitions.
 *
 * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
 */
export interface MaxParamsRule {
  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
   */
  'max-params': MaxParamsRuleConfig;
}
