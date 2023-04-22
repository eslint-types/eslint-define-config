import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTestFilenameOption = {
  allTestPattern?: RegExp;
  pattern?: RegExp;
};

/**
 * Options.
 */
export type ConsistentTestFilenameOptions = [ConsistentTestFilenameOption?];

/**
 * Forbidden .spec test file pattern.
 *
 * @see [consistent-test-filename](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
 */
export type ConsistentTestFilenameRuleConfig =
  RuleConfig<ConsistentTestFilenameOptions>;

/**
 * Forbidden .spec test file pattern.
 *
 * @see [consistent-test-filename](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
 */
export interface ConsistentTestFilenameRule {
  /**
   * Forbidden .spec test file pattern.
   *
   * @see [consistent-test-filename](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
   */
  'vitest/consistent-test-filename': ConsistentTestFilenameRuleConfig;
}
