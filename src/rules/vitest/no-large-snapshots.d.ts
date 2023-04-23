import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoLargeSnapshotsOption {
  maxSize?: number;
  inlineMaxSize?: number;
  allowedSnapshots?: {
    [k: string]: any[];
  };
}

/**
 * Options.
 */
export type NoLargeSnapshotsOptions = [NoLargeSnapshotsOption?];

/**
 * Disallow large snapshots.
 *
 * @see [no-large-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
 */
export type NoLargeSnapshotsRuleConfig = RuleConfig<NoLargeSnapshotsOptions>;

/**
 * Disallow large snapshots.
 *
 * @see [no-large-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
 */
export interface NoLargeSnapshotsRule {
  /**
   * Disallow large snapshots.
   *
   * @see [no-large-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
   */
  'vitest/no-large-snapshots': NoLargeSnapshotsRuleConfig;
}
