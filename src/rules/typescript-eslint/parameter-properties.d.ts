import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ParameterPropertiesOption {
  /**
   * @minItems 1
   */
  allow?: [
    (
      | 'readonly'
      | 'private'
      | 'protected'
      | 'public'
      | 'private readonly'
      | 'protected readonly'
      | 'public readonly'
    ),
    ...(
      | 'readonly'
      | 'private'
      | 'protected'
      | 'public'
      | 'private readonly'
      | 'protected readonly'
      | 'public readonly'
    )[],
  ];
  prefer?: 'class-property' | 'parameter-property';
}

/**
 * Options.
 */
export type ParameterPropertiesOptions = [ParameterPropertiesOption?];

/**
 * Require or disallow parameter properties in class constructors.
 *
 * @see [parameter-properties](https://typescript-eslint.io/rules/parameter-properties)
 */
export type ParameterPropertiesRuleConfig =
  RuleConfig<ParameterPropertiesOptions>;

/**
 * Require or disallow parameter properties in class constructors.
 *
 * @see [parameter-properties](https://typescript-eslint.io/rules/parameter-properties)
 */
export interface ParameterPropertiesRule {
  /**
   * Require or disallow parameter properties in class constructors.
   *
   * @see [parameter-properties](https://typescript-eslint.io/rules/parameter-properties)
   */
  '@typescript-eslint/parameter-properties': ParameterPropertiesRuleConfig;
}
