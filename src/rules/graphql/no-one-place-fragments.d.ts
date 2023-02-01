import type { RuleConfig } from '../rule-config';

/**
 * Disallow fragments that are used only in one place.
 *
 * @see [no-one-place-fragments](https://the-guild.dev/graphql/eslint/rules/no-one-place-fragments)
 */
export type NoOnePlaceFragmentsRuleConfig = RuleConfig<[]>;

/**
 * Disallow fragments that are used only in one place.
 *
 * @see [no-one-place-fragments](https://the-guild.dev/graphql/eslint/rules/no-one-place-fragments)
 */
export interface NoOnePlaceFragmentsRule {
  /**
   * Disallow fragments that are used only in one place.
   *
   * @see [no-one-place-fragments](https://the-guild.dev/graphql/eslint/rules/no-one-place-fragments)
   */
  '@graphql-eslint/no-one-place-fragments': NoOnePlaceFragmentsRuleConfig;
}
