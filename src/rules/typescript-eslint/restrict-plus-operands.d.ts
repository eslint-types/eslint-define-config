import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RestrictPlusOperandsOption {
  checkCompoundAssignments?: boolean;
  allowAny?: boolean;
}

/**
 * Options.
 */
export type RestrictPlusOperandsOptions = [RestrictPlusOperandsOption?];

/**
 * When adding two variables, operands must both be of type number or of type string.
 *
 * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
 */
export type RestrictPlusOperandsRuleConfig =
  RuleConfig<RestrictPlusOperandsOptions>;

/**
 * When adding two variables, operands must both be of type number or of type string.
 *
 * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
 */
export interface RestrictPlusOperandsRule {
  /**
   * When adding two variables, operands must both be of type number or of type string.
   *
   * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
   */
  '@typescript-eslint/restrict-plus-operands': RestrictPlusOperandsRuleConfig;
}
