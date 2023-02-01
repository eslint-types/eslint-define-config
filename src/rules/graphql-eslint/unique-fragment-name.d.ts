import type { RuleConfig } from '../rule-config';

/**
 * Enforce unique fragment names across your project.
 *
 * @see [unique-fragment-name](https://the-guild.dev/graphql/eslint/rules/unique-fragment-name)
 */
export type UniqueFragmentNameRuleConfig = RuleConfig<[]>;

/**
 * Enforce unique fragment names across your project.
 *
 * @see [unique-fragment-name](https://the-guild.dev/graphql/eslint/rules/unique-fragment-name)
 */
export interface UniqueFragmentNameRule {
  /**
   * Enforce unique fragment names across your project.
   *
   * @see [unique-fragment-name](https://the-guild.dev/graphql/eslint/rules/unique-fragment-name)
   */
  '@graphql-eslint/unique-fragment-name': UniqueFragmentNameRuleConfig;
}
