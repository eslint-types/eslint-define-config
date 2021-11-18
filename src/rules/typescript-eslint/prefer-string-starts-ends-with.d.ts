import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
 *
 * @see [prefer-string-starts-ends-with](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)
 */
export type PreferStringStartsEndsWithRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
 *
 * @see [prefer-string-starts-ends-with](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)
 */
export interface PreferStringStartsEndsWithRule {
  /**
   * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
   *
   * @see [prefer-string-starts-ends-with](https://github.com/typescript-eslint/typescript-eslint/blob/v5.4.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md)
   */
  '@typescript-eslint/prefer-string-starts-ends-with': PreferStringStartsEndsWithRuleConfig;
}
