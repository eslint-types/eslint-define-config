import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAwaitSyncEventsOption {
  /**
   * @minItems 1
   */
  eventModules?: [
    'fire-event' | 'user-event',
    ...('fire-event' | 'user-event')[],
  ];
}

/**
 * Options.
 */
export type NoAwaitSyncEventsOptions = [NoAwaitSyncEventsOption?];

/**
 * Disallow unnecessary `await` for sync events.
 *
 * @see [no-await-sync-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md)
 */
export type NoAwaitSyncEventsRuleConfig = RuleConfig<NoAwaitSyncEventsOptions>;

/**
 * Disallow unnecessary `await` for sync events.
 *
 * @see [no-await-sync-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md)
 */
export interface NoAwaitSyncEventsRule {
  /**
   * Disallow unnecessary `await` for sync events.
   *
   * @see [no-await-sync-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md)
   */
  'testing-library/no-await-sync-events': NoAwaitSyncEventsRuleConfig;
}
