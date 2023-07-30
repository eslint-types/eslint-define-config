import type { RuleConfig } from '../rule-config';

/**
 * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
 *
 * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-regexp-test.md)
 */
export type PreferRegexpTestRuleConfig = RuleConfig<[]>;

/**
 * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
 *
 * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-regexp-test.md)
 */
export interface PreferRegexpTestRule {
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   *
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': PreferRegexpTestRuleConfig;
}
