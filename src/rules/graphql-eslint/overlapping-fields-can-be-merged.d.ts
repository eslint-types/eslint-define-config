import type { RuleConfig } from '../rule-config';

/**
 * A selection set is only valid if all fields (including spreading any fragments) either correspond to distinct response names or can be merged without ambiguity.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [overlapping-fields-can-be-merged](https://the-guild.dev/graphql/eslint/rules/overlapping-fields-can-be-merged)
 */
export type OverlappingFieldsCanBeMergedRuleConfig = RuleConfig<[]>;

/**
 * A selection set is only valid if all fields (including spreading any fragments) either correspond to distinct response names or can be merged without ambiguity.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [overlapping-fields-can-be-merged](https://the-guild.dev/graphql/eslint/rules/overlapping-fields-can-be-merged)
 */
export interface OverlappingFieldsCanBeMergedRule {
  /**
 * A selection set is only valid if all fields (including spreading any fragments) either correspond to distinct response names or can be merged without ambiguity.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [overlapping-fields-can-be-merged](https://the-guild.dev/graphql/eslint/rules/overlapping-fields-can-be-merged)
 */
  '@graphql-eslint/overlapping-fields-can-be-merged': OverlappingFieldsCanBeMergedRuleConfig;
}
