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
export type PreferReadonlyParameterTypesOptions = [
  PreferReadonlyParameterTypesOption?,
];

/**
 * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
 *
 * @see [prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)
 */
export type PreferReadonlyParameterTypesRuleConfig =
  RuleConfig<PreferReadonlyParameterTypesOptions>;

/**
 * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
 *
 * @see [prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)
 */
export interface PreferReadonlyParameterTypesRule {
  /**
   * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
   *
   * @see [prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)
   */
  '@typescript-eslint/prefer-readonly-parameter-types': PreferReadonlyParameterTypesRuleConfig;
}
