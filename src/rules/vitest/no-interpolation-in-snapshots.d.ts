import type { RuleConfig } from '../rule-config';

/**
 * Disallow string interpolation in snapshots.
 *
 * @see [no-interpolation-in-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
 */
export type NoInterpolationInSnapshotsRuleConfig = RuleConfig<[]>;

/**
 * Disallow string interpolation in snapshots.
 *
 * @see [no-interpolation-in-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
 */
export interface NoInterpolationInSnapshotsRule {
  /**
   * Disallow string interpolation in snapshots.
   *
   * @see [no-interpolation-in-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
   */
  'vitest/no-interpolation-in-snapshots': NoInterpolationInSnapshotsRuleConfig;
}
