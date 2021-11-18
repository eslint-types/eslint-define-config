import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoParameterPropertiesOption {
  allows?: [
    'readonly' | 'private' | 'protected' | 'public' | 'private readonly' | 'protected readonly' | 'public readonly',
    ...(
      | 'readonly'
      | 'private'
      | 'protected'
      | 'public'
      | 'private readonly'
      | 'protected readonly'
      | 'public readonly'
    )[]
  ];
}

/**
 * Options.
 */
export type NoParameterPropertiesOptions = [NoParameterPropertiesOption?];

/**
 * Disallow the use of parameter properties in class constructors.
 *
 * @see [no-parameter-properties](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-parameter-properties.md)
 */
export type NoParameterPropertiesRuleConfig = RuleConfig<NoParameterPropertiesOptions>;

/**
 * Disallow the use of parameter properties in class constructors.
 *
 * @see [no-parameter-properties](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-parameter-properties.md)
 */
export interface NoParameterPropertiesRule {
  /**
   * Disallow the use of parameter properties in class constructors.
   *
   * @see [no-parameter-properties](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/no-parameter-properties.md)
   */
  '@typescript-eslint/no-parameter-properties': NoParameterPropertiesRuleConfig;
}
