import type { RuleConfig } from '../rule-config';

/**
 * Disallow importing from __mocks__ directory.
 *
 * @see [no-mocks-import](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
 */
export type NoMocksImportRuleConfig = RuleConfig<[]>;

/**
 * Disallow importing from __mocks__ directory.
 *
 * @see [no-mocks-import](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
 */
export interface NoMocksImportRule {
  /**
   * Disallow importing from __mocks__ directory.
   *
   * @see [no-mocks-import](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
   */
  'vitest/no-mocks-import': NoMocksImportRuleConfig;
}
