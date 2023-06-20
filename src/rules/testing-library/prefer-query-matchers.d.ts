import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferQueryMatchersOption {
  validEntries?: {
    query?: 'get' | 'query';
    matcher?: string;
    [k: string]: any;
  }[];
}

/**
 * Options.
 */
export type PreferQueryMatchersOptions = [PreferQueryMatchersOption?];

/**
 * Ensure the configured `get*`/`query*` query is used with the corresponding matchers.
 *
 * @see [prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md)
 */
export type PreferQueryMatchersRuleConfig =
  RuleConfig<PreferQueryMatchersOptions>;

/**
 * Ensure the configured `get*`/`query*` query is used with the corresponding matchers.
 *
 * @see [prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md)
 */
export interface PreferQueryMatchersRule {
  /**
   * Ensure the configured `get*`/`query*` query is used with the corresponding matchers.
   *
   * @see [prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md)
   */
  'testing-library/prefer-query-matchers': PreferQueryMatchersRuleConfig;
}
