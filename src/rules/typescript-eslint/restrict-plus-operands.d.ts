import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RestrictPlusOperandsOption {
  /**
   * Whether to check compound assignments such as `+=`.
   */
  checkCompoundAssignments?: boolean;
  /**
   * Whether to allow `any` typed values.
   */
  allowAny?: boolean;
}

/**
 * Options.
 */
export type RestrictPlusOperandsOptions = [RestrictPlusOperandsOption?];

/**
 * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
 *
 * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
 */
export type RestrictPlusOperandsRuleConfig =
  RuleConfig<RestrictPlusOperandsOptions>;

/**
 * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
 *
 * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
 */
export interface RestrictPlusOperandsRule {
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
   *
   * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
   */
  '@typescript-eslint/restrict-plus-operands': RestrictPlusOperandsRuleConfig;
}
