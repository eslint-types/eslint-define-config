import type { RuleConfig } from '../rule-config';

/**
 * Use function types instead of interfaces with call signatures.
 *
 * @see [prefer-function-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-function-type.md)
 */
export type PreferFunctionTypeRuleConfig = RuleConfig<[]>;

/**
 * Use function types instead of interfaces with call signatures.
 *
 * @see [prefer-function-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-function-type.md)
 */
export interface PreferFunctionTypeRule {
  /**
   * Use function types instead of interfaces with call signatures.
   *
   * @see [prefer-function-type](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-function-type.md)
   */
  '@typescript-eslint/prefer-function-type': PreferFunctionTypeRuleConfig;
}
