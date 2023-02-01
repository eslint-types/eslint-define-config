import type { RuleConfig } from '../rule-config';

/**
 * Require all deprecation directives to specify a reason.
 *
 * @see [require-deprecation-reason](https://the-guild.dev/graphql/eslint/rules/require-deprecation-reason)
 */
export type RequireDeprecationReasonRuleConfig = RuleConfig<[]>;

/**
 * Require all deprecation directives to specify a reason.
 *
 * @see [require-deprecation-reason](https://the-guild.dev/graphql/eslint/rules/require-deprecation-reason)
 */
export interface RequireDeprecationReasonRule {
  /**
   * Require all deprecation directives to specify a reason.
   *
   * @see [require-deprecation-reason](https://the-guild.dev/graphql/eslint/rules/require-deprecation-reason)
   */
  '@graphql-eslint/require-deprecation-reason': RequireDeprecationReasonRuleConfig;
}
