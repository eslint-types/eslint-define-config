import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferExplicitAssertOption {
  assertion?: 'toBeInTheDocument' | 'toBeTruthy' | 'toBeDefined';
  includeFindQueries?: boolean;
}

/**
 * Options.
 */
export type PreferExplicitAssertOptions = [PreferExplicitAssertOption?];

/**
 * Suggest using explicit assertions rather than standalone queries.
 *
 * @see [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md)
 */
export type PreferExplicitAssertRuleConfig =
  RuleConfig<PreferExplicitAssertOptions>;

/**
 * Suggest using explicit assertions rather than standalone queries.
 *
 * @see [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md)
 */
export interface PreferExplicitAssertRule {
  /**
   * Suggest using explicit assertions rather than standalone queries.
   *
   * @see [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md)
   */
  'testing-library/prefer-explicit-assert': PreferExplicitAssertRuleConfig;
}
