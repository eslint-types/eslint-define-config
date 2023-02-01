import type { RuleConfig } from '../rule-config';

/**
 * Disallow case-insensitive enum values duplicates.
 *
 * @see [no-case-insensitive-enum-values-duplicates](https://the-guild.dev/graphql/eslint/rules/no-case-insensitive-enum-values-duplicates)
 */
export type NoCaseInsensitiveEnumValuesDuplicatesRuleConfig = RuleConfig<[]>;

/**
 * Disallow case-insensitive enum values duplicates.
 *
 * @see [no-case-insensitive-enum-values-duplicates](https://the-guild.dev/graphql/eslint/rules/no-case-insensitive-enum-values-duplicates)
 */
export interface NoCaseInsensitiveEnumValuesDuplicatesRule {
  /**
   * Disallow case-insensitive enum values duplicates.
   *
   * @see [no-case-insensitive-enum-values-duplicates](https://the-guild.dev/graphql/eslint/rules/no-case-insensitive-enum-values-duplicates)
   */
  '@graphql-eslint/no-case-insensitive-enum-values-duplicates': NoCaseInsensitiveEnumValuesDuplicatesRuleConfig;
}
