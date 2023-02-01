import type { RuleConfig } from '../rule-config';

/**
 * Checks for duplicate fields in selection set, variables in operation definition, or in arguments set of a field.
 *
 * @see [no-duplicate-fields](https://the-guild.dev/graphql/eslint/rules/no-duplicate-fields)
 */
export type NoDuplicateFieldsRuleConfig = RuleConfig<[]>;

/**
 * Checks for duplicate fields in selection set, variables in operation definition, or in arguments set of a field.
 *
 * @see [no-duplicate-fields](https://the-guild.dev/graphql/eslint/rules/no-duplicate-fields)
 */
export interface NoDuplicateFieldsRule {
  /**
   * Checks for duplicate fields in selection set, variables in operation definition, or in arguments set of a field.
   *
   * @see [no-duplicate-fields](https://the-guild.dev/graphql/eslint/rules/no-duplicate-fields)
   */
  '@graphql-eslint/no-duplicate-fields': NoDuplicateFieldsRuleConfig;
}
