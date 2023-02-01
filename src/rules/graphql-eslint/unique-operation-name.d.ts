import type { RuleConfig } from '../rule-config';

/**
 * Enforce unique operation names across your project.
 *
 * @see [unique-operation-name](https://the-guild.dev/graphql/eslint/rules/unique-operation-name)
 */
export type UniqueOperationNameRuleConfig = RuleConfig<[]>;

/**
 * Enforce unique operation names across your project.
 *
 * @see [unique-operation-name](https://the-guild.dev/graphql/eslint/rules/unique-operation-name)
 */
export interface UniqueOperationNameRule {
  /**
   * Enforce unique operation names across your project.
   *
   * @see [unique-operation-name](https://the-guild.dev/graphql/eslint/rules/unique-operation-name)
   */
  '@graphql-eslint/unique-operation-name': UniqueOperationNameRuleConfig;
}
