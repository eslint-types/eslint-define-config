import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
/**
 * @maxItems 1
 */
export type RequireDeprecationDateOption =
  | []
  | [
      {
        argumentName?: string;
      },
    ];

/**
 * Options.
 */
export type RequireDeprecationDateOptions = RequireDeprecationDateOption;

/**
 * Require deletion date on `@deprecated` directive. Suggest removing deprecated things after deprecated date.
 *
 * @see [require-deprecation-date](https://the-guild.dev/graphql/eslint/rules/require-deprecation-date)
 */
export type RequireDeprecationDateRuleConfig =
  RuleConfig<RequireDeprecationDateOptions>;

/**
 * Require deletion date on `@deprecated` directive. Suggest removing deprecated things after deprecated date.
 *
 * @see [require-deprecation-date](https://the-guild.dev/graphql/eslint/rules/require-deprecation-date)
 */
export interface RequireDeprecationDateRule {
  /**
   * Require deletion date on `@deprecated` directive. Suggest removing deprecated things after deprecated date.
   *
   * @see [require-deprecation-date](https://the-guild.dev/graphql/eslint/rules/require-deprecation-date)
   */
  '@graphql-eslint/require-deprecation-date': RequireDeprecationDateRuleConfig;
}
