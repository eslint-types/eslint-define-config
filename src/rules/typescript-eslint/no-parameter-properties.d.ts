import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoParameterPropertiesOption {
  /**
   * @minItems 1
   */
  allows?: [
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
}

/**
 * Options.
 */
export type NoParameterPropertiesOptions = [NoParameterPropertiesOption?];

/**
 * Disallow the use of parameter properties in class constructors.
 *
 * @deprecated
 *
 * @see [no-parameter-properties](https://typescript-eslint.io/rules/no-parameter-properties)
 */
export type NoParameterPropertiesRuleConfig =
  RuleConfig<NoParameterPropertiesOptions>;

/**
 * Disallow the use of parameter properties in class constructors.
 *
 * @deprecated
 *
 * @see [no-parameter-properties](https://typescript-eslint.io/rules/no-parameter-properties)
 */
export interface NoParameterPropertiesRule {
  /**
   * Disallow the use of parameter properties in class constructors.
   *
   * @deprecated
   *
   * @see [no-parameter-properties](https://typescript-eslint.io/rules/no-parameter-properties)
   */
  '@typescript-eslint/no-parameter-properties': NoParameterPropertiesRuleConfig;
}
