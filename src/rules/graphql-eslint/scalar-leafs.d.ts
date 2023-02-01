import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is valid only if all leaf fields (fields without sub selections) are of scalar or enum types.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [scalar-leafs](https://the-guild.dev/graphql/eslint/rules/scalar-leafs)
 */
export type ScalarLeafsRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is valid only if all leaf fields (fields without sub selections) are of scalar or enum types.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [scalar-leafs](https://the-guild.dev/graphql/eslint/rules/scalar-leafs)
 */
export interface ScalarLeafsRule {
  /**
 * A GraphQL document is valid only if all leaf fields (fields without sub selections) are of scalar or enum types.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [scalar-leafs](https://the-guild.dev/graphql/eslint/rules/scalar-leafs)
 */
  '@graphql-eslint/scalar-leafs': ScalarLeafsRuleConfig;
}
