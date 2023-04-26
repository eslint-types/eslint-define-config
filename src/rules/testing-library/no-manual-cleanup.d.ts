import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `cleanup`.
 *
 * @see [no-manual-cleanup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md)
 */
export type NoManualCleanupRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `cleanup`.
 *
 * @see [no-manual-cleanup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md)
 */
export interface NoManualCleanupRule {
  /**
   * Disallow the use of `cleanup`.
   *
   * @see [no-manual-cleanup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md)
   */
  'testing-library/no-manual-cleanup': NoManualCleanupRuleConfig;
}
