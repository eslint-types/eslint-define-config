import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferReadonlyParameterTypesOption {
  checkParameterProperties?: boolean;
  ignoreInferredTypes?: boolean;
  treatMethodsAsReadonly?: boolean;
}

/**
 * Options.
 */
export type PreferReadonlyParameterTypesOptions = [PreferReadonlyParameterTypesOption?];

/**
 * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
 *
 * @see [prefer-readonly-parameter-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md)
 */
export type PreferReadonlyParameterTypesRuleConfig = RuleConfig<PreferReadonlyParameterTypesOptions>;

/**
 * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
 *
 * @see [prefer-readonly-parameter-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md)
 */
export interface PreferReadonlyParameterTypesRule {
  /**
   * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
   *
   * @see [prefer-readonly-parameter-types](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md)
   */
  '@typescript-eslint/prefer-readonly-parameter-types': PreferReadonlyParameterTypesRuleConfig;
}
