import type { RuleConfig } from '../rule-config';

/**
 * Enforce using function types instead of interfaces with call signatures.
 *
 * @see [prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)
 */
export type PreferFunctionTypeRuleConfig = RuleConfig<[]>;

/**
 * Enforce using function types instead of interfaces with call signatures.
 *
 * @see [prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)
 */
export interface PreferFunctionTypeRule {
  /**
   * Enforce using function types instead of interfaces with call signatures.
   *
   * @see [prefer-function-type](https://typescript-eslint.io/rules/prefer-function-type)
   */
  '@typescript-eslint/prefer-function-type': PreferFunctionTypeRuleConfig;
}
