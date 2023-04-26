import type { RuleConfig } from '../rule-config';

/**
 * Ensures no snapshot is generated inside of a `waitFor` call.
 *
 * @see [no-wait-for-snapshot](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md)
 */
export type NoWaitForSnapshotRuleConfig = RuleConfig<[]>;

/**
 * Ensures no snapshot is generated inside of a `waitFor` call.
 *
 * @see [no-wait-for-snapshot](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md)
 */
export interface NoWaitForSnapshotRule {
  /**
   * Ensures no snapshot is generated inside of a `waitFor` call.
   *
   * @see [no-wait-for-snapshot](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md)
   */
  'testing-library/no-wait-for-snapshot': NoWaitForSnapshotRuleConfig;
}
