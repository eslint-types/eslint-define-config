import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoRestrictedMatchersOption = {
  [key: string]: unknown;
};

/**
 * Options.
 */
export type NoRestrictedMatchersOptions = [NoRestrictedMatchersOption];

/**
 * Disallow the use of certain matchers.
 *
 * @see [no-restricted-matchers](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md)
 */
export type NoRestrictedMatchersRuleConfig =
  RuleConfig<NoRestrictedMatchersOptions>;

/**
 * Disallow the use of certain matchers.
 *
 * @see [no-restricted-matchers](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md)
 */
export interface NoRestrictedMatchersRule {
  /**
   * Disallow the use of certain matchers.
   *
   * @see [no-restricted-matchers](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md)
   */
  'vitest/no-restricted-matchers': NoRestrictedMatchersRuleConfig;
}
