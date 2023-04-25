import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary `await` for sync queries.
 *
 * @see [no-await-sync-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-query.md)
 */
export type NoAwaitSyncQueryRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary `await` for sync queries.
 *
 * @see [no-await-sync-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-query.md)
 */
export interface NoAwaitSyncQueryRule {
  /**
   * Disallow unnecessary `await` for sync queries.
   *
   * @see [no-await-sync-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-query.md)
   */
  'testing-library/no-await-sync-query': NoAwaitSyncQueryRuleConfig;
}
