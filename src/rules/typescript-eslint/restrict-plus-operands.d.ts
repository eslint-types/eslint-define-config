import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RestrictPlusOperandsOption {
  checkCompoundAssignments?: boolean;
}

/**
 * Options.
 */
export type RestrictPlusOperandsOptions = [RestrictPlusOperandsOption?];

/**
 * When adding two variables, operands must both be of type number or of type string.
 *
 * @see [restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)
 */
export type RestrictPlusOperandsRuleConfig = RuleConfig<RestrictPlusOperandsOptions>;

/**
 * When adding two variables, operands must both be of type number or of type string.
 *
 * @see [restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)
 */
export interface RestrictPlusOperandsRule {
  /**
   * When adding two variables, operands must both be of type number or of type string.
   *
   * @see [restrict-plus-operands](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md)
   */
  '@typescript-eslint/restrict-plus-operands': RestrictPlusOperandsRuleConfig;
}
