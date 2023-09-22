import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary `await` for sync queries.
 *
 * @see [no-await-sync-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-queries.md)
 */
export type NoAwaitSyncQueriesRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary `await` for sync queries.
 *
 * @see [no-await-sync-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-queries.md)
 */
export interface NoAwaitSyncQueriesRule {
  /**
   * Disallow unnecessary `await` for sync queries.
   *
   * @see [no-await-sync-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-queries.md)
   */
  'testing-library/no-await-sync-queries': NoAwaitSyncQueriesRuleConfig;
}
