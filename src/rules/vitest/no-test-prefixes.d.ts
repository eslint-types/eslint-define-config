import type { RuleConfig } from '../rule-config';

/**
 * Disallow using `test` as a prefix.
 *
 * @see [no-test-prefixes](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
 */
export type NoTestPrefixesRuleConfig = RuleConfig<[]>;

/**
 * Disallow using `test` as a prefix.
 *
 * @see [no-test-prefixes](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
 */
export interface NoTestPrefixesRule {
  /**
   * Disallow using `test` as a prefix.
   *
   * @see [no-test-prefixes](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
   */
  'vitest/no-test-prefixes': NoTestPrefixesRuleConfig;
}
