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
 * @see [no-sync](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-sync.md)
 */
export type NoSyncRuleConfig = RuleConfig<NoSyncOptions>;

/**
 * Disallow synchronous methods.
 *
 * @see [no-sync](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-sync.md)
 */
export interface NoSyncRule {
  /**
   * Disallow synchronous methods.
   *
   * @see [no-sync](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-sync.md)
   */
  'n/no-sync': NoSyncRuleConfig;
}
