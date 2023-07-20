import type { RuleConfig } from '../rule-config';

/**
 * Require fragments to be imported via an import expression.
 *
 * @see [require-import-fragment](https://the-guild.dev/graphql/eslint/rules/require-import-fragment)
 */
export type RequireImportFragmentRuleConfig = RuleConfig<[]>;

/**
 * Require fragments to be imported via an import expression.
 *
 * @see [require-import-fragment](https://the-guild.dev/graphql/eslint/rules/require-import-fragment)
 */
export interface RequireImportFragmentRule {
  /**
   * Require fragments to be imported via an import expression.
   *
   * @see [require-import-fragment](https://the-guild.dev/graphql/eslint/rules/require-import-fragment)
   */
  '@graphql-eslint/require-import-fragment': RequireImportFragmentRuleConfig;
}
