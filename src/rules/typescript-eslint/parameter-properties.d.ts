import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type Modifier =
  | 'readonly'
  | 'private'
  | 'protected'
  | 'public'
  | 'private readonly'
  | 'protected readonly'
  | 'public readonly';

export interface ParameterPropertiesOption {
  allow?: Modifier[];
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
