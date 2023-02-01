import type { RuleConfig } from '../rule-config';

/**
 * Requires to use `"""` or `"` for adding a GraphQL description instead of `#`.
Allows to use hashtag for comments, as long as it's not attached to an AST definition.
 *  
 * @see [no-hashtag-description](https://the-guild.dev/graphql/eslint/rules/no-hashtag-description)
 */
export type NoHashtagDescriptionRuleConfig = RuleConfig<[]>;

/**
 * Requires to use `"""` or `"` for adding a GraphQL description instead of `#`.
Allows to use hashtag for comments, as long as it's not attached to an AST definition.
 *  
 * @see [no-hashtag-description](https://the-guild.dev/graphql/eslint/rules/no-hashtag-description)
 */
export interface NoHashtagDescriptionRule {
  /**
 * Requires to use `"""` or `"` for adding a GraphQL description instead of `#`.
Allows to use hashtag for comments, as long as it's not attached to an AST definition.
 *  
 * @see [no-hashtag-description](https://the-guild.dev/graphql/eslint/rules/no-hashtag-description)
 */
  '@graphql-eslint/no-hashtag-description': NoHashtagDescriptionRuleConfig;
}
