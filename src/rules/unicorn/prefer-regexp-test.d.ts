import type { RuleConfig } from '../rule-config';

/**
 * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
 *
 * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-regexp-test.md)
 */
export type PreferRegexpTestRuleConfig = RuleConfig<[]>;

/**
 * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
 *
 * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-regexp-test.md)
 */
export interface PreferRegexpTestRule {
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   *
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v45.0.2/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': PreferRegexpTestRuleConfig;
}
