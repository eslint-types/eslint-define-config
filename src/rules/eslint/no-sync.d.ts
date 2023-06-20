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
 * @deprecated
 *
 * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
 */
export type NoSyncRuleConfig = RuleConfig<NoSyncOptions>;

/**
 * Disallow synchronous methods.
 *
 * @deprecated
 *
 * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
 */
export interface NoSyncRule {
  /**
   * Disallow synchronous methods.
   *
   * @deprecated
   *
   * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
   */
  'no-sync': NoSyncRuleConfig;
}
