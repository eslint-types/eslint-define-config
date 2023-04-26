import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferPresenceQueriesOption {
  presence?: boolean;
  absence?: boolean;
}

/**
 * Options.
 */
export type PreferPresenceQueriesOptions = [PreferPresenceQueriesOption?];

/**
 * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
 *
 * @see [prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md)
 */
export type PreferPresenceQueriesRuleConfig =
  RuleConfig<PreferPresenceQueriesOptions>;

/**
 * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
 *
 * @see [prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md)
 */
export interface PreferPresenceQueriesRule {
  /**
   * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
   *
   * @see [prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md)
   */
  'testing-library/prefer-presence-queries': PreferPresenceQueriesRuleConfig;
}
