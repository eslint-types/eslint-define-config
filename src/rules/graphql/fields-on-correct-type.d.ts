import type { RuleConfig } from '../rule-config';

/**
 * A GraphQL document is only valid if all fields selected are defined by the parent type, or are an allowed meta field such as `__typename`.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fields-on-correct-type](https://the-guild.dev/graphql/eslint/rules/fields-on-correct-type)
 */
export type FieldsOnCorrectTypeRuleConfig = RuleConfig<[]>;

/**
 * A GraphQL document is only valid if all fields selected are defined by the parent type, or are an allowed meta field such as `__typename`.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fields-on-correct-type](https://the-guild.dev/graphql/eslint/rules/fields-on-correct-type)
 */
export interface FieldsOnCorrectTypeRule {
  /**
 * A GraphQL document is only valid if all fields selected are defined by the parent type, or are an allowed meta field such as `__typename`.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fields-on-correct-type](https://the-guild.dev/graphql/eslint/rules/fields-on-correct-type)
 */
  '@graphql-eslint/fields-on-correct-type': FieldsOnCorrectTypeRuleConfig;
}
