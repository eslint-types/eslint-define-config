import type { RuleConfig } from '../rule-config';

/**
 * Requires all fields to be used at some level by siblings operations.
 *
 * @see [no-unused-fields](https://the-guild.dev/graphql/eslint/rules/no-unused-fields)
 */
export type NoUnusedFieldsRuleConfig = RuleConfig<[]>;

/**
 * Requires all fields to be used at some level by siblings operations.
 *
 * @see [no-unused-fields](https://the-guild.dev/graphql/eslint/rules/no-unused-fields)
 */
export interface NoUnusedFieldsRule {
  /**
   * Requires all fields to be used at some level by siblings operations.
   *
   * @see [no-unused-fields](https://the-guild.dev/graphql/eslint/rules/no-unused-fields)
   */
  '@graphql-eslint/no-unused-fields': NoUnusedFieldsRuleConfig;
}
