import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoSyncOption {
  allowAtRootLevel?: boolean;
}

/**
 * Options.
 */
export type NoSyncOptions = [NoSyncOption?];

/**
 * Disallow synchronous methods.
 *
 * @see [no-sync](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-sync.md)
 */
export type NoSyncRuleConfig = RuleConfig<NoSyncOptions>;

/**
 * Disallow synchronous methods.
 *
 * @see [no-sync](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-sync.md)
 */
export interface NoSyncRule {
  /**
   * Disallow synchronous methods.
   *
   * @see [no-sync](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-sync.md)
   */
  'node/no-sync': NoSyncRuleConfig;
}
