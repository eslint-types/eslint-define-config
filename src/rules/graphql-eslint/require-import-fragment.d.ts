import type { RuleConfig } from '../rule-config';

/**
 * Require fragments to be imported via an import expression.
 *
 * @see [require-import-fragment](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-import-fragment.md)
 */
export type RequireImportFragmentRuleConfig = RuleConfig<[]>;

/**
 * Require fragments to be imported via an import expression.
 *
 * @see [require-import-fragment](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-import-fragment.md)
 */
export interface RequireImportFragmentRule {
  /**
   * Require fragments to be imported via an import expression.
   *
   * @see [require-import-fragment](https://github.com/B2o5T/graphql-eslint/blob/master/docs/rules/require-import-fragment.md)
   */
  '@graphql-eslint/require-import-fragment': RequireImportFragmentRuleConfig;
}
