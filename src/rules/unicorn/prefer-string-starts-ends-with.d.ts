import type { RuleConfig } from '../rule-config';

/**
 * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
 *
 * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-starts-ends-with.md)
 */
export type PreferStringStartsEndsWithRuleConfig = RuleConfig<[]>;

/**
 * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
 *
 * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-starts-ends-with.md)
 */
export interface PreferStringStartsEndsWithRule {
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   *
   * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-string-starts-ends-with.md)
   */
  'unicorn/prefer-string-starts-ends-with': PreferStringStartsEndsWithRuleConfig;
}
