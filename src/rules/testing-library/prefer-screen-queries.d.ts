import type { RuleConfig } from '../rule-config';

/**
 * Suggest using `screen` while querying.
 *
 * @see [prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md)
 */
export type PreferScreenQueriesRuleConfig = RuleConfig<[]>;

/**
 * Suggest using `screen` while querying.
 *
 * @see [prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md)
 */
export interface PreferScreenQueriesRule {
  /**
   * Suggest using `screen` while querying.
   *
   * @see [prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md)
   */
  'testing-library/prefer-screen-queries': PreferScreenQueriesRuleConfig;
}
