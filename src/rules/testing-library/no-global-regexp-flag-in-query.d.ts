import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of the global RegExp flag (/g) in queries.
 *
 * @see [no-global-regexp-flag-in-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md)
 */
export type NoGlobalRegexpFlagInQueryRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of the global RegExp flag (/g) in queries.
 *
 * @see [no-global-regexp-flag-in-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md)
 */
export interface NoGlobalRegexpFlagInQueryRule {
  /**
   * Disallow the use of the global RegExp flag (/g) in queries.
   *
   * @see [no-global-regexp-flag-in-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md)
   */
  'testing-library/no-global-regexp-flag-in-query': NoGlobalRegexpFlagInQueryRuleConfig;
}
