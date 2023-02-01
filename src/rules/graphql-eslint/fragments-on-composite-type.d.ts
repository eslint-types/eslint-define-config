import type { RuleConfig } from '../rule-config';

/**
 * Fragments use a type condition to determine if they apply, since fragments can only be spread into a composite type (object, interface, or union), the type condition must also be a composite type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fragments-on-composite-type](https://the-guild.dev/graphql/eslint/rules/fragments-on-composite-type)
 */
export type FragmentsOnCompositeTypeRuleConfig = RuleConfig<[]>;

/**
 * Fragments use a type condition to determine if they apply, since fragments can only be spread into a composite type (object, interface, or union), the type condition must also be a composite type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fragments-on-composite-type](https://the-guild.dev/graphql/eslint/rules/fragments-on-composite-type)
 */
export interface FragmentsOnCompositeTypeRule {
  /**
 * Fragments use a type condition to determine if they apply, since fragments can only be spread into a composite type (object, interface, or union), the type condition must also be a composite type.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [fragments-on-composite-type](https://the-guild.dev/graphql/eslint/rules/fragments-on-composite-type)
 */
  '@graphql-eslint/fragments-on-composite-type': FragmentsOnCompositeTypeRuleConfig;
}
